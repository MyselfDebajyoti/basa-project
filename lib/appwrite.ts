import { Client, Account, Databases, Query } from "appwrite";

const client = new Client()
  .setEndpoint(
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
      "https://nyc.cloud.appwrite.io/v1"
  )
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

export const account = new Account(client);
export const databases = new Databases(client);

// Collection IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
export const EVENTS_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_EVENTS_COLLECTION_ID || "";
export const EXCO_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_EXCO_COLLECTION_ID || "";
export const CONTENT_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_CONTENT_COLLECTION_ID || "";

export default client;
