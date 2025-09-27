import Image from "next/image";
import { cn } from "@/lib/utils";

type WishesOnSharodothsavProps = {
  className?: string;
};

export function Wishes({ className }: WishesOnSharodothsavProps) {
  return (
    <section className={cn("  mt-8 pt-8 bg-background ", className)}>
      <header className="space-y-2">
        <h3 className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-10">
          Well Wisher&apos;s Messages
        </h3>
      </header>

      <figure className="overflow-hidden rounded-xl grid grid-cols-2 gap-4 bg-background shadow-sm">
        <Image
          src="/images/Screenshot 2025-09-20 at 14.54.10 1.svg"
          alt="Letters conveying wishes on Sharodothsav from the Chief Minister of West Bengal and the High Commissioner of India."
          width={960}
          height={690}
          className="h-auto w-full object-cover"
          priority
        />
        <Image
          src="/images/our-story-2.png"
          alt="Letters conveying wishes on Sharodothsav from the Chief Minister of West Bengal and the High Commissioner of India."
          width={960}
          height={790}
          className="h-auto w-full object-cover"
          priority
        />
      </figure>
    </section>
  );
}
