"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function ImageComp({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="pt-12 mt-12">
        <Image
          src="/images/WhatsApp Image 2025-09-22 at 21.42.42 1.png"
          alt="Your image description"
          width={640}
          height={400}
          className="w-full  object-cover shadow-sm"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          At the Bengali Association of South Africa (BASA), we believe that
          preserving culture should go hand in hand with serving society. Our
          commitment to social responsibility is driven by the desire to uplift
          communities, to give back, and to carry forward the values of
          compassion, dignity, and solidarity. Through partnerships, volunteer
          efforts, and coordinated programs, BASA works to reach those who need
          support most. One of our flagship engagements has been with the
          Connect to Feed initiative in Midrand, where we partnered to deliver
          meals and food hampers to underprivileged communities in Ivory Park.
          Over 300 children and adults were nourished through this joint effort
          with Food for Life and local groups—showing that collective action can
          make a real difference.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Beyond meal drives, BASA regularly organizes donations of food,
          clothing, and essentials to foster care homes, old age homes, schools,
          and marginalized communities. Whether it’s the warmth of a winter
          blanket for elderly residents, uniforms and stationery for
          under-resourced schools, or nutritious food parcels for families in
          need, our outreach is wide in scope and driven by heart. We take pride
          in delivering not just material assistance but also connection,
          respect, and encouragement to those we serve. We invite all BASA
          members, friends, and supporters to join us in these efforts—whether
          by volunteering time, contributing resources, or helping coordinate
          logistics. Together, we can extend our cultural mission into a force
          for positive change across South Afric
        </p>
        <div className="pt-12 mt-12">
          <Image
            src="/images/Screenshot 2025-09-21 at 22.50.15 1.png"
            alt="Your image description"
            width={640}
            height={400}
            className="w-full  object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
