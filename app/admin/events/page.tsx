"use client";

import { useState } from "react";
import { useEvents } from "@/hooks/useDatabase";
import type { Event } from "@/lib/db";

export default function AdminEventsPage() {
  const { events, loading, error, addEvent, updateEvent, deleteEvent } =
    useEvents();
  const [isEditing, setIsEditing] = useState(false);
  const [editingEvent, setEditingEvent] = useState<
    Partial<Event> & { id?: string }
  >({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingEvent.id) {
        // Update existing event
        const { id, ...eventData } = editingEvent;
        await updateEvent(id, eventData as Event);
      } else {
        // Create new event
        await addEvent(editingEvent as Event);
      }
      setIsEditing(false);
      setEditingEvent({});
    } catch (err) {
      console.error("Failed to save event:", err);
    }
  };

  const handleEdit = (event: Event & { $id: string }) => {
    setEditingEvent({ ...event, id: event.$id });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(id);
      } catch (err) {
        console.error("Failed to delete event:", err);
      }
    }
  };

  if (loading) {
    return <div className="p-8">Loading events...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">Error loading events: {error}</div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Events</h1>
        {!isEditing && (
          <button
            onClick={() => {
              setIsEditing(true);
              setEditingEvent({});
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New Event
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={editingEvent.title || ""}
              onChange={(e) =>
                setEditingEvent({ ...editingEvent, title: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={editingEvent.description || ""}
              onChange={(e) =>
                setEditingEvent({
                  ...editingEvent,
                  description: e.target.value,
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={editingEvent.date || ""}
              onChange={(e) =>
                setEditingEvent({ ...editingEvent, date: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={editingEvent.location || ""}
              onChange={(e) =>
                setEditingEvent({ ...editingEvent, location: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              value={editingEvent.type || ""}
              onChange={(e) =>
                setEditingEvent({
                  ...editingEvent,
                  type: e.target.value as Event["type"],
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select type</option>
              <option value="Workshop">Workshop</option>
              <option value="Social">Social</option>
              <option value="Community">Community</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              value={editingEvent.imageUrl || ""}
              onChange={(e) =>
                setEditingEvent({ ...editingEvent, imageUrl: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editingEvent.id ? "Update Event" : "Create Event"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditingEvent({});
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.$id} className="border rounded-lg p-4">
              <img
                src={event.imageUrl || "https://via.placeholder.com/400x200"}
                alt={event.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{event.description}</p>
              <p className="text-sm">
                <span className="font-medium">Date:</span>{" "}
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-medium">Location:</span> {event.location}
              </p>
              <p className="text-sm">
                <span className="font-medium">Type:</span> {event.type}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.$id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
