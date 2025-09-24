"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle dropdown menu
  const toggleDropdown = (dropdown: string | null) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Check if a menu item has submenus
  const hasSubmenu = (title: string) => {
    return title === "Clients" || title === "Work";
  };

  // Get submenu data based on menu title
  const getSubmenuData = (title: string) => {
    if (title === "Clients") return ClientNavbar;
    if (title === "Work") return WorkData;
    return [];
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-white z-50 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href={"/"}>PARUL VERMA</Link>
          </h1>

          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-md overflow-y-auto max-h-screen">
            {NavData.map((item, index) => (
              <div key={index} className="mb-2">
                {hasSubmenu(item.title) ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={`flex items-center justify-between w-full text-sm py-2 ${
                        pathname.startsWith(item.url)
                          ? "text-black"
                          : "text-gray-500"
                      } hover:text-black`}
                    >
                      <span>{item.title}</span>
                      {openDropdown === item.title ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 border-l border-gray-200">
                        {getSubmenuData(item.title).map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.url}
                            className={`${
                              pathname === subItem.url
                                ? "text-black"
                                : "text-gray-500"
                            } block py-2 text-sm hover:text-black`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className={`${
                      pathname === item.url ? "text-black" : "text-gray-500"
                    } block py-2 text-sm hover:text-black`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed top-0 left-0 h-screen w-64 p-6 pl-10 font-bold bg-white z-50 border-r overflow-y-auto">
        <h1 className="text-xl">
          <Link href={"/"}>
            PARUL <br /> VERMA
          </Link>
        </h1>

        <div className="mt-24">
          {NavData.map((item, index) => (
            <div
              key={index}
              className={`${item.url === "/resume" ? "mt-8" : "mt-4"}`}
            >
              {hasSubmenu(item.title) ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className={`flex items-center justify-between w-full text-sm ${
                      pathname.startsWith(item.url)
                        ? "font-semibold"
                        : "font-light"
                    } hover:text-black`}
                  >
                    <span>{item.title}</span>
                    {openDropdown === item.title ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  {openDropdown === item.title && (
                    <div className="pl-4 border-l border-gray-200 mt-2">
                      {getSubmenuData(item.title).map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          className={`${
                            pathname === subItem.url
                              ? "font-semibold"
                              : "font-light"
                          } block py-1 text-sm hover:text-black`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.url}
                  className={`${
                    pathname === item.url ? "font-semibold" : "font-light"
                  } block text-sm hover:text-black`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <span className="absolute bottom-3 font-light text-sm">
          Copyright Parul Verma 2025
        </span>
      </nav>
    </>
  );
}

const NavData = [
  {
    title: "Profile",
    url: "/",
  },
  {
    title: "Clients",
    url: "/clients/hbtf-bank",
  },
  {
    title: "Work",
    url: "/work",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Résumé/CV",
    url: "/resume",
  },
];

const ClientNavbar = [
  {
    title: "HBTF",
    url: "/clients/hbtf-bank",
  },
  {
    title: "Google",
    url: "/clients/google",
  },
  {
    title: "Ceva Logistics",
    url: "/clients/ceva-logistics",
  },
  {
    title: "Levis",
    url: "/clients/levis",
  },
  {
    title: "Govt of India",
    url: "/clients/govt-of-india",
  },
  {
    title: "Jotun",
    url: "/clients/jotun",
  },
  {
    title: "XPO logistics",
    url: "/clients/xpo-logistics",
  },
  {
    title: "John Deere",
    url: "/clients/john-deere",
  },
];

const WorkData = [
  {
    title: "Neo Dashboard",
    url: "/work/landing-page",
  },
  {
    title: "Unsecured Lending",
    url: "/work/unsecured-lending",
  },
  {
    title: "Lean Digitisation",
    url: "/work/digital-banking",
  },
  {
    title: "Un-Banking",
    url: "/work/un-banking",
  },
  {
    title: "Indian Retail Banking",
    url: "/work/retail-banking",
  },
  {
    title: "Global Reinsurer",
    url: "/work/global-reinsurer",
  },
  {
    title: "Unifying Tax",
    url: "/work/unifying-tax",
  },
  {
    title: "Ancient Indian Bathing",
    url: "/work/luxury-wellness",
  },
];

// Layout component
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-0  px-4 md:px-8">{children}</main>
    </div>
  );
}
