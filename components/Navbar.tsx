"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Full-Screen Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[76px] left-0 w-full z-40 my-10">
          <div
            className={`bg-white w-full shadow-2xl transform transition-all duration-300 ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            style={{ height: "calc(100vh - 76px)" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Menu content in columns */}
            <div className="px-8 pb-8 h-full overflow-y-auto">
              <div className="grid grid-cols-5 gap-8 h-full max-w-7xl mx-auto">
                {/* Our Story Column */}
                <div>
                  <h3 className="text-red-600 font-bold text-lg mb-4 border-b border-red-200 pb-2">
                    Our Story
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="hover:text-red-600">
                        History
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Mission & Vision
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Eminent Members
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Patron Messages
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Current Ex-Co
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Bengali Culture Column */}
                <div>
                  <h3 className="text-green-600 font-bold text-lg mb-4 border-b border-green-200 pb-2">
                    Bengali Culture
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Festivals & Get Togethers
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Durga Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Lokkhi Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Kali Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Saraswati Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Dol-Utsav
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Bongotsav
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Annual Picnic
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Talent & Culture
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Bengali School - Kshology
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Learning Grades
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Enrol in Kshology
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Know our Teachers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Performing Arts
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Dance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Elocution
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Singing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Drama
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Events Column */}
                <div>
                  <h3 className="text-blue-600 font-bold text-lg mb-4 border-b border-blue-200 pb-2">
                    Events
                  </h3>
                  <div className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Annual Event Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Upcoming Events
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          RSVPs
                        </a>
                      </li>
                    </ul>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Media & Literature
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            E-Magazine Ramdhanu
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Photo Archives
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Print Media
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            TV Media
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Social Media
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            WhatsApp
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Twitter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Beyond BASA Column */}
                <div>
                  <h3 className="text-yellow-600 font-bold text-lg mb-4 border-b border-yellow-200 pb-2">
                    Beyond BASA
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Outreach Programs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Sponsors & Partners
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Sponsor List
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Sponsorship Request
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Enquiries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        BASA Business Exchange
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Join BASA Column */}
                <div>
                  <h3 className="text-purple-600 font-bold text-lg mb-4 border-b border-purple-200 pb-2">
                    Join BASA
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="hover:text-purple-600">
                        Become a Member
                      </a>
                    </li>
                  </ul>

                  {/* Contact and Login at bottom */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>📞</span>
                      <a href="#" className="hover:text-purple-600">
                        Contact us
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>🔐</span>
                      <a href="#" className="hover:text-purple-600">
                        ExCo Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header/Navbar */}
      <header className="bg-white px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 relative">
              <Image
                src="/images/Screenshot 2025-09-23 052102.png"
                alt="BASA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-14 w-[2px] bg-black mx-4" />
            <div className="text-sm">
              <div className="font-bold text-gray-800">BENGALI</div>
              <div className="font-bold text-gray-800">ASSOCIATION OF</div>
              <div className="font-bold text-gray-800">SOUTH AFRICA</div>
              <div className="text-xs text-gray-600 mt-1">
                A NON-PROFIT ORGANISATION
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm text-gray-700">
            <a href="#" className="hover:text-gray-900">
              Our Story
            </a>
            <a href="#" className="hover:text-gray-900">
              Durga Puja
            </a>
            <a href="#" className="hover:text-gray-900">
              Bengali School
            </a>
            <a href="#" className="hover:text-gray-900">
              Event Calendar
            </a>
            <a href="#" className="hover:text-gray-900">
              Social Responsibilities
            </a>
            <a href="#" className="hover:text-gray-900">
              Join BASA
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact Us
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center space-x-2 hover:text-gray-900"
            >
              <span>More Menu</span>
              <Menu className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
