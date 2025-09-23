"use client";

import { useState } from "react";
import { useExcoMembers } from "@/hooks/useDatabase";
import type { ExcoMember } from "@/lib/db";

export default function AdminExcoPage() {
  const { members, loading, error, addMember, updateMember, deleteMember } =
    useExcoMembers();
  const [isEditing, setIsEditing] = useState(false);
  const [editingMember, setEditingMember] = useState<
    Partial<ExcoMember> & { id?: string }
  >({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingMember.id) {
        // Update existing member
        const { id, ...memberData } = editingMember;
        await updateMember(id, memberData as ExcoMember);
      } else {
        // Create new member
        await addMember(editingMember as ExcoMember);
      }
      setIsEditing(false);
      setEditingMember({});
    } catch (err) {
      console.error("Failed to save member:", err);
    }
  };

  const handleEdit = (member: ExcoMember & { $id: string }) => {
    setEditingMember({ ...member, id: member.$id });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await deleteMember(id);
      } catch (err) {
        console.error("Failed to delete member:", err);
      }
    }
  };

  if (loading) {
    return <div className="p-8">Loading members...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">Error loading members: {error}</div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Executive Committee</h1>
        {!isEditing && (
          <button
            onClick={() => {
              setIsEditing(true);
              setEditingMember({});
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New Member
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={editingMember.name || ""}
              onChange={(e) =>
                setEditingMember({ ...editingMember, name: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              value={editingMember.position || ""}
              onChange={(e) =>
                setEditingMember({ ...editingMember, position: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              value={editingMember.bio || ""}
              onChange={(e) =>
                setEditingMember({ ...editingMember, bio: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              value={editingMember.imageUrl || ""}
              onChange={(e) =>
                setEditingMember({ ...editingMember, imageUrl: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Display Order
            </label>
            <input
              type="number"
              value={editingMember.order || ""}
              onChange={(e) =>
                setEditingMember({
                  ...editingMember,
                  order: parseInt(e.target.value),
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="1"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editingMember.id ? "Update Member" : "Create Member"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditingMember({});
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div key={member.$id} className="border rounded-lg p-4">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 text-center mb-2">
                {member.position}
              </p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <p className="text-sm text-gray-500 text-center">
                Display Order: {member.order}
              </p>
              <div className="mt-4 flex gap-2 justify-center">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.$id)}
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
