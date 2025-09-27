"use client";

import { BreadcrumbTrail } from "../durga/breadcrumb-trail";

import HeroImage, { HeroImageTwo } from "../bengaliSchool/hero-image";

import { Teachers } from "./teachers";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Bengali Culture", href: "/events/bongo-utsav" },
  { label: "Talent & Culture", current: true },
];

export function Body() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>

        <h1 className="text-4xl font-semibold text-[color:var(--brand-text)] text-balance">
          Performing Arts
        </h1>
      </header>

      <HeroImage />

      <div className="mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            The Bengali Association of South Africa (BASA) is dedicated to
            nurturing and showcasing the rich cultural heritage of Bengal while
            celebrating the diversity of South Africa. Our cultural programs are
            not just performances, but collective experiences that bring our
            community closer. Through music, dance, drama, and elocution, we
            create a
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            platform for both adults and children to participate, learn, and
            shine. Every gathering is an opportunity to honor our traditions,
            share them with friends from other cultures, and ensure that the
            spirit of Bengal thrives far from its homeland. Below are some of
            the key cultural expressions that form the heart of BASA’s annual
            events.
          </p>
        </div>
        <h3
          className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-8 pt-8"
          id="dance"
        >
          Dance
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Dance has always been an expression of Bengali identity, from the
            graceful forms of classical Bharatanatyam and Odissi to the vibrancy
            of folk dances like Gaudiya Nritya and Baul traditions. At BASA,
            dance performances are a highlight of every cultural program,
            combining artistry with storytelling.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Our members—both children and adults—enthusiastically participate,
            ensuring that each performance bridges generations. With colorful
            costumes, soulful movements, and rhythmic beats, BASA dance
            showcases embody the beauty of Bengal while celebrating the
            diversity of South Africa.
          </p>
        </div>
        <h3
          className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-8 pt-8"
          id="elocution"
        >
          Elocution
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Elocution is where the beauty of the Bengali language shines.
            Through poetry recitals, storytelling, and speeches, our elocution
            programs create a platform for both children and adults to express
            themselves with confidence. From Tagore’s timeless verses to
            contemporary pieces, each recital carries a unique resonance.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            This platform nurtures public speaking skills and fosters pride in
            our linguistic heritage. Elocution sessions are often the quiet yet
            profound highlight of BASA events—reminding us of the power of words
            to inspire, educate, and unite.
          </p>
        </div>
        <h3
          className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-8 pt-8"
          id="singing"
        >
          Singing
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Music lies at the heart of every Bengali gathering, and BASA
            continues this cherished tradition. Our singing programs bring
            together voices young and old, celebrating Rabindra Sangeet, Nazrul
            Geeti, folk melodies, and modern Bengali songs. Each performance is
            an opportunity to reconnect with the sounds that remind us of home,
            while sharing them with the wider South African community.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            From solo performances to group renditions, our members pour their
            passion into every note. Singing evenings at BASA are not just
            events—they are collective journeys of nostalgia, culture, and joy
            where heritage is kept alive through melody.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3
          className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-8 pt-8"
          id="drama"
        >
          Drama
        </h3>
        <HeroImageTwo></HeroImageTwo>
        <div className="grid gap-8 md:grid-cols-2 mt-4">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Theatre holds a special place in Bengali culture, with a long legacy
            of thought-provoking plays and vibrant stagecraft. BASA nurtures
            this tradition by staging dramas that highlight Bengali literature,
            folklore, and contemporary issues relevant to our diaspora.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Whether it is a classic play or an original script written by our
            members, the drama segment brings the community together to
            rehearse, perform, and reflect. These productions are not only
            entertainment but also a powerful medium to preserve our
            storytelling heritage.
          </p>
        </div>
      </div>

      {/* <WishesOnSharodothsav />
      <PurohitMoshai />
      <PujoCommittee className="mt-12" />
      <PujoCommittee className="mt-12" />
      <PujoCommittee className="mt-12" /> */}
      <Teachers />

      {/* <Televison className="mt-12" /> */}
      {/* <Radio className="mt-12" />
      <PrintMedia className="mt-12" />
      <TVMedia className="mt-12" /> */}
    </div>
  );
}
