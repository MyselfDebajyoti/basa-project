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
    name: "Mrs. Mohua Basu",
    description: ["Pujo Committee", "Co-ordinator"],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/committee/Rectangle 458 (1).png",
  },
  {
    name: "Mrs. Saswati Das",
    description: ["Co-ordinator,", "Ramp Walk Dance"],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/committee/saswati.png",
  },
  {
    name: "Mrs. Hemantika Chatterjee",
    description: ["Co-ordinator,", "Dance"],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/committee/Rectangle 458 (2).png",
  },
  {
    name: "Mrs. Annapurna Hazra Ghosh",
    description: ["Co-ordinator,", "Recitation Elocution"],
    imageQuery: "Mrs. Sagarika Ganguly portrait",
    imageUrl: "/committee/annapurna.png",
  },
  {
    name: "Mr. Debamalya Kar",
    description: ["Co-ordinator,", "Drama Ramp Walk"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/committee/Rectangle 458 (3).png",
  },
  {
    name: "Ms. Ambika Ghosh",
    description: ["Co-ordinator,", "Dance"],
    imageQuery: "Ms. Saswati Das portrait with saree",
    imageUrl: "/committee/Screenshot 2025-09-18 at 23.45.00 1.png",
  },
];

type PujoCommitteeProps = {
  className?: string;
};

export function CulturalCommittee({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
          Durga Pujo - Cultural Committee 2025
        </h2>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {committeeMembers.map((member) => {
          const imageSrc = member.imageUrl;
          return (
            <article key={member.name} className="flex items-start gap-4  p-4">
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
