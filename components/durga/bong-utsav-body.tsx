"use client";

import { BreadcrumbTrail } from "./breadcrumb-trail";

import { BongoUtsav } from "./bongo-utsav";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Bengali Culture", href: "#" },
  { label: "Talent & Culture", current: true },
];

export function BongoUtsavBody() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>

        <h1
          className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance"
          id="bongo-utsab"
        >
          Bongo Utsav
        </h1>
      </header>

      {/* <DurgaScheduleFigure />

      <div className="mt-8">
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
      <PujoCommittee className="mt-12" /> */}
      <BongoUtsav className="mt-12" />
      <h1
        className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance"
        id="annual-picnic"
      >
        Annual Picnic
      </h1>
      <BongoUtsav className="mt-12" />
      <h1
        className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance"
        id="lokkhi-pujo"
      >
        Lokkhi Pujo
      </h1>
      <BongoUtsav className="mt-12" />
      <h1
        className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance"
        id="saraswati-pujo"
      >
        Saraswati Pujo
      </h1>
      <BongoUtsav className="mt-12" />
      <h1
        className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance"
        id="kali-pujo"
      >
        Kali Pujo
      </h1>
      <BongoUtsav className="mt-12" />
      <h1
        className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance"
        id="dol-utsab"
      >
        Dol Utsav
      </h1>
      <BongoUtsav className="mt-12" />
    </div>
  );
}
