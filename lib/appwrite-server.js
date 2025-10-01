import { Client, Databases } from "appwrite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize the Appwrite client for server-side operations
const client = new Client();

client
  .setEndpoint(
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
      "https://fra.cloud.appwrite.io/v1"
  )
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

// For server-side operations, we might need to set API key if required
// client.setKey(process.env.APPWRITE_API_KEY);

// Initialize the Databases service
export const databases = new Databases(client);

// Your database and table IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

// Table IDs for different forms
export const TABLES = {
  STUDENT_FORMS: "student_forms",
  RSVP_FORM: "rsvpform",
  MEMBERSHIP_FORM: "membershipform",
  CONTACT_ENQUIRIES_FORM: "contactenquiriesform",
  USERS: "users", // User management collection
};

// Validation function
export const validateConnection = () => {
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_APPWRITE_ENDPOINT is not defined");
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
    throw new Error("NEXT_PUBLIC_APPWRITE_PROJECT_ID is not defined");
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID) {
    throw new Error("NEXT_PUBLIC_APPWRITE_DATABASE_ID is not defined");
  }

  console.log("✅ Appwrite configuration validated");
  console.log("Endpoint:", process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
  console.log("Project ID:", process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
  console.log("Database ID:", process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID);
};

export { client };
