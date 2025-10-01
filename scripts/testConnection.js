import {
  databases,
  DATABASE_ID,
  TABLES,
  validateConnection,
} from "../lib/appwrite-server.js";

async function testConnection() {
  console.log("🔍 Testing Appwrite connection...\n");

  try {
    // Step 1: Validate configuration
    console.log("Step 1: Validating configuration...");
    validateConnection();
    console.log("✅ Configuration valid\n");

    // Step 2: Test database connection
    console.log("Step 2: Testing database connection...");

    if (!DATABASE_ID) {
      throw new Error("DATABASE_ID is not configured");
    }

    // Try to list existing collections in the database
    console.log("Attempting to connect to database...");

    // First, let's try to list documents from an existing collection to verify the connection
    try {
      const testResponse = await databases.listDocuments(
        DATABASE_ID,
        TABLES.RSVP_FORM,
        []
      );
      console.log(
        `✅ Database connection successful! Found ${testResponse.total} RSVP form entries`
      );
    } catch (error) {
      console.log(
        "❌ Failed to connect to existing RSVP collection:",
        error.message
      );
      throw error;
    }

    // Step 3: Test the users collection specifically
    console.log("\nStep 3: Testing users collection...");
    try {
      const usersResponse = await databases.listDocuments(
        DATABASE_ID,
        TABLES.USERS,
        []
      );
      console.log(
        `✅ Users collection exists! Found ${usersResponse.total} user records`
      );

      if (usersResponse.total > 0) {
        console.log("📋 Sample user record:");
        console.log(JSON.stringify(usersResponse.documents[0], null, 2));
      }
    } catch (error) {
      if (
        error.message.includes(
          "Collection with the requested ID could not be found"
        )
      ) {
        console.log(`❌ Users collection '${TABLES.USERS}' does not exist`);
        console.log(`
🛠️  TO FIX THIS:
1. Go to: https://fra.cloud.appwrite.io/console
2. Select your project: ${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}
3. Go to Databases → ${DATABASE_ID}
4. Create a new collection with ID: '${TABLES.USERS}'
5. Add the required attributes:
   - male_member_name (String, 255, optional)
   - female_member_name (String, 255, optional)
   - child_member_name (String, 255, optional)
   - male_email (Email, optional)
   - female_email (Email, optional)
   - child_email (Email, optional)
   - male_phone (String, 50, optional)
   - female_phone (String, 50, optional)
   - child_phone (String, 50, optional)
   - male_phone_alt (String, 50, optional)
   - female_phone_alt (String, 50, optional)
   - membership_status (String, 50, required, default: "active")
   - rsvp_status (String, 100, optional)
   - notes (String, 1000, optional)
        `);
      } else {
        console.log("❌ Error testing users collection:", error.message);
      }
      throw error;
    }

    console.log("\n🎉 All tests passed! Ready for upload.");
  } catch (error) {
    console.error("\n💥 Connection test failed:", error.message);
    process.exit(1);
  }
}

// Run the test
testConnection();
