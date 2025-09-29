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

        <h1 className="text-xl font-noto-sans font-semibold text-[color:var(--brand-text)] text-balance">
          Kisholoy-Bengali School
        </h1>
      </header>

      <HeroImage />

      <div className="mt-8 " id="about">
        <h3 className="text-xl font-noto-sans text-[color:var(--brand-text)] text-balance pb-8">
          About the Program
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            KISHOLOY: A Center for Bengali Language, Culture & Global Ties is an
            immersive online program designed to nurture a deep connection with
            the Bengali language and heritage. Open to all and offered free of
            cost, it brings together students from across multiple countries,
            creating a truly global learning community.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Beyond language learning, Kisholoy opens the doors to Bengal’s rich
            cultural landscape—its history, traditions, literature, and artistic
            expressions—enabling learners to experience the vibrancy of Bengali
            identity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            The program empowers participants to communicate confidently, refine
            comprehension, and achieve fluency by mastering phonetics,
            pronunciation, vocabulary, and grammar in a structured yet engaging
            way.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            At its heart are our dedicated volunteer teachers and enthusiastic
            parents, who work tirelessly to ensure children attend every week.
            often with them generously sacrificing their weekends. Kisholoy
            thrives as a labor of love, offering learners opportunities to
            engage in recitation, elocution, storytelling, drama, singing, and
            other performing arts. By blending linguistic skill-building with
            cultural exploration, Kisholoy not only preserves and celebrates
            Bengali heritage but also strengthens global ties, connecting
            communities and generations around the world.
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
