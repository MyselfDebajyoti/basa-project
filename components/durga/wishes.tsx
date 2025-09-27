import Image from "next/image";
import { cn } from "@/lib/utils";

type WishesOnSharodothsavProps = {
  className?: string;
};

export function WishesOnSharodothsav({ className }: WishesOnSharodothsavProps) {
  return (
    <section className={cn("   bg-background ", className)}>
      <header className="space-y-2">
        <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
          Wishes on Sharodothsav
        </h2>
      </header>

      <figure className="overflow-hidden rounded-xl grid grid-cols-2 gap-4 bg-background shadow-sm">
        <div>
          <p className="mb-3  ">Current Messages</p>
          <Image
            src="/images/HC.jpg"
            alt="Letters conveying wishes on Sharodothsav from the Chief Minister of West Bengal and the High Commissioner of India."
            width={960}
            height={690}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div>
          <p className="mb-3">Messages from the past</p>
          <Image
            src="/images/CM.jpg"
            alt="Letters conveying wishes on Sharodothsav from the Chief Minister of West Bengal and the High Commissioner of India."
            width={960}
            height={690}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </figure>
    </section>
  );
}
