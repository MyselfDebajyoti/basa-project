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
        <div className="flex flex-col gap-10 md:gap-12">
          {/* First Row - Two Images */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12">
            <a href="https://www.thewall.in/international-news/spring-arrives-in-johannesburg-with-the-blooming-of-purple-jacaranda-petals-durga-puja-drums-ringing/tid/174178">
              <img
                src="/images/image--1.png"
                width="500"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                alt="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              />
            </a>
            <a href="https://www.thewall.in/international-news/spring-arrives-in-johannesburg-with-the-blooming-of-purple-jacaranda-petals-durga-puja-drums-ringing/tid/174178">
              <img
                src="/images/image--2.png"
                width="500"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                alt="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              />
            </a>
          </div>

          {/* Second Row - Third Image */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12">
            <a href="https://zeenews.india.com/bengali/world/south-africa-puja-celebrations-johannesburg-returns-to-familiar-address-after-20-years_614778.html">
              <img
                src="/images/zee-news.png"
                width="500"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                alt="Facebook Post - Friends Sunday Funday with Animesh"
                className="md:w-[40%] w-full "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
