import type { CSSProperties } from "react";
import { BreadcrumbTrail } from "@/components/durga/breadcrumb-trail";
import { PujoSidebar } from "@/components/durga/pujo-sidebar";
import { PujoBody } from "@/components/durga/pujo-body";
import { BongoUtsavBody } from "@/components/durga/bong-utsav-body";

const breadcrumbItems = [
  { label: "Home", href: "#" },
  { label: "Bengali Culture", href: "#" },
  { label: "Talent & Culture", current: true },
];

const sidebarItems = [
  { label: "Durga Pujo", href: "#", active: true },
  { label: "Lokhhi Pujo", href: "#" },
  { label: "Saraswati Pujo", href: "#" },
  { label: "Kali Pujo", href: "#" },
  { label: "Dol Utsav", href: "#" },
  { label: "Bongo Utsav", href: "#" },
  { label: "Annual Picnic", href: "#" },
  { label: "Back to Top", href: "#" },
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
            <BongoUtsavBody />
          </div>
        </div>
      </section>
    </main>
  );
}
