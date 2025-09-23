import { Client, Databases } from "appwrite";

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

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
};

// Legacy support
export const TABLE_ID = process.env.NEXT_PUBLIC_APPWRITE_TABLE_ID;

export { client };
