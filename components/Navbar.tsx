"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                Logo
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`py-4 px-2 ${
                  pathname === "/"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-blue-500 transition duration-300"
                }`}
              >
                Home
              </Link>
              <Link
                href="/exco"
                className={`py-4 px-2 ${
                  pathname === "/exco"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-blue-500 transition duration-300"
                }`}
              >
                Exco
              </Link>
              <Link
                href="/events"
                className={`py-4 px-2 ${
                  pathname === "/events"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-blue-500 transition duration-300"
                }`}
              >
                Events
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/login"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
