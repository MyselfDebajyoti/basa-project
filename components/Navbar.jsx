"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Hide navbar on admin pages - moved after hooks
  if (pathname.startsWith("/admin") || pathname === "/login") {
    return null;
  }

  // Updated function to handle hex colors and predefined color names
  const getColorStyles = (color) => {
    // Handle hex colors
    if (color.startsWith("#")) {
      return {
        headerStyle: { color: color },
        linkStyle: { color: color },
        hoverClass: "hover:opacity-80",
      };
    }

    // Handle predefined color names
    const colorMap = {
      red: {
        headerStyle: { color: "#FE0000" },
        linkStyle: { color: "#FE0000" },
        hoverClass: "hover:text-red-600",
      },
      green: {
        headerStyle: { color: "#00794C" },
        linkStyle: { color: "#00794C" },
        hoverClass: "hover:text-green-600",
      },
      blue: {
        headerStyle: { color: "#002496" },
        linkStyle: { color: "#002496" },
        hoverClass: "hover:text-blue-600",
      },
      yellow: {
        headerStyle: { color: "#FFB612" },
        linkStyle: { color: "#FFB612" },
        hoverClass: "hover:text-yellow-600",
      },
      purple: {
        headerStyle: { color: "#6B46C1" },
        linkStyle: { color: "#6B46C1" },
        hoverClass: "hover:text-purple-600",
      },
    };

    return (
      colorMap[color] || {
        headerStyle: { color: "#6B7280" },
        linkStyle: { color: "#6B7280" },
        hoverClass: "hover:text-gray-600",
      }
    );
  };

  const handleLinkClick = (path, external) => {
    if (external) {
      window.open(path, "_blank");
    }
    setIsMenuOpen(false);
  };

  const renderMenuItem = (item, colorStyles) => {
    if (item.disabled) {
      return (
        <span
          key={item.title}
          className="block py-1 text-gray-400 cursor-not-allowed"
        >
          {item.title}
        </span>
      );
    }

    if (item.external) {
      return (
        <button
          key={item.title}
          onClick={() => handleLinkClick(item.path, item.external)}
          className={`block text-left w-full py-1 hover:font-semibold transition-colors`}
        >
          {item.title}
        </button>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.path}
        className={`block py-1 hover:font-semibold transition-colors`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <>
      {/* Full-Screen Dropdown Menu */}

      {/* Header/Navbar */}
      <header className="bg-white lg:py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - responsive sizing */}
          <Link href="/" className="flex items-center">
            <div className="p-2 xl:p-0 ">
              <img src="/images/logo.png" className="h-16" alt="" />
            </div>
          </Link>

          {/* Navigation Menu - hidden on mobile/tablet */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6 text-sm text-gray-700">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`hover:text-gray-900 font-light transition-colors whitespace-nowrap ${
                  pathname === item.path ? "text-gray-900 font-medium" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex font-light items-center space-x-2 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              <span>More Menu</span>
              <Menu className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button - visible on mobile and tablet */}
          <Button
            variant="ghost"
            size="sm"
            className="xl:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <div className="w-screen z-40 bg-black bg-opacity-50 lg:absolute lg:bg-transparent">
            <div
              ref={dropdownRef}
              className={`bg-white w-full shadow-2xl transform transition-all duration-300 ease-out overflow-hidden ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
              style={{
                minHeight: "calc(100vh - 76px)",
              }}
            >
              {/* Menu content - fully responsive grid */}
              <div
                className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 76px)" }}
              >
                <div className="mx-auto max-w-screen-xl">
                  {/* Responsive grid: 1 col on mobile, 2 on tablet, 5 on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 sm:gap-8 py-4 lg:py-6">
                    {menuConfig.map((menu) => {
                      const colorStyles = getColorStyles(menu.color);

                      return (
                        <div key={menu.id} className="min-h-0">
                          <div className="min-h-10">
                            {menu.title && (
                              <h3
                                className="font-semibold text-base lg:text-lg mb-3 lg:mb-4 pb-2"
                                style={colorStyles.headerStyle}
                              >
                                {menu.title}
                              </h3>
                            )}
                          </div>

                          <div className="space-y-3 lg:space-y-4">
                            {/* Direct items */}
                            {menu.items && (
                              <ul className="space-y-1 lg:space-y-2 font-light text-sm">
                                {menu.items.map((item) => (
                                  <li key={item.title}>
                                    {renderMenuItem(item, colorStyles)}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Sections with subsections */}
                            {menu.sections?.map((section) => (
                              <div key={section.title}>
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">
                                  {section.title}
                                </h4>
                                <ul className="space-y-1 font-light text-sm ">
                                  {section.items.map((item) => (
                                    <li key={item.title}>
                                      {renderMenuItem(item, colorStyles)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Additional items (for Join BASA section) */}
                            {menu.additionalItems && (
                              <div className="mt-6 lg:mt-8 space-y-2 lg:space-y-3 pt-3 border-t border-gray-200">
                                {menu.additionalItems.map((item) => (
                                  <div
                                    key={item.title}
                                    className="flex items-center space-x-2 text-sm"
                                  >
                                    <img
                                      className="w-4"
                                      src={item.icon}
                                      alt=""
                                    />
                                    <Link
                                      href={item.path}
                                      className={`py-1 font-light hover:underline transition-colors `}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {item.title}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

// Menu structure configuration
const menuConfig = [
  {
    id: "our-story",
    title: "Our Story",
    color: "#FE0000",
    path: "/our-story",
    items: [
      { title: "History", path: "/our-story" },
      { title: "Mission & Vision", path: "/our-story#mission" },
      { title: "Eminent Members", path: "/our-story#eminent-members" },
      { title: "Patron Messages", path: "/our-story#patron-messages" },
      { title: "Current Ex-Co", path: "/our-story/current-exco" },
    ],
  },
  {
    id: "bengali-culture",
    title: "Bengali Culture",
    color: "#00794C",
    path: "/bengali-culture",
    sections: [
      {
        title: "Festivals & Get Togethers",
        items: [
          { title: "Durga Pujo", path: "/events" },
          { title: "Lokkhi Pujo", path: "/events/bongo-utsav#lokkhi-pujo" },
          { title: "Kali Pujo", path: "/events/bongo-utsav#kali-pujo" },
          {
            title: "Saraswati Pujo",
            path: "/events/bongo-utsav#saraswati-pujo",
          },
          { title: "Dol-Utsav", path: "/events/bongo-utsav#dol-utsab" },
          { title: "Bongotsav", path: "/events/bongo-utsav" },
          { title: "Annual Picnic", path: "/events/bongo-utsav#annual-picnic" },
        ],
      },
    ],
  },
  {
    id: "bengali-culture-2",
    title: "",
    color: "#00794C",
    path: "/bengali-culture",
    sections: [
      {
        title: "Talent & Culture",
        items: [
          { title: "Bengali School - Kishology", path: "/bengali-school" },
          { title: "Learning Grades", path: "/bengali-school#learning" },
          { title: "Enrol in Kishology", path: "/bengali-school" },
          { title: "Know our Teachers", path: "/bengali-school#teachers" },
        ],
      },
      {
        title: "Performing Arts",
        items: [
          { title: "Dance", path: "/performing-art#dance" },
          { title: "Elocution", path: "/performing-art#elocution" },
          { title: "Singing", path: "/performing-art#singing" },
          { title: "Drama", path: "/performing-art#drama" },
        ],
      },
    ],
  },
  {
    id: "bengali-culture-3",
    title: "",
    color: "#00794C",
    path: "/bengali-culture",
    sections: [
      {
        title: "Media & Literature",
        items: [
          {
            title: "E-Magazine Ramdhanu",
            path: "/events#magazine",
            disabled: true,
          },
          { title: "Photo Archives", path: "/events#photos", disabled: true },
          { title: "Print Media", path: "/events#print-media", disabled: true },
          { title: "TV Media", path: "/events#tv-media", disabled: true },
        ],
      },
      {
        title: "Social Media",
        items: [
          {
            title: "Facebook",
            path: "https://www.facebook.com/bengaliassociationsa",
            external: true,
            disabled: true,
          },
          {
            title: "WhatsApp",
            path: "https://wa.me/27795381768",
            external: true,
            disabled: true,
          },
          {
            title: "Instagram",
            path: "https://www.instagram.com/bengaliassociationsa",
            external: true,
            disabled: true,
          },
          {
            title: "Twitter",
            path: "https://twitter.com/bengaliassocsa",
            external: true,
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    color: "#002496",
    path: "/events",
    items: [
      { title: "Annual Event Calendar", path: "/events/events-rsvp" },
      { title: "Upcoming Events", path: "/events/events-rsvp#upcoming-events" },
      { title: "RSVPs", path: "/events/events-rsvp#rsvp" },
    ],
  },
  {
    id: "beyond-basa",
    title: "Beyond BASA",
    color: "#FFB612",
    path: "/beyond-basa",
    items: [
      { title: "Outreach Programs", path: "/social-responsibility" },
      { title: "Sponsors & Partners", path: "/#sponsors" },
      { title: "Sponsor List", path: "/beyond-basa#sponsor-list" },
      {
        title: "Sponsorship Request",
        path: "/contact#sponsorship-request",
      },
      { title: "Enquiries", path: "/contact" },
      { title: "BASA Business Exchange", path: "/bussiness-enquiry" },
    ],
  },
  {
    id: "join-basa",
    title: "Join BASA",
    color: "#002496",
    path: "/join-basa",
    items: [{ title: "Become a Member", path: "/join-basa#membership" }],
    additionalItems: [
      { title: "Contact us", path: "/contact", icon: "/images/call.png" },
      { title: "ExCo Login", path: "/admin", icon: "/images/lock.png" },
      {
        title: "Webmail login",
        path: "https://webmail.your-server.de/login.php",
        icon: "/images/lock.png",
      },
    ],
  },
];

// Main navigation items (shown in desktop nav)
const mainNavItems = [
  { title: "Our Story", path: "/our-story" },
  { title: "Durga Pujo", path: "/events" },
  { title: "Bengali School", path: "/bengali-school" },
  { title: "Join BASA", path: "/join-basa" },
  { title: "Contact Us", path: "/contact" },
];
