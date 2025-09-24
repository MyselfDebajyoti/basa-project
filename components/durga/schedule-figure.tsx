"use client";

import Image from "next/image";

export function DurgaScheduleFigure() {
  const dots = Array.from({ length: 7 });
  const activeIndex = 3;

  return (
    <div>
      <figure className=" border border-[color:var(--brand-muted)] bg-background ">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/Rectangle 465.svg"
            alt="Durga Pujo event schedule with three illustrated cards for Maha Sashthi, Maha Ashtami, and Maha Nabami rituals."
            width={800}
            height={460}
            className="h-auto w-full"
            priority
          />
        </div>
      </figure>
      <div className="mt-6">
        <div className="flex justify-center gap-2">
          {dots.map((_, index) => (
            <span
              key={index}
              className={[
                "h-2.5 w-2.5 rounded-full",
                index === activeIndex
                  ? "bg-[color:var(--brand-primary)]"
                  : "bg-[color:var(--brand-muted)]",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
