import { useState, useEffect } from "react";
import { dbOperations } from "@/lib/db";
import type {
  Event,
  ExcoMember,
  ContentBlock,
  AppwriteDocument,
} from "@/lib/db";

export function useEvents() {
  const [events, setEvents] = useState<AppwriteDocument<Event>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      const response = await dbOperations.events.list();
      setEvents(response.documents as unknown as AppwriteDocument<Event>[]);
    } catch (err) {
      setError("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (event: Event) => {
    try {
      await dbOperations.events.create(event);
      await fetchEvents(); // Refresh the list
    } catch (err) {
      setError("Failed to add event");
    }
  };

  const updateEvent = async (id: string, event: Partial<Event>) => {
    try {
      await dbOperations.events.update(id, event);
      await fetchEvents(); // Refresh the list
    } catch (err) {
      setError("Failed to update event");
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await dbOperations.events.delete(id);
      await fetchEvents(); // Refresh the list
    } catch (err) {
      setError("Failed to delete event");
    }
  };

  return { events, loading, error, addEvent, updateEvent, deleteEvent };
}

export function useExcoMembers() {
  const [members, setMembers] = useState<AppwriteDocument<ExcoMember>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMembers = async () => {
    try {
      const response = await dbOperations.exco.list();
      setMembers(
        response.documents as unknown as AppwriteDocument<ExcoMember>[]
      );
    } catch (err) {
      setError("Failed to fetch members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const addMember = async (member: ExcoMember) => {
    try {
      await dbOperations.exco.create(member);
      await fetchMembers(); // Refresh the list
    } catch (err) {
      setError("Failed to add member");
    }
  };

  const updateMember = async (id: string, member: Partial<ExcoMember>) => {
    try {
      await dbOperations.exco.update(id, member);
      await fetchMembers(); // Refresh the list
    } catch (err) {
      setError("Failed to update member");
    }
  };

  const deleteMember = async (id: string) => {
    try {
      await dbOperations.exco.delete(id);
      await fetchMembers(); // Refresh the list
    } catch (err) {
      setError("Failed to delete member");
    }
  };

  return { members, loading, error, addMember, updateMember, deleteMember };
}

export function useContent(key: string) {
  const [content, setContent] = useState<AppwriteDocument<ContentBlock> | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      const response = await dbOperations.content.get(key);
      setContent(response as unknown as AppwriteDocument<ContentBlock>);
    } catch (err) {
      setError("Failed to fetch content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [key]);

  const updateContent = async (id: string, data: Partial<ContentBlock>) => {
    try {
      await dbOperations.content.update(id, data);
      await fetchContent(); // Refresh the content
    } catch (err) {
      setError("Failed to update content");
    }
  };

  return { content, loading, error, updateContent };
}
