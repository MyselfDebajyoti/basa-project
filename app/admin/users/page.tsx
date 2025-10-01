"use client";

import React, { useState, useEffect } from "react";
import { databases, DATABASE_ID, TABLES } from "../../../lib/appwrite";
// import { Mail, Phone, Edit3, Trash2, Users } from "lucide-react";

import { Models, Query } from "appwrite";
import {
  Users,
  Plus,
  Search,
  Edit3,
  Trash2,
  Download,
  UserPlus,
  Phone,
  Mail,
  Filter,
  MoreVertical,
  Save,
  X,
} from "lucide-react";
import * as XLSX from "xlsx";

// User interface
interface User extends Models.Document {
  male_member_name?: string;
  female_member_name?: string;
  child_member_name?: string;
  male_email?: string;
  female_email?: string;
  child_email?: string;
  male_phone?: string;
  female_phone?: string;
  child_phone?: string;
  male_phone_alt?: string;
  female_phone_alt?: string;
  membership_status: string;
  rsvp_status?: string;
  notes?: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [displayLimit] = useState(25); // Users per page for display
  const [loadingMore, setLoadingMore] = useState(false);

  // Form state for new/edit user
  const [formData, setFormData] = useState({
    male_member_name: "",
    female_member_name: "",
    child_member_name: "",
    male_email: "",
    female_email: "",
    child_email: "",
    male_phone: "",
    female_phone: "",
    child_phone: "",
    male_phone_alt: "",
    female_phone_alt: "",
    membership_status: "active",
    rsvp_status: "",
    notes: "",
  });

  // Load users from Appwrite - fetch ALL users
  const loadUsers = async () => {
    try {
      setLoading(true);
      if (!DATABASE_ID) throw new Error("Database ID not configured");

      // First, get the total count
      const initialResponse = await databases.listDocuments(
        DATABASE_ID,
        TABLES.USERS
      );

      setTotalUsers(initialResponse.total);

      // If we have more than 25 users, we need to fetch all of them
      if (initialResponse.total > 25) {
        const allUsers: User[] = [];
        let offset = 0;
        const limit = 100; // Fetch in batches of 100

        while (offset < initialResponse.total) {
          const batchResponse = await databases.listDocuments(
            DATABASE_ID,
            TABLES.USERS,
            [Query.limit(limit), Query.offset(offset)]
          );

          allUsers.push(...(batchResponse.documents as unknown as User[]));
          offset += limit;
        }

        setUsers(allUsers);
      } else {
        // If 25 or fewer users, use the initial response
        setUsers(initialResponse.documents as unknown as User[]);
      }
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Filter users based on search and status - search ALL users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchTerm === "" ||
      user.male_member_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.female_member_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.child_member_name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.male_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.female_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.child_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.male_phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.female_phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.notes?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "all" || user.membership_status === filter;

    return matchesSearch && matchesFilter;
  });

  // Paginate the filtered results for display
  const totalPages = Math.ceil(filteredUsers.length / displayLimit);
  const startIndex = (currentPage - 1) * displayLimit;
  const endIndex = startIndex + displayLimit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  // Reset to page 1 when search term or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filter]);

