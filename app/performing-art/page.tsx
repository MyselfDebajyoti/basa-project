import type { CSSProperties } from "react";

import { PujoSidebar } from "@/components/durga/pujo-sidebar";

import { Body } from "@/components/performingArts/artsBody";

const sidebarItems = [
  { label: "Performing Art", href: "#", active: true },
  { label: "Dance", href: "#" },
  { label: "Elocution", href: "#" },
  { label: "Singing", href: "#" },
  { label: "Drama", href: "#" },
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
            <Body></Body>
          </div>
        </div>
      </section>
    </main>
  );
}
