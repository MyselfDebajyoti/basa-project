import { ID, Query, Models } from "appwrite";
import {
  databases,
  DATABASE_ID,
  EVENTS_COLLECTION_ID,
  EXCO_COLLECTION_ID,
} from "./appwrite";

export type AppwriteDocument<T> = T & Models.Document;

// Database and Collections IDs
export const CONTENT_COLLECTION_ID = "content";

// Type definitions
export interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  type: "Workshop" | "Social" | "Community";
  imageUrl?: string;
}

export interface ExcoMember {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
  order: number;
}

export interface ContentBlock {
  key: string;
  value: string;
  type: "text" | "html" | "image";
  lastUpdated: string;
}

// Database operations
export const dbOperations = {
  // Events Operations
  events: {
    create: async (data: Event) => {
      return await databases.createDocument(
        DATABASE_ID,
        EVENTS_COLLECTION_ID,
        ID.unique(),
        data
      );
    },

    list: async () => {
      return await databases.listDocuments(DATABASE_ID, EVENTS_COLLECTION_ID);
    },

    update: async (documentId: string, data: Partial<Event>) => {
      return await databases.updateDocument(
        DATABASE_ID,
        EVENTS_COLLECTION_ID,
        documentId,
        data
      );
    },

    delete: async (documentId: string) => {
      return await databases.deleteDocument(
        DATABASE_ID,
        EVENTS_COLLECTION_ID,
        documentId
      );
    },
  },

  // Exco Members Operations
  exco: {
    create: async (data: ExcoMember) => {
      return await databases.createDocument(
        DATABASE_ID,
        EXCO_COLLECTION_ID,
        ID.unique(),
        data
      );
    },

    list: async () => {
      return await databases.listDocuments(DATABASE_ID, EXCO_COLLECTION_ID, [
        Query.orderAsc("order"),
      ]);
    },

    update: async (documentId: string, data: Partial<ExcoMember>) => {
      return await databases.updateDocument(
        DATABASE_ID,
        EXCO_COLLECTION_ID,
        documentId,
        data
      );
    },

    delete: async (documentId: string) => {
      return await databases.deleteDocument(
        DATABASE_ID,
        EXCO_COLLECTION_ID,
        documentId
      );
    },
  },

  // Content Operations
  content: {
    create: async (data: ContentBlock) => {
      return await databases.createDocument(
        DATABASE_ID,
        CONTENT_COLLECTION_ID,
        ID.unique(),
        {
          ...data,
          lastUpdated: new Date().toISOString(),
        }
      );
    },

    get: async (key: string) => {
      const response = await databases.listDocuments(
        DATABASE_ID,
        CONTENT_COLLECTION_ID,
        [Query.equal("key", key)]
      );
      return response.documents[0];
    },

    update: async (documentId: string, data: Partial<ContentBlock>) => {
      return await databases.updateDocument(
        DATABASE_ID,
        CONTENT_COLLECTION_ID,
        documentId,
        {
          ...data,
          lastUpdated: new Date().toISOString(),
        }
      );
    },
  },
};
