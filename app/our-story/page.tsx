"use client";
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";

import { OurStoryBody } from "@/components/our-story/body";

const sidebarItems = [
  { label: "History", href: "#", active: true },
  { label: "Mission and Vision", href: "#Mission" },
  { label: "Eminent Members", href: "#eminent-members" },
  { label: "Patron Messages", href: "#patron-messages" },
  { label: "Current Exco", href: "our-story/current-exco" },
  { label: "Back to Top", href: "" },
];

const palette = {
  "--brand-primary": "#264653",
  "--brand-accent": "#e76f51",
  "--brand-text": "#1f2937",
  "--brand-muted": "#f1f5f9",
} as CSSProperties;

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#", element: document.querySelector("main") },
        { id: "#Mission", element: document.getElementById("Mission") },
        {
          id: "#eminent-members",
          element: document.getElementById("eminent-members"),
        },
        {
          id: "#patron-messages",
          element: document.getElementById("patron-messages"),
        },
      ];

      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Find the section that's currently in view
      let currentSection = "#"; // Default to first section

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

  const handleSidebarClick = (href: string) => {
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

    // Handle section navigation
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
            <OurStoryBody />
          </div>
        </div>
      </section>
    </main>
  );
}
