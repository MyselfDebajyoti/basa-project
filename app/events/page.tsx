"use client";
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";
import { PujoBody } from "@/components/durga/pujo-body";

const sidebarItems = [
  { label: "Durga Pujo", href: "#", active: true },
  { label: "Bongo Utsav", href: "/events/bongo-utsav" },
  { label: "Annual Picnic", href: "/events/bongo-utsav" },
  { label: "Lokkhi Pujo", href: "/events/bongo-utsav" },
  { label: "Saraswati Pujo", href: "/events/bongo-utsav" },
  { label: "Kali Pujo", href: "/events/bongo-utsav" },
  { label: "Dol Utsab", href: "/events/bongo-utsav" },
  // { label: "Back to Top", href: "" },
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
        // Add more sections here if PujoBody has additional sections with IDs
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
  const updatedSidebarItems = sidebarItems.map((item) => {
    // Handle external links (like Bongo Utsav) - don't apply scroll-based active state
    if (item.href.startsWith("/")) {
      return item;
    }

    return {
      ...item,
      active: item.href === activeSection,
    };
  });

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

    // Handle external links (like /events/bongo-utsav)
    if (href.startsWith("/")) {
      window.location.href = href;
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
      <section className="mx-auto max-w-6xl py-12 md:py-16">
        <div style={palette} className="flex flex-col gap-8 md:gap-10">
          {/* <BreadcrumbTrail items={breadcrumbItems} /> */}
          <div className="flex flex-col px-5 gap-12 md:grid md:grid-cols-[200px_1fr] md:gap-14">
            <PujoSidebar
              items={updatedSidebarItems}
              onItemClick={handleSidebarClick}
            />
            <PujoBody />
          </div>
        </div>
      </section>
    </main>
  );
}
