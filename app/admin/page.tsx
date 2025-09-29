"use client";

import { databases, DATABASE_ID, TABLES } from "@/lib/appwrite";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  MessageSquare,
  GraduationCap,
  ArrowRight,
  BarChart3,
} from "lucide-react";

export default function AdminPage() {
  const [stats, setStats] = useState({
    bengali: 0,
    rsvp: 0,
    membership: 0,
    contact: 0,
    users: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const [bengaliRes, rsvpRes, membershipRes, contactRes, usersRes] =
        await Promise.all([
          databases.listDocuments(DATABASE_ID!, TABLES.STUDENT_FORMS),
          databases.listDocuments(DATABASE_ID!, TABLES.RSVP_FORM),
          databases.listDocuments(DATABASE_ID!, TABLES.MEMBERSHIP_FORM),
          databases.listDocuments(DATABASE_ID!, TABLES.CONTACT_ENQUIRIES_FORM),
          databases.listDocuments(DATABASE_ID!, TABLES.USERS),
        ]);

      setStats({
        bengali: bengaliRes.total,
        rsvp: rsvpRes.total,
        membership: membershipRes.total,
        contact: contactRes.total,
        users: usersRes.total,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);
  
  const formSections = [
    {
      title: "User Management",
      description: "Manage BASA members and their information",
      icon: Users,
      count: stats.users,
      href: "/admin/users",
      color: "bg-indigo-500",
      iconColor: "text-indigo-100",
      borderColor: "border-indigo-200",
    },
    {
      title: "Bengali Enrollment Forms",
      description: "View and manage Bengali language enrollment applications",
      icon: GraduationCap,
      count: stats.bengali,
      href: "/admin/bengali-enrollment",
      color: "bg-blue-500",
      iconColor: "text-blue-100",
      borderColor: "border-blue-200",
    },
    {
      title: "RSVP Forms",
      description: "View and manage event RSVP responses",
      icon: Calendar,
      count: stats.rsvp,
      href: "/admin/rsvp-forms",
      color: "bg-green-500",
      iconColor: "text-green-100",
      borderColor: "border-green-200",
    },
    {
      title: "Membership Forms",
      description: "View and manage membership enquiry applications",
      icon: MessageSquare,
      count: stats.membership,
      href: "/admin/membership-forms",
      color: "bg-purple-500",
      iconColor: "text-purple-100",
      borderColor: "border-purple-200",
    },
    {
      title: "Contact Enquiries",
      description: "View and manage contact form submissions",
      icon: MessageSquare,
      count: stats.contact,
      href: "/admin/contact-enquiries",
      color: "bg-orange-500",
      iconColor: "text-orange-100",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage form responses and view detailed analytics
        </p>
      </div>

      {/* Overview Stats */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">
                {loading ? "..." : stats.users}
              </div>
              <div className="text-sm text-gray-600">
                BASA Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {loading ? "..." : stats.bengali}
              </div>
              <div className="text-sm text-gray-600">
                Bengali Enrollments
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {loading ? "..." : stats.rsvp}
              </div>
              <div className="text-sm text-gray-600">RSVP Responses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {loading ? "..." : stats.membership}
              </div>
              <div className="text-sm text-gray-600">
                Membership Forms
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {loading ? "..." : stats.contact}
              </div>
              <div className="text-sm text-gray-600">
                Contact Enquiries
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Form Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formSections.map((section) => {
            const IconComponent = section.icon;

            return (
              <Link
                key={section.href}
                href={section.href}
                className={`block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 border-l-4 ${section.borderColor} hover:scale-[1.02]`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`${section.color} p-2 rounded-lg`}>
                          <IconComponent
                            className={`w-5 h-5 ${section.iconColor}`}
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
