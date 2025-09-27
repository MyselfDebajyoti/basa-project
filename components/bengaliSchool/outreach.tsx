import Image from "next/image";
import { cn } from "@/lib/utils";

type CommitteeMember = {
  name: string;
  description: string[];
  imageQuery: string;
  imageUrl?: string;
  country?: string;
};

const committeeMembers: CommitteeMember[] = [
  {
    name: "Mrs. Sudeshna Ghatak",
    description: ["Pujo Committee", "Co-ordinator"],
    imageQuery: "South African",
    imageUrl: "/flags/southafrica.png",
    country: "South Africa",
  },
  {
    name: "Mrs. Annapurna Hazra",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/flags/Screenshot 2025-09-15 at 15.32.27 1.svg",
    country: "Mauritius",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/flags/Screenshot 2025-09-15 at 15.33.09 1.svg",
    country: "Uganda",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/flags/Screenshot 2025-09-15 at 15.33.49 1.svg",
    country: "Botswana",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/flags/Zambia.png",
    country: "Zambia",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/flags/Screenshot 2025-09-15 at 15.33.49 3.svg",
    country: "Netherlands",
  },
];

type PujoCommitteeProps = {
  className?: string;
};

export function Outreach({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)} id="outreach">
      <header className="flex flex-col gap-2">
        <h3 className="text-xl font-noto-sans font-semibold text-[color:var(--brand-text)] text-balance">
          International Outreach
        </h3>
      </header>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-6">
        {committeeMembers.map((member) => {
          const imageSrc = member.imageUrl;
          const countryName = member.country;
          return (
            <div
            key={member.name}
            className="flex flex-col items-center gap-2 ">
              <div
                key={member.name}
                className="bg-background  w-24 h-24 flex justify-center items-center rounded-full "
              >
                {/* <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${member.name} portrait`}
                // width={96}
                // height={96}
                className="h-24 w-24  object-contain"
              /> */}

                <img
                  src={imageSrc || "/placeholder.svg"}
                  className="w-24 h-24 object-cover rounded-full"
                  alt=""
                />
              </div>
              <p className="text-sm">{countryName}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
