import {
  databases,
  DATABASE_ID,
  TABLES,
  validateConnection,
} from "../lib/appwrite-server.js";
import { cleanMemberData, validateMemberData } from "../lib/memberDataUtils.js";
import fs from "fs";
import path from "path";

// Function to load complete member data from JSON file
function loadMemberData() {
  try {
    const filePath = path.join(process.cwd(), "members.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    console.log(`📁 Loaded ${data.length} records from members.json`);
    return data;
  } catch (error) {
    console.error("❌ Failed to load members.json:", error);
    throw new Error("Could not load member data file");
  }
}

/**
 * Upload script to run once
 */
export async function runMemberUpload() {
  console.log("🚀 Starting BASA member data upload...");

  try {
    // Validate connection first
    await validateConnection();

    // Check if DATABASE_ID is available
    if (!DATABASE_ID) {
      throw new Error(
        "DATABASE_ID is not configured. Please check your environment variables."
      );
    }

    // Load the complete member data
    console.log("📂 Loading member data from JSON file...");
    const memberData = loadMemberData();

    // Clean the data
    console.log("🧹 Cleaning member data...");
    const cleanedMembers = cleanMemberData(memberData);
    console.log(
      `✅ Processed ${cleanedMembers.length} member records from ${memberData.length} raw records`
    );

    if (cleanedMembers.length === 0) {
      throw new Error("No valid member data to upload");
    }

    // Test database connection by trying to list collections
    console.log("🔍 Testing database connection...");
    try {
      await databases.listDocuments(DATABASE_ID, TABLES.USERS, []);
      console.log("✅ Database connection successful");
    } catch (dbError) {
      if (
        dbError.message.includes(
          "Collection with the requested ID could not be found"
        )
      ) {
        throw new Error(
          `The 'users' collection does not exist in your Appwrite database. Please create it first in the Appwrite console.`
        );
      } else {
        throw new Error(`Database connection failed: ${dbError.message}`);
      }
    }

    // Validate and upload
    let successCount = 0;
    let errorCount = 0;
    const errors = [];
    let batchCount = 0;
    const BATCH_SIZE = 10; // Process in batches to avoid overwhelming the API

    console.log(
      `📤 Starting upload of ${cleanedMembers.length} members in batches of ${BATCH_SIZE}...`
    );

    for (let i = 0; i < cleanedMembers.length; i++) {
      const member = cleanedMembers[i];

      try {
        // Validate the member data first
        const validationErrors = validateMemberData(member);
        if (validationErrors.length > 0) {
          console.warn(
            `⚠️  Validation issues for member ${i + 1}: ${validationErrors.join(
              ", "
            )}`
          );
        }

        // Create the document in Appwrite
        const result = await databases.createDocument(
          DATABASE_ID,
          TABLES.USERS,
          "unique()",
          member
        );

        successCount++;

        // Log progress every batch
        if (successCount % BATCH_SIZE === 0) {
          batchCount++;
          console.log(
            `📤 Batch ${batchCount} completed: ${successCount} members uploaded successfully`
          );
        }
      } catch (error) {
        errorCount++;
        const memberName =
          member.male_member_name ||
          member.female_member_name ||
          member.child_member_name ||
          "Unknown";
        errors.push({
          member: memberName,
          error: error.message,
          index: i + 1,
        });

        // Log detailed error for first few failures
        if (errorCount <= 3) {
          console.error(
            `❌ Failed to upload member ${i + 1} (${memberName}): ${
              error.message
            }`
          );
        }
      }
    }

    console.log("\n🎉 Upload completed!");
    console.log(`✅ Successfully uploaded: ${successCount} members`);
    console.log(`❌ Failed uploads: ${errorCount} members`);

    if (errors.length > 0) {
      console.log("\nFirst 3 error details:");
      errors.slice(0, 3).forEach((error, index) => {
        console.log(`${index + 1}. ${error.member}: ${error.error}`);
      });
    }

    return {
      success: successCount,
      errors: errorCount,
      total: cleanedMembers.length,
      errorDetails: errors.slice(0, 10), // Return first 10 errors for debugging
    };
  } catch (error) {
    console.error("💥 Upload failed:", error.message);
    throw error;
  }
}
