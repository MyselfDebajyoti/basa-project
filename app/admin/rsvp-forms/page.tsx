"use client";

import { useState, useEffect } from "react";
import { databases, DATABASE_ID, TABLES } from "@/lib/appwrite";
import * as XLSX from "xlsx";
import { Download, RefreshCw, Trash2, AlertTriangle } from "lucide-react";

interface RsvpFormDocument {
  $id: string;
  $createdAt: string;
  name?: string;
  contactNumber?: string;
  lunchFriday3Oct?: number;
  lunchSunday5Oct?: number;
  nobomiYagya?: number;
  debiBoron?: number;
  dinnerMonday6Oct?: number;
  comments?: string;
}

export default function RsvpFormsPage() {
  const [data, setData] = useState<RsvpFormDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [deleteAllLoading, setDeleteAllLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        DATABASE_ID!,
        TABLES.RSVP_FORM
      );
      setData(response.documents as RsvpFormDocument[]);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = () => {
    try {
      setDownloadLoading(true);

      const wsData = [
        [
          "ID",
          "Name Of Main Member",
          "Contact Number",
          "Lunch Fri 3 Oct",
          "Lunch Sun 5 Oct",
          "Nobomi Yagya",
          "Debi Boron",
          "Dinner Mon 6 Oct",
          "Comments",
          "Created At",
        ],
        ...data.map((doc) => [
          doc.$id,
          doc.name || "",
          doc.contactNumber || "",
          doc.lunchFriday3Oct || 0,
          doc.lunchSunday5Oct || 0,
          doc.nobomiYagya || 0,
          doc.debiBoron || 0,
          doc.dinnerMonday6Oct || 0,
          doc.comments || "",
          new Date(doc.$createdAt).toLocaleString(),
        ]),
      ];

      const ws = XLSX.utils.aoa_to_sheet(wsData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "RSVP Forms");

      const fileName = `rsvp_forms_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;
      XLSX.writeFile(wb, fileName);
    } catch (error) {
      console.error("Error downloading Excel:", error);
      alert("Error downloading Excel file. Please try again.");
    } finally {
      setDownloadLoading(false);
    }
  };

  const deleteSingleRow = async (docId: string, name: string) => {
    if (
      !confirm(
        `Are you sure you want to delete the RSVP form for "${name}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    try {
      setDeleteLoading(docId);
      await databases.deleteDocument(DATABASE_ID!, TABLES.RSVP_FORM, docId);

      // Remove from local state
      setData((prevData) => prevData.filter((doc) => doc.$id !== docId));
      alert("RSVP form deleted successfully!");
    } catch (error) {
      console.error("Error deleting document:", error);
      alert("Error deleting RSVP form. Please try again.");
    } finally {
      setDeleteLoading(null);
    }
  };

  const deleteAllData = async () => {
    try {
      setDeleteAllLoading(true);

      // Delete all documents one by one
      const deletePromises = data.map((doc) =>
        databases.deleteDocument(DATABASE_ID!, TABLES.RSVP_FORM, doc.$id)
      );

      await Promise.all(deletePromises);

      // Clear local state
      setData([]);
      setShowDeleteAllModal(false);
      alert(`Successfully deleted all ${data.length} RSVP forms!`);
    } catch (error) {
      console.error("Error deleting all data:", error);
      alert(
        "Error deleting all data. Some records may not have been deleted. Please refresh and try again."
      );
    } finally {
      setDeleteAllLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalAttendees = data.reduce(
    (sum, doc) =>
      sum +
      (doc.lunchFriday3Oct || 0) +
      (doc.lunchSunday5Oct || 0) +
      (doc.nobomiYagya || 0) +
      (doc.debiBoron || 0) +
      (doc.dinnerMonday6Oct || 0),
    0
  );

  const eventStats = {
    lunchFri: data.reduce((sum, doc) => sum + (doc.lunchFriday3Oct || 0), 0),
    lunchSun: data.reduce((sum, doc) => sum + (doc.lunchSunday5Oct || 0), 0),
    nobomiYagya: data.reduce((sum, doc) => sum + (doc.nobomiYagya || 0), 0),
    debiBoron: data.reduce((sum, doc) => sum + (doc.debiBoron || 0), 0),
    dinnerMon: data.reduce((sum, doc) => sum + (doc.dinnerMonday6Oct || 0), 0),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">RSVP Forms</h1>
          <p className="text-gray-600 mt-1">
            Manage event RSVP responses and attendance
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <button
            onClick={downloadExcel}
            disabled={downloadLoading || data.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
          >
            <Download className="w-4 h-4" />
            {downloadLoading ? "Downloading..." : "Download Excel"}
          </button>
          <button
            onClick={() => setShowDeleteAllModal(true)}
            disabled={data.length === 0 || deleteAllLoading}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400"
          >
            <Trash2 className="w-4 h-4" />
            Delete All
          </button>
        </div>
      </div>

      {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-xs text-gray-600">Total RSVPs</div>
        <div className="text-xl font-semibold text-gray-900">
        {data.length}
        </div>
      </div>
    <div className="bg-white rounded-lg shadow p-4 md:col-span-2 lg:col-span-3">
      <div className="text-xs text-gray-600 mb-2">RSVP Link</div>
      <div className="flex items-center gap-2">
        <input 
        type="text" 
        value="https://www.amaderbasa.org/events/events-rsvp#rsvp" 
        readOnly
        className="text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded px-3 py-1.5 flex-1 truncate"
        />
        <button 
        onClick={() => {
          navigator.clipboard.writeText("https://www.amaderbasa.org/events/events-rsvp#rsvp");
          alert("RSVP link copied to clipboard!");
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span className="text-xs font-medium">Copy</span>
        </button>
        <button 
        onClick={() => {
          const shareUrl = "https://www.amaderbasa.org/events/events-rsvp#rsvp";
          if (navigator.share) {
            navigator.share({
            title: 'RSVP for Basa Event',
            text: 'Please RSVP for the upcoming Basa event',
            url: shareUrl,
            }).catch(err => {
            console.error('Error sharing:', err);
            // Fallback to copy
            navigator.clipboard.writeText(shareUrl);
            alert("RSVP link copied to clipboard!");
            });
          } else {
            // Fallback for browsers that don't support sharing
            navigator.clipboard.writeText(shareUrl);
            alert("RSVP link copied to clipboard!");
          }
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
        <span className="text-xs font-medium">Share</span>
        </button>
      </div>
    </div>
    </div>
    {/* </button> */}

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No RSVP forms found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sr No.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name of Main Member
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lunch Fri 3
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lunch Sun 5
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nobomi Yagya
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Debi Boron
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dinner Mon 6
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comments
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((doc) => (
                  <tr key={doc.$id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.indexOf(doc) + 1}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doc.name || "N/A"}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.contactNumber || "N/A"}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {doc.lunchFriday3Oct || 0}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {doc.lunchSunday5Oct || 0}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {doc.nobomiYagya || 0}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                        {doc.debiBoron || 0}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {doc.dinnerMonday6Oct || 0}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {doc.comments || "N/A"}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(doc.$createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() =>
                          deleteSingleRow(doc.$id, doc.name || "Unknown")
                        }
                        disabled={deleteLoading === doc.$id}
                        className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 disabled:bg-gray-100 disabled:text-gray-400 transition-colors"
                      >
                        {deleteLoading === doc.$id ? (
                          <>
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-600"></div>
                            <span className="text-xs">Deleting...</span>
                          </>
                        ) : (
                          <>
                            <Trash2 className="w-3 h-3" />
                            <span className="text-xs">Delete</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete All Confirmation Modal */}
      {showDeleteAllModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                Delete All RSVP Forms
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Are you absolutely sure you want to delete all{" "}
                  <span className="font-semibold text-red-600">
                    {data.length}
                  </span>{" "}
                  RSVP forms?
                </p>
                <p className="text-sm text-red-600 mt-2 font-medium">
                  This action cannot be undone and all data will be permanently
                  lost.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => setShowDeleteAllModal(false)}
                  disabled={deleteAllLoading}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md hover:bg-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteAllData}
                  disabled={deleteAllLoading}
                  className="flex-1 px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md hover:bg-red-700 disabled:bg-red-400 flex items-center justify-center gap-2"
                >
                  {deleteAllLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Delete All
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
