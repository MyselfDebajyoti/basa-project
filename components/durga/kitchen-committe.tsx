import Image from "next/image";
import { cn } from "@/lib/utils";

type CommitteeMember = {
  name: string;
  description: string[];
  imageQuery: string;
  imageUrl?: string;
};

const committeeMembers: CommitteeMember[] = [
  {
    name: " Mr.Arunabha Das",
    description: ["Committee", " Co-ordinator"],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/kitchen/Rectangle 457 (12).png",
  },
  {
    name: " Mr. Debadyuti Gupta",
    description: ["Member"],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/kitchen/Group 1171275723.png",
  },
  {
    name: "Mr. Arijit Ghosh",
    description: ["Member"],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/kitchen/Rectangle 457 (13).png",
  },
  {
    name: "Mr. Bijoy Saha",
    description: ["Member"],
    imageQuery: "Mrs. Sagarika Ganguly portrait",
    imageUrl: "/kitchen/Rectangle 457 (14).png",
  },
  {
    name: "Mr. Sandip Basu",
    description: ["Member"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/kitchen/Rectangle 457 (15).png",
  },
  {
    name: "Mr. Sujoy Das",
    description: ["Member"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/kitchen/Group 1171275726.png",
  },
  {
    name: "Pankaj Bhadra",
    description: ["Member"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/kitchen/Rectangle 457 (16).png",
  },
  {
    name: "Mr. Mrinal Kanti Das",
    description: ["Member"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/kitchen/Rectangle 457 (17).png",
  },
  {
    name: "Mr.Abhijeet Kar",
    description: ["Member"],
    imageQuery: "Ms. Saswati Das portrait with saree",
    imageUrl: "/kitchen/Rectangle 457 (18).png",
  },
];

type PujoCommitteeProps = {
  className?: string;
};

export function KitchenCommittee({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
          Pujo Committee 2025-Kitchen Committee
        </h2>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {committeeMembers.map((member) => {
          const imageSrc = member.imageUrl;
          return (
            <article
              key={member.name}
              className="flex items-start gap-4   bg-background p-4"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${member.name} portrait`}
                width={96}
                height={96}
                className="h-24 w-24  object-cover"
              />
              <div className="space-y-1">
                <p className="text-lg font-semibold text-[color:var(--brand-text)] text-pretty">
                  {member.name}
                </p>
                {member.description.map((line) => (
                  <p
                    key={line}
                    className="text-sm text-[color:var(--brand-text)] opacity-80 text-pretty"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <p className="text-xs leading-relaxed text-[color:var(--brand-text)] opacity-70">
        Please note: This list is compiled in the guidance &amp; advice of the
        concerned committee co-ordinator. If you find any discrepancy, please
        know it is probably an unintentional error.
      </p>
    </section>
  );
}
