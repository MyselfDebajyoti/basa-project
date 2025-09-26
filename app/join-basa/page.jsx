"use client";
import { useState, useEffect } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";
// import { BreadcrumbTrail } from "@/components/durga/breadcrumb-trail";
import { JoinBasaBody } from "@/components/join-basa/body";

const sidebarItems = [
  { label: "Membership Benefits", href: "#membership", active: true },
  //   { label: "Fees Payment", href: "#fees-payment" },
  { label: "Enquries", href: "#membership-form" },
  { label: "BASA Business Exchange", href: "#contact" },
  { label: "Back to Top", href: "" },
];

// const breadcrumbItems = [
//   { label: "Home", href: "/" },
//   { label: "Join BASA", current: true },
// ];

const palette = {
  "--brand-primary": "#264653",
  "--brand-accent": "#e76f51",
  "--brand-text": "#1f2937",
  "--brand-muted": "#f1f5f9",
};

export default function JoinBasaPage() {
  const [activeSection, setActiveSection] = useState("#membership");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#membership", element: document.getElementById("membership") },
        {
          id: "#fees-payment",
          element: document.getElementById("fees-payment"),
        },
        {
          id: "#membership-form",
          element: document.getElementById("membership-form"),
        },
        { id: "#contact", element: document.getElementById("contact") },
      ];

      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Find the section that's currently in view
      let currentSection = "#membership"; // Default to first section

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
      <section className="mx-auto max-w-6xl py-6 md:py-16">
        <div style={palette} className="flex flex-col gap-8 md:gap-10">
          {/* <BreadcrumbTrail items={breadcrumbItems} /> */}
          <div className="flex flex-col gap-12 md:grid md:grid-cols-[200px_1fr] md:gap-14">
            <PujoSidebar
              items={updatedSidebarItems}
              onItemClick={handleSidebarClick}
            />
            <JoinBasaBody />
          </div>
        </div>
      </section>
    </main>
  );
}