  // Create new user
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!DATABASE_ID) throw new Error("Database ID not configured");
      const newUser = await databases.createDocument(
        DATABASE_ID,
        TABLES.USERS,
        "unique()",
        {
          ...formData,
        //   created_at: new Date().toISOString(),
        //   updated_at: new Date().toISOString(),
        }
      );
      setUsers([...users, newUser as unknown as User]);
      setShowAddForm(false);
      resetForm();
    } catch (error) {
      console.error("Failed to create user:", error);
      alert("Failed to create user");
    }
  };

  // Update user
  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    try {
      if (!DATABASE_ID) throw new Error("Database ID not configured");
      const updatedUser = await databases.updateDocument(
        DATABASE_ID,
        TABLES.USERS,
        editingUser.$id,
        {
          ...formData,
        //   updated_at: new Date().toISOString(),
        }
      );
      setUsers(
        users.map((user) =>
          user.$id === editingUser.$id ? (updatedUser as unknown as User) : user
        )
      );
      setEditingUser(null);
      resetForm();
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Failed to update user");
    }
  };

  // Delete user
  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      if (!DATABASE_ID) throw new Error("Database ID not configured");
      await databases.deleteDocument(DATABASE_ID, TABLES.USERS, userId);
      setUsers(users.filter((user) => user.$id !== userId));
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user");
    }
  };

  // Delete all users
  const handleDeleteAll = async () => {
    if (
      !confirm(
        "Are you sure you want to delete ALL users? This action cannot be undone!"
      )
    )
      return;
    if (
      !confirm(
        'This will permanently delete all user data. Type "DELETE" to confirm'
      )
    )
      return;

    try {
      if (!DATABASE_ID) throw new Error("Database ID not configured");
      for (const user of users) {
        await databases.deleteDocument(DATABASE_ID, TABLES.USERS, user.$id);
      }
      setUsers([]);
      alert("All users deleted successfully");
    } catch (error) {
      console.error("Failed to delete all users:", error);
      alert("Some users could not be deleted");
    }
  };

  // Export to Excel
  const handleExportExcel = () => {
    const exportData = filteredUsers.map((user) => ({
      "Male Member": user.male_member_name || "",
      "Female Member": user.female_member_name || "",
      "Child Member": user.child_member_name || "",
      "Male Email": user.male_email || "",
      "Female Email": user.female_email || "",
      "Child Email": user.child_email || "",
      "Male Phone": user.male_phone || "",
      "Female Phone": user.female_phone || "",
      "Child Phone": user.child_phone || "",
      "Male Phone Alt": user.male_phone_alt || "",
      "Female Phone Alt": user.female_phone_alt || "",
      "Membership Status": user.membership_status,
      "RSVP Status": user.rsvp_status || "",
      Notes: user.notes || "",
      Created: new Date(user.$createdAt).toLocaleDateString(),
      Updated: new Date(user.$updatedAt).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "BASA Users");
    XLSX.writeFile(
      workbook,
      `basa-users-${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  // Upload initial data (one-time use)
  const handleUploadInitialData = async () => {
    try {
      setUploadStatus("🚀 Starting upload process...");

      const response = await fetch("/api/upload-members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uploadKey: "BASA_MEMBER_UPLOAD_2024" }),
      });

      const result = await response.json();

      if (result.success) {
        const stats = result.stats;
        setUploadStatus(
          `✅ Upload completed! Uploaded: ${stats.uploaded}, Failed: ${stats.failed}, Total: ${stats.total}`
        );

        // Show additional details if there were errors
        if (stats.failed > 0 && result.details?.length > 0) {
          console.log("Upload errors:", result.details);
          setUploadStatus(
            (prev) =>
              prev + `\n⚠️ Some uploads failed. Check console for details.`
          );
        }

        // Reload the users
        setTimeout(() => {
          loadUsers();
        }, 1000);
      } else {
        setUploadStatus(`❌ Upload failed: ${result.error}`);

        // Show additional error details if available
        if (result.details?.length > 0) {
          console.error("Upload error details:", result.details);
          setUploadStatus(
            (prev) =>
              prev + "\n📋 Check console for detailed error information."
          );
        }
      }
    } catch (error) {
      console.error("Upload request failed:", error);
      setUploadStatus(
        `❌ Upload request failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  const resetForm = () => {
    setFormData({
      male_member_name: "",
      female_member_name: "",
      child_member_name: "",
      male_email: "",
      female_email: "",
      child_email: "",
      male_phone: "",
      female_phone: "",
      child_phone: "",
      male_phone_alt: "",
      female_phone_alt: "",
      membership_status: "active",
      rsvp_status: "",
      notes: "",
    });
  };

  const startEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      male_member_name: user.male_member_name || "",
      female_member_name: user.female_member_name || "",
      child_member_name: user.child_member_name || "",
      male_email: user.male_email || "",
      female_email: user.female_email || "",
      child_email: user.child_email || "",
      male_phone: user.male_phone || "",
      female_phone: user.female_phone || "",
      child_phone: user.child_phone || "",
      male_phone_alt: user.male_phone_alt || "",
      female_phone_alt: user.female_phone_alt || "",
      membership_status: user.membership_status,
      rsvp_status: user.rsvp_status || "",
      notes: user.notes || "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading all users...</p>
            {totalUsers > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                Found {totalUsers} users
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  User Management
                </h1>
                <p className="text-gray-600">
                  Manage BASA members and their information
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <UserPlus className="h-4 w-4" />
                <span>Add User</span>
              </button>

              <button
                onClick={handleExportExcel}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Export Excel</span>
              </button>

              {users.length === 0 && (
                <button
                  onClick={handleUploadInitialData}
                  //   disabled={true}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Upload Initial Data</span>
                </button>
              )}

              {users.length > 0 && (
                <button
                  onClick={handleDeleteAll}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete All</span>
                </button>
              )}
            </div>
          </div>

          {uploadStatus && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">{uploadStatus}</p>
            </div>
          )}
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 mb-6 backdrop-blur-sm bg-white/90">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-slate-200 rounded-xl focus:border-none transition-all duration-200 bg-slate-50 hover:bg-white"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-slate-50 hover:bg-white font-medium appearance-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing {Math.min(startIndex + 1, filteredUsers.length)}-
              {Math.min(endIndex, filteredUsers.length)} of{" "}
              {filteredUsers.length} users
              {filteredUsers.length !== users.length &&
                ` (filtered from ${users.length} total)`}
            </div>
            {/* <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="px-4 py-2 bg-slate-100 rounded-xl">
                <span className="text-sm font-semibold text-slate-700">
                  {Math.min(startIndex + 1, filteredUsers.length)}-
                  {Math.min(endIndex, filteredUsers.length)}
                </span>
                <span className="text-sm text-slate-500">
                  {" "}
                  of {filteredUsers.length}
                </span>
              </div>
              {filteredUsers.length !== users.length && (
                <div className="text-xs text-slate-500 bg-blue-50 px-3 py-2 rounded-lg">
                  (filtered from {users.length} total)
                </div>
              )}
            </div> */}
          </div>
        </div>

        {/* Users Table */}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Members
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Contact Info
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Notes
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {paginatedUsers.map((user, index) => (
                      <tr
                        key={user.$id}
                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200"
                      >
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="space-y-2">
                            {user.male_member_name && (
                              <div className="flex items-center space-x-2">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-sm">👨</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">
                                  {user.male_member_name}
                                </span>
                              </div>
                            )}
                            {user.female_member_name && (
                              <div className="flex items-center space-x-2">
                                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                  <span className="text-sm">👩</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">
                                  {user.female_member_name}
                                </span>
                              </div>
                            )}
                            {user.child_member_name && (
                              <div className="flex items-center space-x-2">
                                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                  <span className="text-sm">👶</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">
                                  {user.child_member_name}
                                </span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="space-y-2 text-sm text-slate-600">
                            {user.male_email && (
                              <div className="flex items-center space-x-2 group">
                                <Mail className="h-4 w-4 text-blue-500" />
                                <span className="group-hover:text-blue-600 transition-colors">
                                  {user.male_email}
                                </span>
                              </div>
                            )}
                            {user.female_email && (
                              <div className="flex items-center space-x-2 group">
                                <Mail className="h-4 w-4 text-pink-500" />
                                <span className="group-hover:text-pink-600 transition-colors">
                                  {user.female_email}
                                </span>
                              </div>
                            )}
                            {user.male_phone && (
                              <div className="flex items-center space-x-2 group">
                                <Phone className="h-4 w-4 text-blue-500" />
                                <span className="group-hover:text-blue-600 transition-colors">
                                  {user.male_phone}
                                </span>
                              </div>
                            )}
                            {user.female_phone && (
                              <div className="flex items-center space-x-2 group">
                                <Phone className="h-4 w-4 text-pink-500" />
                                <span className="group-hover:text-pink-600 transition-colors">
                                  {user.female_phone}
                                </span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="space-y-2">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                                user.membership_status === "active"
                                  ? "bg-gradient-to-r from-green-400 to-green-500 text-white"
                                  : "bg-gradient-to-r from-red-400 to-red-500 text-white"
                              }`}
                            >
                              {user.membership_status}
                            </span>
                            {user.rsvp_status && (
                              <div className="flex items-center space-x-1">
                                <span className="text-xs font-medium text-slate-500">
                                  RSVP:
                                </span>
                                <span
                                  className={`text-xs font-semibold ${
                                    user.rsvp_status === "Confirmed"
                                      ? "text-green-600"
                                      : "text-orange-600"
                                  }`}
                                >
                                  {user.rsvp_status}
                                </span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm text-slate-600 max-w-xs">
                            <p className="line-clamp-2">
                              {user.notes || (
                                <span className="text-slate-400 italic">
                                  No notes
                                </span>
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => startEdit(user)}
                              className="p-2 text-orange-600 hover:text-white hover:bg-orange-500 rounded-lg transition-all duration-200 hover:shadow-md"
                              title="Edit"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user.$id)}
                              className="p-2 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-200 hover:shadow-md"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredUsers.length === 0 && (
                <div className="text-center py-16 bg-gradient-to-b from-white to-slate-50">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    No users found
                  </h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    {paginatedUsers.length === 0
                      ? "Upload initial data or add users manually to get started"
                      : "Try adjusting your search criteria to find what you're looking for"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        {filteredUsers.length > displayLimit && (
          <div className="bg-white rounded-lg shadow-lg p-4 mt-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  First
                </button>

                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="text-sm text-gray-600">
                  {Math.max(1, currentPage - 2)} -{" "}
                  {Math.min(totalPages, currentPage + 2)}
                </div>

                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>

                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Last
                </button>
              </div>

              <div className="text-sm text-gray-700">
                {displayLimit} per page
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit User Modal */}
        {(showAddForm || editingUser) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {editingUser ? "Edit User" : "Add New User"}
                  </h2>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingUser(null);
                      resetForm();
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form
                  onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
                  className="space-y-6"
                >
                  {/* Member Names */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Male Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.male_member_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            male_member_name: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Female Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.female_member_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            female_member_name: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Child Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.child_member_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            child_member_name: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Male Email
                      </label>
                      <input
                        type="email"
                        value={formData.male_email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            male_email: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Female Email
                      </label>
                      <input
                        type="email"
                        value={formData.female_email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            female_email: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Child Email
                      </label>
                      <input
                        type="email"
                        value={formData.child_email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            child_email: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Male Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.male_phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            male_phone: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Male Phone Alt
                      </label>
                      <input
                        type="tel"
                        value={formData.male_phone_alt}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            male_phone_alt: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Female Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.female_phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            female_phone: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Female Phone Alt
                      </label>
                      <input
                        type="tel"
                        value={formData.female_phone_alt}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            female_phone_alt: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Child Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.child_phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            child_phone: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Status and Notes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Membership Status
                      </label>
                      <select
                        value={formData.membership_status}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            membership_status: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        RSVP Status
                      </label>
                      <input
                        type="text"
                        value={formData.rsvp_status}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            rsvp_status: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-3 pt-6 border-t">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingUser(null);
                        resetForm();
                      }}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      <span>{editingUser ? "Update User" : "Create User"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
