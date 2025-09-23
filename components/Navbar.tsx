"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Menu structure configuration
const menuConfig = [
  {
    id: "our-story",
    title: "Our Story",
    color: "red",
    path: "/our-story",
    items: [
      { title: "History", path: "/our-story#history" },
      { title: "Mission & Vision", path: "/our-story#mission-vision" },
      { title: "Eminent Members", path: "/our-story#eminent-members" },
      { title: "Patron Messages", path: "/our-story#patron-messages" },
      { title: "Current Ex-Co", path: "/exco" },
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
          { title: "Durga Puja", path: "/bengali-culture#durga-puja" },
          { title: "Lokkhi Puja", path: "/bengali-culture#lokkhi-puja" },
          { title: "Kali Puja", path: "/bengali-culture#kali-puja" },
          { title: "Saraswati Puja", path: "/bengali-culture#saraswati-puja" },
          { title: "Dol-Utsav", path: "/bengali-culture#dol-utsav" },
          { title: "Bongotsav", path: "/bengali-culture#bongotsav" },
          { title: "Annual Picnic", path: "/bengali-culture#annual-picnic" },
        ],
      },
      {
        title: "Talent & Culture",
        items: [
          { title: "Bengali School - Kshology", path: "/bengali-school" },
          { title: "Learning Grades", path: "/bengali-school#learning-grades" },
          { title: "Enrol in Kshology", path: "/bengali-school#enrol" },
          { title: "Know our Teachers", path: "/bengali-school#teachers" },
        ],
      },
      {
        title: "Performing Arts",
        items: [
          { title: "Dance", path: "/bengali-culture#dance" },
          { title: "Elocution", path: "/bengali-culture#elocution" },
          { title: "Singing", path: "/bengali-culture#singing" },
          { title: "Drama", path: "/bengali-culture#drama" },
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
          { title: "Facebook", path: "https://facebook.com", external: true },
          { title: "WhatsApp", path: "https://whatsapp.com", external: true },
          { title: "Instagram", path: "https://instagram.com", external: true },
          { title: "Twitter", path: "https://twitter.com", external: true },
        ],
      },
    ],
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
      {
        title: "BASA Business Exchange",
        path: "/beyond-basa#business-exchange",
      },
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
  { title: "Durga Puja", path: "/bengali-culture#durga-puja" },
  { title: "Bengali School", path: "/bengali-school" },
  { title: "Event Calendar", path: "/events#calendar" },
  { title: "Social Responsibilities", path: "/beyond-basa#outreach" },
  { title: "Join BASA", path: "/join-basa" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "text-red-600 border-red-200 hover:text-red-600",
      green: "text-green-600 border-green-200 hover:text-green-600",
      blue: "text-blue-600 border-blue-200 hover:text-blue-600",
      yellow: "text-yellow-600 border-yellow-200 hover:text-yellow-600",
      purple: "text-purple-600 border-purple-200 hover:text-purple-600",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "text-gray-600 border-gray-200 hover:text-gray-600"
    );
  };

  const handleLinkClick = (path: string, external?: boolean) => {
    if (external) {
      window.open(path, "_blank");
    }
    setIsMenuOpen(false);
  };

  const renderMenuItem = (item: any, colorClass: string) => {
    if (item.external) {
      return (
        <button
          key={item.title}
          onClick={() => handleLinkClick(item.path, item.external)}
          className={`${colorClass} block text-left w-full`}
        >
          {item.title}
        </button>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.path}
        className={colorClass}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.title}
      </Link>
    );
  };

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
                {menuConfig.map((menu) => {
                  const colorClasses = getColorClasses(menu.color);
                  const headerColorClass =
                    colorClasses.split(" ")[0] +
                    " font-bold text-lg mb-4 border-b " +
                    colorClasses.split(" ")[1] +
                    " pb-2";
                  const linkColorClass = colorClasses.split(" ")[2];

                  return (
                    <div key={menu.id}>
                      <Link
                        href={menu.path}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <h3 className={headerColorClass}>{menu.title}</h3>
                      </Link>

                      <div className="space-y-4">
                        {/* Direct items */}
                        {menu.items && (
                          <ul className="space-y-2 text-sm text-gray-700">
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
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {section.title}
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
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
                          <div className="mt-8 space-y-3">
                            {menu.additionalItems.map((item) => (
                              <div
                                key={item.title}
                                className="flex items-center space-x-2 text-sm text-gray-700"
                              >
                                <span>{item.icon}</span>
                                <Link
                                  href={item.path}
                                  className={linkColorClass}
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
      )}

      {/* Header/Navbar */}
      <header className="bg-white px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm text-gray-700">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`hover:text-gray-900 transition-colors ${
                  pathname === item.path ? "text-gray-900 font-medium" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center space-x-2 hover:text-gray-900 transition-colors"
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
