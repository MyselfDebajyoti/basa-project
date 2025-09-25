import type { CSSProperties } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";

import { BongoUtsavBody } from "@/components/durga/bong-utsav-body";
import { OurStoryBody } from "@/components/our-story/body";
import { ExcoBody } from "@/components/current-exco/body";

const sidebarItems = [
  { label: "History", href: "#" },
  { label: "Mission and Vision", href: "#Mission" },
  { label: "Eminent Members", href: "#eminent-members" },
  { label: "Patron Messages", href: "#patron-messages" },
  { label: "Current Exco", href: "/current-exco", active: true },

  { label: "Back to Top", href: "" },
];

const palette = {
  "--brand-primary": "#264653",
  "--brand-accent": "#e76f51",
  "--brand-text": "#1f2937",
  "--brand-muted": "#f1f5f9",
} as CSSProperties;

export default function Page() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-6xl py-12 md:py-16">
        <div style={palette} className="flex flex-col gap-8 md:gap-10">
          {/* <BreadcrumbTrail items={breadcrumbItems} /> */}
          <div className="flex flex-col gap-12 md:grid md:grid-cols-[200px_1fr] md:gap-14">
            <PujoSidebar items={sidebarItems} />
            <ExcoBody />
          </div>
        </div>
      </section>
    </main>
  );
}
