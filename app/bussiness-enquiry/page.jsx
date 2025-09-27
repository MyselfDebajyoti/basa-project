"use client";
import { useState, useEffect } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";
// import { BreadcrumbTrail } from "@/components/durga/breadcrumb-trail";
import { BusinessEnquiryBody } from "@/components/business-enquiry/body";

const sidebarItems = [
  { label: "Networking & Business", href: "#networking", active: true },
  { label: "Enquiry Form", href: "#enquiry-form" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#contact" },
  { label: "Back to Top", href: "" },
];

// const breadcrumbItems = [
//   { label: "Home", href: "/" },
//   { label: "Bengali Culture", href: "/bengali-culture" },
//   { label: "Business Enquiry", current: true },
// ];

const palette = {
  "--brand-primary": "#264653",
  "--brand-accent": "#e76f51",
  "--brand-text": "#1f2937",
  "--brand-muted": "#f1f5f9",
};

export default function BusinessEnquiryPage() {
  const [activeSection, setActiveSection] = useState("#networking");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#networking", element: document.getElementById("networking") },
        {
          id: "#enquiry-form",
          element: document.getElementById("enquiry-form"),
        },
        { id: "#benefits", element: document.getElementById("benefits") },
        { id: "#contact", element: document.getElementById("contact") },
      ];

      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Find the section that's currently in view
      let currentSection = "#networking"; // Default to first section

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update sidebar items with current active state
  const updatedSidebarItems = sidebarItems.map((item) => ({
    ...item,
    active: item.href === activeSection,
  }));

  const handleSidebarClick = (href) => {
    if (href === "") {
      // Back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href === "#") {
      // Scroll to main section (top)
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle page navigation (starts with /)
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    // Handle section navigation (hash fragments)
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-6xl py-4 px-4 sm:py-6 sm:px-6 md:py-16">
        <div style={palette} className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* <BreadcrumbTrail items={breadcrumbItems} /> */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:grid lg:grid-cols-[200px_1fr] lg:gap-14">
            <PujoSidebar
              items={updatedSidebarItems}
              onItemClick={handleSidebarClick}
            />
            <BusinessEnquiryBody />
          </div>
        </div>
      </section>
    </main>
  );
}
