import Image from "next/image";
import { cn } from "@/lib/utils";

type PujoCommitteeProps = {
  className?: string;
};

export function PrintMedia({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-[color:var(--brand-text)] text-balance pb-10">
          Print Media Coverage
        </h2>
      </header>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}

        {/* Facebook Post Embed */}
        <div className="flex">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12">
            <a href="https://www.thewall.in/international-news/spring-arrives-in-johannesburg-with-the-blooming-of-purple-jacaranda-petals-durga-puja-drums-ringing/tid/174178">
              {" "}
              <img
                src="/images/image--1.png"
                width="500"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                alt="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              ></img>
            </a>
            <a href="https://epaper.sangbadpratidin.in/epaper/m/950604/683b6a256c708">
              <img
                src="/images/image--2.png"
                width="500"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                alt="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
