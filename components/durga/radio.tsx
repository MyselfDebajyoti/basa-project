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
    name: "Mrs. Sudeshna Ghatak",
    description: ["Pujo Committee", "Co-ordinator"],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/icons/rBangla.svg",
  },
  {
    name: "Mrs. Annapurna Hazra",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/icons/rBangla.svg",
  },
];

type PujoCommitteeProps = {
  className?: string;
};

export function Radio({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-[color:var(--brand-text)] text-balance">
          Radio Partner and Print Media Partner
        </h2>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {committeeMembers.map((member) => {
          const imageSrc = member.imageUrl;
          return (
            <div key={member.name} className="bg-background p-4 ">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${member.name} portrait`}
                width={96}
                height={96}
                className="h-24 w-24  object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
