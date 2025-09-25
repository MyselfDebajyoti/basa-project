"use client";

import { FormSkeleton } from "@/components/BengaliEnrollmentForm";
import MembershipForm from "@/components/MemberShipForm";
import RsvpForm from "@/components/RsvpForm";
import ContactEnquriesForm from "@/components/ContactEnquriesForm";
import { databases, DATABASE_ID, TABLES } from "@/lib/appwrite";
import { useState } from "react";
import {
  Download,
  Users,
  Calendar,
  MessageSquare,
  GraduationCap,
} from "lucide-react";

type DownloadStates = {
  [key: string]: boolean;
};

// Define types for each form document
interface StudentFormDocument {
  $id: string;
  $createdAt: string;
  studentName?: string;
  whatsappNumber?: string;
  email?: string;
  country?: string;
  bengaliLearning?: string;
  age?: string;
}

interface RsvpFormDocument {
  $id: string;
  $createdAt: string;
  name?: string;
  contactNumber?: string;
  nabamiMahaJogyo?: number;
  dashamiDebiBoron?: number;
  comments?: string;
}

interface MembershipFormDocument {
  $id: string;
  $createdAt: string;
  name?: string;
  contactNumber?: string;
  email?: string;
  membershipEnquiry?: string;
  referringMember?: string;
  numberOfAdults?: number;
  numberOfChildren?: number;
  isStudent?: boolean;
}

