"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Calendar,
  MessageSquare,
  GraduationCap,
  Home,
  LogOut,
  Menu,
  X,
  Shield,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem("isLoggedIn");
      if (!loggedIn) {
        router.push("/login");
        return;
      }
      setIsLoggedIn(true);
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: Home,
      current: pathname === "/admin",
    },
    {
      name: "User Management",
      href: "/admin/users",
      icon: Shield,
      current: pathname === "/admin/users",
    },
    {
      name: "Bengali Enrollment",
      href: "/admin/bengali-enrollment",
      icon: GraduationCap,
      current: pathname === "/admin/bengali-enrollment",
    },
    {
      name: "RSVP Forms",
      href: "/admin/rsvp-forms",
      icon: Calendar,
      current: pathname === "/admin/rsvp-forms",
    },
    {
      name: "Membership Forms",
      href: "/admin/membership-forms",
      icon: Users,
      current: pathname === "/admin/membership-forms",
    },
    {
      name: "Contact Enquiries",
      href: "/admin/contact-enquiries",
      icon: MessageSquare,
      current: pathname === "/admin/contact-enquiries",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <img src="/images/logo.png" className="h-16" alt="" />
              {/* <span className="ml-2 text-xl font-bold text-gray-900">
                BASA Admin
              </span> */}
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-blue-100 text-blue-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-200`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon
                      className={`${
                        item.current
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      } mr-4 h-6 w-6`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img src="/images/logo.png" className="h-16" alt="" />
              {/* <span className="ml-2 text-xl font-bold text-gray-900">
                BASA Admin
              </span> */}
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-blue-100 text-blue-900 border-r-2 border-blue-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-l-md transition-colors duration-200`}
                  >
                    <Icon
                      className={`${
                        item.current
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      } mr-3 h-5 w-5`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navbar for mobile */}
        <div className="sticky top-0 z-10 lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white shadow-sm">
          <button
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
