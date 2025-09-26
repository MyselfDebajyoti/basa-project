import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PujoCommitteeProps = {
  className?: string;
};

export function PrintMedia({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-[color:var(--brand-text)] text-balance pb-10">
          Print Media Coverage
        </h2>
      </header>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}

        {/* Facebook Post Embed */}
        <figure className="overflow-hidden rounded-xl grid grid-cols-2 gap-4 bg-background shadow-sm">
          <Link
            href={
              "https://www.thewall.in/international-news/spring-arrives-in-johannesburg-with-the-blooming-of-purple-jacaranda-petals-durga-puja-drums-ringing/tid/174178"
            }
          >
            <Image
              src="/print-media/Screenshot 2025-09-25 at 23.42.00 1.png"
              alt="Letters conveying wishes on Sharodothsav from the Chief Minister of West Bengal and the High Commissioner of India."
              width={960}
              height={690}
              className="h-auto w-full object-cover"
              priority
            />
          </Link>
          <Link
            href={
              "https://epaper.sangbadpratidin.in/epaper/m/950604/683b6a256c708"
            }
          >
            <Image
              src="/print-media/Group 1171275777.png"
              alt="Letters conveying wishes on Sharodothsav from the Chief Minister of West Bengal and the High Commissioner of India."
              width={960}
              height={690}
              className="h-auto w-full object-cover"
              priority
            />
          </Link>
        </figure>
      </div>
    </section>
  );
}
