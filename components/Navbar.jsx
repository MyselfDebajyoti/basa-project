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
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const getColorClasses = (color) => {
    const colorMap = {
      red: "text-[#FE0000]  hover:text-red-600",
      green: "text-green-600 border-green-200 hover:text-green-600",
      blue: "text-blue-600 border-blue-200 hover:text-blue-600",
      yellow: "text-yellow-600 border-yellow-200 hover:text-yellow-600",
      purple: "text-purple-600 border-purple-200 hover:text-purple-600",
    };
    return (
      colorMap[color] || "text-gray-600 border-gray-200 hover:text-gray-600"
    );
  };

  const handleLinkClick = (path, external) => {
    if (external) {
      window.open(path, "_blank");
    }
    setIsMenuOpen(false);
  };

  const renderMenuItem = (item, colorClass) => {
    if (item.external) {
      return (
        <button
          key={item.title}
          onClick={() => handleLinkClick(item.path, item.external)}
          className={`${colorClass} block text-left w-full py-1 hover:underline transition-colors`}
        >
          {item.title}
        </button>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.path}
        className={`${colorClass} block py-1 hover:underline transition-colors`}
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
      <header className="bg-white  lg:py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - responsive sizing */}
          <Link href="/" className="flex items-center">
            <div className="p-2 xl:p-0 ">
              {/* <Image
                src="/images/logo.png"
                alt="BASA Logo"
                fill
                className="object-contain"
                priority
              /> */}
              <img src="/images/logo.png" className="h-16" alt="" />
            </div>
            {/* <div className="h-10 lg:h-14 w-[2px] bg-black mx-3 lg:mx-4" /> */}
            {/* <div className="text-xs lg:text-sm">
              <div className="font-bold text-gray-800 leading-tight">
                BENGALI
              </div>
              <div className="font-bold text-gray-800 leading-tight">
                ASSOCIATION OF
              </div>
              <div className="font-bold text-gray-800 leading-tight">
                SOUTH AFRICA
              </div>
              <div className="text-[10px] lg:text-xs text-gray-600 mt-1">
                A NON-PROFIT ORGANISATION
              </div>
            </div> */}
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
              className="flex items-center space-x-2 hover:text-gray-900 transition-colors whitespace-nowrap"
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
          <div className=" w-screen z-40 bg-black bg-opacity-50 lg:absolute lg:bg-transparent">
            <div
              ref={dropdownRef}
              className={`bg-white  w-full  shadow-2xl transform transition-all duration-300 ease-out overflow-hidden ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
              style={{
                height: "calc(100vh - 76px)",
                maxHeight: "calc(100vh - 76px)",
              }}
            >
              {/* Menu content - fully responsive grid */}
              <div className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 h-full overflow-y-auto">
                <div className="mx-auto max-w-screen-xl h-full">
                  {/* Responsive grid: 1 col on mobile, 2 on tablet, 5 on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 sm:gap-8 py-4 lg:py-6">
                    {menuConfig.map((menu) => {
                      const colorClasses = getColorClasses(menu.color);
                      const headerColorClass =
                        colorClasses.split(" ")[0] +
                        " font-bold text-base lg:text-lg mb-3 lg:mb-4 " +
                        colorClasses.split(" ")[1] +
                        " pb-2";
                      const linkColorClass = colorClasses.split(" ")[2];

                      return (
                        <div key={menu.id} className="min-h-0">
                          <div className="min-h-10">
                              <h3 className={headerColorClass}>{menu.title}</h3>
                          </div>

                          <div className="space-y-3 lg:space-y-4">
                            {/* Direct items */}
                            {menu.items && (
                              <ul className="space-y-1 lg:space-y-2 text-sm text-gray-700">
                                {menu.items.map((item) => (
                                  <li key={item.title}>
                                    {renderMenuItem(item, linkColorClass)}
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
                                <ul className="space-y-1 text-sm text-gray-700 ml-2">
                                  {section.items.map((item) => (
                                    <li key={item.title}>
                                      {renderMenuItem(item, linkColorClass)}
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
                                    className="flex items-center space-x-2 text-sm text-gray-700"
                                  >
                                    <span className="text-base">
                                      {item.icon}
                                    </span>
                                    <Link
                                      href={item.path}
                                      className={`${linkColorClass} py-1`}
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
    color: "red",
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
    color: "green",
    path: "/bengali-culture",
    sections: [
      {
        title: "Festivals & Get Togethers",
        items: [
          { title: "Durga Puja", path: "/events" },
          { title: "Lokkhi Pujo", path: "/events" },
          { title: "Kali Pujo", path: "/events" },
          { title: "Saraswati Pujo", path: "/events" },
          { title: "Dol-Utsav", path: "/events" },
          { title: "Bongotsav", path: "/events/bongo-utsav" },
          { title: "Annual Picnic", path: "/events" },
        ],
      },
    ],
  },
  {
    id: "bengali-culture",
    title: "",
    color: "green",
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
    id: "bengali-culture",
    title: "",
    color: "green",
    path: "/bengali-culture",
    sections: [
      {
        title: "Media & Literature",
        items: [
          { title: "E-Magazine Ramdhanu", path: "/events#magazine" },
          { title: "Photo Archives", path: "/events#photos" },
          { title: "Print Media", path: "/events#print-media" },
          { title: "TV Media", path: "/events#tv-media" },
        ],
      },
      {
        title: "Social Media",
        items: [
          {
            title: "Facebook",
            path: "https://www.facebook.com/bengaliassociationsa",
            external: true,
          },
          {
            title: "WhatsApp",
            path: "https://wa.me/27795381768",
            external: true,
          },
          {
            title: "Instagram",
            path: "https://www.instagram.com/bengaliassociationsa",
            external: true,
          },
          {
            title: "Twitter",
            path: "https://twitter.com/bengaliassocsa",
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    color: "blue",
    path: "/events",
    items: [
      { title: "Annual Event Calendar", path: "/events#calendar" },
      { title: "Upcoming Events", path: "/events#upcoming" },
      { title: "RSVPs", path: "/events#rsvp" },
    ],
    // sections: [
    //   {
    //     title: "Media & Literature",
    //     items: [
    //       { title: "E-Magazine Ramdhanu", path: "/events#magazine" },
    //       { title: "Photo Archives", path: "/events#photos" },
    //       { title: "Print Media", path: "/events#print-media" },
    //       { title: "TV Media", path: "/events#tv-media" },
    //     ],
    //   },
    //   {
    //     title: "Social Media",
    //     items: [
    //       {
    //         title: "Facebook",
    //         path: "https://www.facebook.com/bengaliassociationsa",
    //         external: true,
    //       },
    //       {
    //         title: "WhatsApp",
    //         path: "https://wa.me/27795381768",
    //         external: true,
    //       },
    //       {
    //         title: "Instagram",
    //         path: "https://www.instagram.com/bengaliassociationsa",
    //         external: true,
    //       },
    //       {
    //         title: "Twitter",
    //         path: "https://twitter.com/bengaliassocsa",
    //         external: true,
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: "beyond-basa",
    title: "Beyond BASA",
    color: "yellow",
    path: "/beyond-basa",
    items: [
      { title: "Outreach Programs", path: "/beyond-basa#outreach" },
      { title: "Sponsors & Partners", path: "/beyond-basa#sponsors" },
      { title: "Sponsor List", path: "/beyond-basa#sponsor-list" },
      {
        title: "Sponsorship Request",
        path: "/beyond-basa#sponsorship-request",
      },
      { title: "Enquiries", path: "/contact" },
      { title: "BASA Business Exchange", path: "/bussiness-enquiry" },
    ],
  },
  {
    id: "join-basa",
    title: "Join BASA",
    color: "purple",
    path: "/join-basa",
    items: [{ title: "Become a Member", path: "/join-basa#membership" }],
    additionalItems: [
      { title: "Contact us", path: "/contact", icon: "📞" },
      { title: "ExCo Login", path: "/admin", icon: "🔐" },
    ],
  },
];
// Main navigation items (shown in desktop nav)
const mainNavItems = [
  { title: "Our Story", path: "/our-story" },
  { title: "Durga Pujo", path: "/events" },
  { title: "Bengali School", path: "/bengali-school" },
  // { title: "Event Calendar", path: "/events#calendar" },
  // { title: "Social Responsibilities", path: "/beyond-basa#outreach" },
  { title: "Join BASA", path: "/join-basa" },
  { title: "Contact Us", path: "/contact" },
];
