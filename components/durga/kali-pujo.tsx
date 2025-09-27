"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function KaliPujo({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="grid gap-6 lg:grid-cols-3">
        <Image
          src="/kali/image 137.png"
          alt="Dance performance at Bongo Utsav"
          width={200}
          height={140}
          className="h-full w-full  object-cover"
        />
        <Image
          src="/kali/image 138.png"
          alt="Festival art from Bongo Utsav"
          width={408}
          height={180}
          className="h-full w-full  object-cover"
        />

        <Image
          src="/kali/image 133.png"
          alt="Bongo Utsav performers on stage"
          width={640}
          height={400}
          className="h-full w-full object-cover shadow-sm"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Kali Pujo, celebrated on the new moon night of Diwali, honors Goddess
          Kali, the fierce yet protective mother goddess. Bengalis light rows of
          lamps, burst crackers, and perform rituals to invoke her blessings for
          strength, protection, and the destruction of negativity.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Within the BASA community, Kali Pujo is observed with devotion and
          cultural warmth. While rituals remain at the center, the festival is
          also an occasion for togetherness, symbolizing resilience and the
          power of collective faith even far from Bengal.
        </p>
      </div>
    </section>
  );
}
