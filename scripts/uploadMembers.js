import { databases, DATABASE_ID } from "../lib/appwrite.js";
import { cleanMemberData, validateMemberData } from "../lib/memberDataUtils.js";
import fs from "fs";
import path from "path";

// Collection ID for users (you'll need to update this after creating the collection)
const USERS_COLLECTION_ID = "users"; // Update this with your actual collection ID

/**
 * One-time script to upload member data to Appwrite
 * Run this script only once after setting up the Appwrite collection
 */
async function uploadMemberData() {
  try {
    console.log("🚀 Starting member data upload...");

    // Read the members data from the attachment format
    const membersData = [
      {
        __EMPTY: "A",
        "Male Member": "Abhidipta Guha",
        "Female Member": "Sunanda Bose",
        "TentativeDelete from RSVP list": "x = Not sure",
      },
      {
        "Male Member": "Abhishek Chatterjee",
        "Female Member": "Cousin",
        "TentativeDelete from RSVP list": "x",
        "Male Member Email address": "abhishek.za@outlook.com",
        "Female Member Email address": "Not Member",
        "Male Member #": " +27 73 816 6603",
      },
      // ... you'll need to add the complete data here or read from file
    ];

    // For now, let's read from the JSON file if it exists
    let rawData;
    try {
      const filePath = path.join(process.cwd(), "public", "members.json");
      const fileContent = fs.readFileSync(filePath, "utf8");
      const jsonData = JSON.parse(fileContent);

      // Check if it's the attachment format or already processed format
      if (jsonData.members) {
        console.log(
          "⚠️  Found processed members.json, using attachment data instead"
        );
        // Use the attachment data (you'll need to paste it here)
        rawData = membersData; // Placeholder - replace with actual attachment data
      } else {
        rawData = jsonData;
      }
    } catch (error) {
      console.log("📝 Using attachment data as fallback");
      rawData = membersData;
    }

    // Clean and validate the data
    console.log("🧹 Cleaning member data...");
    const cleanedMembers = cleanMemberData(rawData);
    console.log(`✅ Cleaned ${cleanedMembers.length} member records`);

    // Validate each member
    const validMembers = [];
    const invalidMembers = [];

    cleanedMembers.forEach((member, index) => {
      const errors = validateMemberData(member);
      if (errors.length === 0) {
        validMembers.push(member);
      } else {
        invalidMembers.push({ index, member, errors });
      }
    });

    console.log(`✅ Valid members: ${validMembers.length}`);
    console.log(`❌ Invalid members: ${invalidMembers.length}`);

    if (invalidMembers.length > 0) {
      console.log("Invalid members:", invalidMembers.slice(0, 5)); // Show first 5
    }

    // Upload valid members to Appwrite
    console.log("☁️  Uploading to Appwrite...");
    const uploadResults = [];
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < validMembers.length; i++) {
      const member = validMembers[i];
      try {
        const result = await databases.createDocument(
          DATABASE_ID,
          USERS_COLLECTION_ID,
          "unique()", // Let Appwrite generate unique ID
          member
        );
        uploadResults.push({ success: true, id: result.$id, member });
        successCount++;

        // Log progress every 10 uploads
        if ((i + 1) % 10 === 0) {
          console.log(`📤 Uploaded ${i + 1}/${validMembers.length} members...`);
        }
      } catch (error) {
        console.error(`❌ Failed to upload member ${i + 1}:`, error.message);
        uploadResults.push({ success: false, error: error.message, member });
        errorCount++;
      }
    }

    console.log("\n🎉 Upload completed!");
    console.log(`✅ Successfully uploaded: ${successCount} members`);
    console.log(`❌ Failed uploads: ${errorCount} members`);

    // Save results for review
    const resultsPath = path.join(process.cwd(), "upload-results.json");
    fs.writeFileSync(
      resultsPath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          summary: {
            total_processed: cleanedMembers.length,
            valid_members: validMembers.length,
            invalid_members: invalidMembers.length,
            successful_uploads: successCount,
            failed_uploads: errorCount,
          },
          upload_results: uploadResults,
          invalid_members: invalidMembers,
        },
        null,
        2
      )
    );

    console.log(`📊 Detailed results saved to: ${resultsPath}`);
  } catch (error) {
    console.error("💥 Upload failed:", error);
  }
}

// Export for use in other files
export { uploadMemberData, USERS_COLLECTION_ID };

// Run if called directly
if (import.meta.url === new URL(process.argv[1], "file://").href) {
  uploadMemberData();
}