interface ContactEnquiriesFormDocument {
  $id: string;
  $createdAt: string;
  name?: string;
  contactNumber?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormDocument =
  | StudentFormDocument
  | RsvpFormDocument
  | MembershipFormDocument
  | ContactEnquiriesFormDocument;

export default function AdminPage() {
  const [downloadStates, setDownloadStates] = useState<DownloadStates>({
    student_forms: false,
    rsvpform: false,
    membershipform: false,
    contactenquiriesform: false,
  });

  const downloadCSV = async (
    tableId: string,
    fileName: string,
    tableDisplayName: string
  ) => {
    try {
      setDownloadStates((prev) => ({ ...prev, [tableId]: true }));

      // Fetch data from Appwrite
      const response = await databases.listDocuments(DATABASE_ID!, tableId);
      const documents = response.documents;

      if (documents.length === 0) {
        alert(`No data found in ${tableDisplayName} table.`);
        return;
      }

      // Prepare CSV content
      let csvContent = "";

      // Define headers based on table type
      let headers: string[] = [];
      switch (tableId) {
        case TABLES.STUDENT_FORMS:
          headers = [
            "ID",
            "Student Name",
            "WhatsApp Number",
            "Email",
            "Country",
            "Bengali Learning",
            "Age",
            "Created At",
          ];
          break;
        case TABLES.RSVP_FORM:
          headers = [
            "ID",
            "Name",
            "Contact Number",
            "Nabami Maha Jogyo",
            "Dashami Debi Boron",
            "Comments",
            "Created At",
          ];
          break;
        case TABLES.MEMBERSHIP_FORM:
          headers = [
            "ID",
            "Name",
            "Contact Number",
            "Email",
            "Membership Enquiry",
            "Referring Member",
            "Number of Adults",
            "Number of Children",
            "Is Student",
            "Created At",
          ];
          break;
        case TABLES.CONTACT_ENQUIRIES_FORM:
          headers = [
            "ID",
            "Name",
            "Contact Number",
            "Email",
            "Subject",
            "Message",
            "Created At",
          ];
          break;
      }

      csvContent += headers.join(",") + "\n";

      // Add data rows
      documents.forEach((doc: FormDocument) => {
        let row: (string | number)[] = [];
        switch (tableId) {
          case TABLES.STUDENT_FORMS:
            const studentDoc = doc as StudentFormDocument;
            row = [
              studentDoc.$id,
              `"${studentDoc.studentName || ""}"`,
              `"${studentDoc.whatsappNumber || ""}"`,
              `"${studentDoc.email || ""}"`,
              `"${studentDoc.country || ""}"`,
              `"${studentDoc.bengaliLearning || ""}"`,
              `"${studentDoc.age || ""}"`,
              `"${new Date(studentDoc.$createdAt).toLocaleString()}"`,
            ];
            break;
          case TABLES.RSVP_FORM:
            const rsvpDoc = doc as RsvpFormDocument;
            row = [
              rsvpDoc.$id,
              `"${rsvpDoc.name || ""}"`,
              `"${rsvpDoc.contactNumber || ""}"`,
              rsvpDoc.nabamiMahaJogyo || 0,
              rsvpDoc.dashamiDebiBoron || 0,
              `"${rsvpDoc.comments || ""}"`,
              `"${new Date(rsvpDoc.$createdAt).toLocaleString()}"`,
            ];
            break;
          case TABLES.MEMBERSHIP_FORM:
            const membershipDoc = doc as MembershipFormDocument;
            row = [
              membershipDoc.$id,
              `"${membershipDoc.name || ""}"`,
              `"${membershipDoc.contactNumber || ""}"`,
              `"${membershipDoc.email || ""}"`,
              `"${membershipDoc.membershipEnquiry || ""}"`,
              `"${membershipDoc.referringMember || ""}"`,
              membershipDoc.numberOfAdults || 0,
              membershipDoc.numberOfChildren || 0,
              membershipDoc.isStudent ? "Yes" : "No",
              `"${new Date(membershipDoc.$createdAt).toLocaleString()}"`,
            ];
            break;
          case TABLES.CONTACT_ENQUIRIES_FORM:
            const contactDoc = doc as ContactEnquiriesFormDocument;
            row = [
              contactDoc.$id,
              `"${contactDoc.name || ""}"`,
              `"${contactDoc.contactNumber || ""}"`,
              `"${contactDoc.email || ""}"`,
              `"${contactDoc.subject || ""}"`,
              `"${contactDoc.message || ""}"`,
              `"${new Date(contactDoc.$createdAt).toLocaleString()}"`,
            ];
            break;
        }
        csvContent += row.join(",") + "\n";
      });

      // Create and download file
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `${fileName}_${new Date().toISOString().split("T")[0]}.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert(`${tableDisplayName} data downloaded successfully!`);
    } catch (error) {
      console.error("Error downloading CSV:", error);
      alert(`Error downloading ${tableDisplayName} data. Please try again.`);
    } finally {
      setDownloadStates((prev) => ({ ...prev, [tableId]: false }));
    }
  };

  const downloadOptions = [
    {
      id: TABLES.STUDENT_FORMS,
      title: "Bengali Enrollment Forms",
      description: "Download all Bengali language enrollment form responses",
      icon: GraduationCap,
      fileName: "bengali_enrollment_forms",
      color: "bg-blue-500 hover:bg-blue-600",
      iconColor: "text-blue-100",
    },
    {
      id: TABLES.RSVP_FORM,
      title: "RSVP Forms",
      description: "Download all event RSVP responses",
      icon: Calendar,
      fileName: "rsvp_forms",
      color: "bg-green-500 hover:bg-green-600",
      iconColor: "text-green-100",
    },
    {
      id: TABLES.MEMBERSHIP_FORM,
      title: "Membership Forms",
      description: "Download all membership enquiry responses",
      icon: Users,
      fileName: "membership_forms",
      color: "bg-purple-500 hover:bg-purple-600",
      iconColor: "text-purple-100",
    },
    {
      id: TABLES.CONTACT_ENQUIRIES_FORM,
      title: "Contact Enquiries",
      description: "Download all contact form responses",
      icon: MessageSquare,
      fileName: "contact_enquiries",
      color: "bg-orange-500 hover:bg-orange-600",
      iconColor: "text-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage form responses and download data
          </p>
        </div>
      </div> */}

      {/* Download Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Download Form Responses
          </h2>
          <p className="text-gray-600">
            Export form data as CSV files for analysis and record keeping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {downloadOptions.map((option) => {
            const IconComponent = option.icon;
            const isDownloading = downloadStates[option.id];

            return (
              <div
                key={option.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className={`${option.color} px-6 py-4`}>
                  <IconComponent className={`w-8 h-8 ${option.iconColor}`} />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <button
                    onClick={() =>
                      downloadCSV(option.id, option.fileName, option.title)
                    }
                    disabled={isDownloading}
                    className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors duration-200 ${
                      isDownloading
                        ? "bg-gray-400 cursor-not-allowed"
                        : `${option.color} focus:outline-none focus:ring-2 focus:ring-offset-2`
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download CSV
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Forms Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Form Management
          </h2>
          <p className="text-gray-600">Preview and test all available forms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
              Bengali Enrollment Form
            </h3>
            <FormSkeleton />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-500" />
              Membership Form
            </h3>
            <MembershipForm />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-500" />
              RSVP Form
            </h3>
            <RsvpForm />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-orange-500" />
              Contact Enquiries Form
            </h3>
            <ContactEnquriesForm />
          </div>
        </div>
      </div>
    </div>
  );
}
