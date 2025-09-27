"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function DolUtsab({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Image
          src="/kali/image 140.png"
          alt="Dance performance at Bongo Utsav"
          width={200}
          height={140}
          className="h-full w-full  object-cover"
        />
        <Image
          src="/kali/image 151.png"
          alt="Festival art from Bongo Utsav"
          width={408}
          height={180}
          className="h-full w-full  object-cover"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Dol Utsav, also known as Holi, is Bengal’s colorful festival of
          spring, originally popularized by Rabindranath Tagore in
          Shantiniketan. It is celebrated with abir (colored powders), songs,
          dance, and the spirit of joy and renewal. For Bengalis, Dol is not
          just about colors — it is about spreading love, breaking barriers, and
          welcoming the new season with open hearts.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          BASA’s Dol Utsav brings this vibrant tradition alive in South Africa
          with cultural performances, group songs of Rabindra Sangeet, and
          joyous play with colors. Families and children participate
          wholeheartedly, turning the festival into a true reflection of
          Bengal’s joyous embrace of life and harmony.
        </p>
      </div>
    </section>
  );
}
