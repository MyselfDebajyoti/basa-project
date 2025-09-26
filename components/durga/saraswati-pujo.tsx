"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function SaraswatiPujo({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        <div className="grid grid-rows-[auto_1fr] gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/saraswati/image 134.png"
              alt="Dance performance at Bongo Utsav"
              width={200}
              height={140}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <Image
            src="/saraswati/image 135.png"
            alt="Festival art from Bongo Utsav"
            width={408}
            height={180}
            className="h-full w-full rounded-md object-cover"
          />
        </div>

        <Image
          src="/saraswati/image 150.png"
          alt="Bongo Utsav performers on stage"
          width={640}
          height={400}
          className="h-full w-full rounded-md object-cover shadow-sm"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Saraswati Pujo is celebrated with great enthusiasm by Bengalis as the
          festival of knowledge, learning, and the arts. Goddess Saraswati,
          depicted in pristine white with her veena, represents wisdom and
          enlightenment. For children and students, this Pujo is especially
          meaningful, as they place their books and pens before the goddess to
          seek her blessings.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          In South Africa, Saraswati Pujo organized by BASA captures this
          essence, blending rituals with cultural activities like recitation,
          music, and art competitions. It not only strengthens the spiritual
          roots of the younger generation but also serves as a reminder of the
          enduring respect Bengalis hold for education and creativity.
        </p>
      </div>
    </section>
  );
}
