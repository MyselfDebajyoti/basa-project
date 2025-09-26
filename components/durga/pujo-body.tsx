"use client";

import { BreadcrumbTrail } from "./breadcrumb-trail";
import { DurgaScheduleFigure } from "./schedule-figure";
import { PujoCommittee } from "./puj--committee";

import { WishesOnSharodothsav } from "./wishes";
import { PurohitMoshai } from "./purohit";
import { Sponsors } from "./sponsors";
import { Televison } from "./television";
import { Radio } from "./radio";
import { PrintMedia } from "./print-media";
import { TVMedia } from "./tv-media";
import { CulturalCommittee } from "./cultural-committee";
import { KitchenCommittee } from "./kitchen-committe";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Bengali Culture", href: "/events/bongo-utsav" },
  { label: "Talent & Culture", current: true },
];

export function PujoBody() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>

        <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
          Durga Pujo
        </h2>
      </header>

      <DurgaScheduleFigure />

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
      <WishesOnSharodothsav />
      <PurohitMoshai />
      <PujoCommittee className="mt-12" />
      <CulturalCommittee className="mt-12"></CulturalCommittee>
      <KitchenCommittee />
      {/* <Sponsors className="mt-12" />
      <Televison className="mt-12" />
      <Radio className="mt-12" /> */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
            Latest Events
          </h2>

          {/* Facebook Post Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/FriendsFM919/videos/2898745130317631&show_text=false&width=500"
                width="100%"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency={true}
                allow="encrypted-media"
                title="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <PrintMedia className="mt-12" />
      <TVMedia className="mt-12" />
    </div>
  );
}
