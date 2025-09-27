"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function AnnualPicnic({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        <div className="grid grid-rows-[auto_1fr] gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/annual-picnic/image 144.png"
              alt="Dance performance at Bongo Utsav"
              width={200}
              height={140}
              className="h-full w-full object-cover"
            />
          </div>
          <Image
            src="/annual-picnic/image 146.png"
            alt="Festival art from Bongo Utsav"
            width={408}
            height={180}
            className="h-full w-full object-cover"
          />
        </div>

        <Image
          src="/annual-picnic/image 145.png"
          alt="Bongo Utsav performers on stage"
          width={640}
          height={400}
          className="h-full w-full object-cover shadow-sm"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          The annual picnic in May is a beloved BASA tradition that blends
          relaxation with cultural bonding. Families come together in open
          spaces to enjoy sports, games, adda, and of course, delicious Bengali
          food. From cricket matches to antakshari, the picnic embodies the
          lively spirit of togetherness.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          This event provides an informal yet meaningful way for members to
          connect beyond festivals and rituals. It strengthens friendships,
          builds new bonds, and creates memories that keep the community vibrant
          throughout the year.
        </p>
      </div>
    </section>
  );
}
