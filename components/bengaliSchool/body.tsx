"use client";

import { BreadcrumbTrail } from "../durga/breadcrumb-trail";

import HeroImage from "./hero-image";
import { Outreach } from "./outreach";
import { Teachers } from "./teachers";
import { FormSkeleton } from "../BengaliEnrollmentForm";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Bengali Culture", href: "#" },
  { label: "Talent & Culture", current: true },
];

export function Body() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>

        <h1 className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance">
          Kisholoy-Bengali School
        </h1>
      </header>

      <HeroImage />

      <div className="mt-8 " id="about">
        <h3 className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-8">
          About the Program
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Durga Pujo is the most cherished celebration in the Bengali
            calendar, symbolizing the triumph of good over evil and the
            homecoming of Goddess Durga with her children. For Bengalis across
            the world, Durga Pujo is more than a religious occasion — it is a
            festival of art, music, literature, and community spirit. The
            fragrance of dhuno, the rhythm of dhaak, and the chants of ‘Bolo
            Durga Mai Ki Jai’ bring the community together in joy and devotion.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            In South Africa, BASA’s Durga Pujo has become a vibrant cultural
            event where members gather to recreate the essence of Kolkata’s
            festivities. From traditional rituals and pushpanjali to cultural
            programs, food stalls, and addas, the Pujo is a celebration of
            identity and belonging. It serves as a bridge between generations,
            ensuring that Bengali traditions remain alive and accessible to the
            diaspora.
          </p>
        </div>
      </div>
      {/* <WishesOnSharodothsav />
      <PurohitMoshai />
      <PujoCommittee className="mt-12" />
      <PujoCommittee className="mt-12" />
      <PujoCommittee className="mt-12" /> */}
      <Outreach className="mt-12" />
      <Teachers className="mt-12" />
      <FormSkeleton />
      {/* <Televison className="mt-12" /> */}
      {/* <Radio className="mt-12" />
      <PrintMedia className="mt-12" />
      <TVMedia className="mt-12" /> */}
    </div>
  );
}
