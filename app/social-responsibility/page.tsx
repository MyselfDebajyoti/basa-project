"use client";
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";
import { BongoUtsavBody } from "@/components/durga/bong-utsav-body";
import { SocialBody } from "@/components/social-respons/body";

const sidebarItems = [
  { label: "Social Responsibility", href: "/events", active: true },
];

const palette = {
  "--brand-primary": "#264653",
  "--brand-accent": "#e76f51",
  "--brand-text": "#1f2937",
  "--brand-muted": "#f1f5f9",
} as CSSProperties;

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("#bongo-utsab");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        {
          id: "#bongo-utsab",
          element:
            document.getElementById("bongo-utsab") ||
            document.querySelector("main"),
        },
        {
          id: "#saraswati-pujo",
          element: document.getElementById("saraswati-pujo"),
        },
        { id: "#kali-pujo", element: document.getElementById("kali-pujo") },
        { id: "#dol-utsab", element: document.getElementById("dol-utsab") },
        {
          id: "#annual-picnic",
          element: document.getElementById("annual-picnic"),
        },
      ];

      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Find the section that's currently in view
      let currentSection = "#bongo-utsab"; // Default to first section

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
    // Handle external links (like Durga Pujo) - don't apply scroll-based active state
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

    // Handle external links (like /events)
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    // Handle section navigation
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#bongo-utsab") {
      // If bongo-utsab section doesn't exist, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-6xl py-4 px-4 sm:py-6 sm:px-6 md:py-12 lg:py-16">
        <div style={palette} className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* <BreadcrumbTrail items={breadcrumbItems} /> */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:grid lg:grid-cols-[200px_1fr] lg:gap-14">
            <PujoSidebar
              items={updatedSidebarItems}
              onItemClick={handleSidebarClick}
            />
            <SocialBody />
          </div>
        </div>
      </section>
    </main>
  );
}
