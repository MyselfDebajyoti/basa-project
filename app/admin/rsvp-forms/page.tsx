"use client";

import { useState, useEffect } from "react";
import { databases, DATABASE_ID, TABLES } from "@/lib/appwrite";
import * as XLSX from "xlsx";
import { Download, RefreshCw } from "lucide-react";

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
          "Name",
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
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-600">Lunch Fri 3 Oct</div>
          <div className="text-xl font-semibold text-blue-600">
            {eventStats.lunchFri}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-600">Lunch Sun 5 Oct</div>
          <div className="text-xl font-semibold text-green-600">
            {eventStats.lunchSun}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-600">Nobomi Yagya</div>
          <div className="text-xl font-semibold text-purple-600">
            {eventStats.nobomiYagya}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-600">Debi Boron</div>
          <div className="text-xl font-semibold text-pink-600">
            {eventStats.debiBoron}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-600">Dinner Mon 6 Oct</div>
          <div className="text-xl font-semibold text-orange-600">
            {eventStats.dinnerMon}
          </div>
        </div>
      </div>

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
                    Name
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((doc) => (
                  <tr key={doc.$id} className="hover:bg-gray-50">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
