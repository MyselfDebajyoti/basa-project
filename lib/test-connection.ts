import { databases, DATABASE_ID, EVENTS_COLLECTION_ID } from "@/lib/appwrite";

export async function testAppwriteConnection() {
  try {
    // Try to list documents from the Events collection
    const response = await databases.listDocuments(
      DATABASE_ID,
      EVENTS_COLLECTION_ID
    );
    console.log("Successfully connected to Appwrite!");
    console.log("Found", response.documents.length, "events");
    return true;
  } catch (error) {
    console.error("Failed to connect to Appwrite:", error);
    return false;
  }
}
