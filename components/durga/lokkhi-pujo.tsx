"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BongoUtsavProps = {
  className?: string;
};

export function LokkhiPujo({ className }: BongoUtsavProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2"></header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        <div className="grid grid-rows-[auto_1fr] gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/lokkhi-pujo/image 141.png"
              alt="Dance performance at Bongo Utsav"
              width={200}
              height={140}
              className="h-full w-full  object-cover"
            />
          </div>
          <Image
            src="/lokkhi-pujo/image 143.png"
            alt="Festival art from Bongo Utsav"
            width={408}
            height={180}
            className="h-full w-full  object-cover"
          />
        </div>

        <Image
          src="/lokkhi-pujo/image 142.png"
          alt="Bongo Utsav performers on stage"
          width={640}
          height={400}
          className="h-full w-full object-cover shadow-sm"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Lokkhi Pujo is a household favorite for Bengalis, celebrated with
          devotion to Goddess Laxmi, the goddess of wealth and prosperity.
          Traditionally held on the full moon following Durga Pujo, it is marked
          by prayers, alpona designs, and the offering of fruits, sweets, and
          grains, symbolizing abundance and gratitude.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          For the BASA community, Lokkhi Pujo provides an opportunity to relive
          the warmth of Bengali homes where the goddess is welcomed with
          reverence. Gatherings are often simple yet deeply spiritual,
          reinforcing values of humility, harmony, and thankfulness for
          blessings received.
        </p>
      </div>
    </section>
  );
}
