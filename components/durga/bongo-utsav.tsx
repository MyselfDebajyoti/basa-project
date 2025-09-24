"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function BongoUtsav({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        <div className="grid grid-rows-[auto_1fr] gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/image 147.svg"
              alt="Dance performance at Bongo Utsav"
              width={200}
              height={140}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <Image
            src="/images/image 149.svg"
            alt="Festival art from Bongo Utsav"
            width={408}
            height={180}
            className="h-full w-full rounded-md object-cover"
          />
        </div>

        <Image
          src="/images/image 148.svg"
          alt="Bongo Utsav performers on stage"
          width={640}
          height={400}
          className="h-full w-full rounded-md object-cover shadow-sm"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          The annual cultural program in June is one of BASA’s most awaited
          events, showcasing the diverse talents of the community. From Rabindra
          Sangeet and Nazrul Geeti to classical dance, drama, and contemporary
          performances, the program celebrates the richness of Bengali
          performing arts.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          It serves as a platform for both adults and children to connect with
          their heritage while gaining confidence and appreciation for Bengali
          traditions. Beyond entertainment, it reinforces cultural pride and
          provides an opportunity for the diaspora to pass on their love for
          Bengali art forms to the next generation.
        </p>
      </div>
    </section>
  );
}
