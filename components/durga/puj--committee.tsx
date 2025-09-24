import Image from "next/image";
import { cn } from "@/lib/utils";

type CommitteeMember = {
  name: string;
  description: string[];
  imageQuery: string;
};

const committeeMembers: CommitteeMember[] = [
  {
    name: "Mrs. Sudeshna Ghatak",
    description: ["Pujo Committee", "Co-ordinator"],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
  },
  {
    name: "Mrs. Annapurna Hazra",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Annapurna Hazra portrait",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
  },
  {
    name: "Mrs. Sagarika Ganguly",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sagarika Ganguly portrait",
  },
  {
    name: "Ms. Gayatri Chokroborty",
    description: ["Co-ordinator,", "Venue & Decor"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
  },
  {
    name: "Ms. Saswati Das",
    description: ["Co-ordinator,", "Venue & Decor"],
    imageQuery: "Ms. Saswati Das portrait with saree",
  },
  {
    name: "Mrs. Sikha Bhattacharya",
    description: ["Co-ordinator,", "Fruit & Prasad"],
    imageQuery: "Mrs. Sikha Bhattacharya portrait smiling",
  },
  {
    name: "Mrs. Archana",
    description: ["Co-ordinator,", "Fruit & Prasad"],
    imageQuery: "Mrs. Archana portrait",
  },
  {
    name: "Mrs. Sharmi Palit",
    description: ["Co-ordinator", "Pujo Flower"],
    imageQuery: "Mrs. Sharmi Palit portrait",
  },
  {
    name: "Mrs. Jayashree Mitra",
    description: ["Co-ordinator,", "Alpona"],
    imageQuery: "Mrs. Jayashree Mitra portrait with glasses",
  },
  {
    name: "Mrs. Santa Saha",
    description: ["Co-ordinator,", "Evening Aarati"],
    imageQuery: "Mrs. Santa Saha portrait",
  },
  {
    name: "Mrs. Chandra Chokroborty",
    description: ["Co-ordinator,", "Protima & Mondop"],
    imageQuery: "Mrs. Chandra Chokroborty portrait smiling",
  },
  {
    name: "Mrs. Tamalee Karmakar Das",
    description: ["Co-ordinator,", "Protima & Mondop"],
    imageQuery: "Mrs. Tamalee Karmakar Das portrait",
  },
  {
    name: "Mrs. Saswati Das",
    description: ["Co-ordinator,", "Inventory"],
    imageQuery: "Mrs. Saswati Das committee member portrait",
  },
  {
    name: "Mrs. Sanjukta Das",
    description: ["Co-ordinator,", "Inventory"],
    imageQuery: "Mrs. Sanjukta Das portrait",
  },
];

type PujoCommitteeProps = {
  className?: string;
};

export function PujoCommittee({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-[color:var(--brand-text)] text-balance">
          Pujo Committee 2025
        </h2>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {committeeMembers.map((member) => {
          const imageSrc = `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(
            member.imageQuery
          )}`;
          return (
            <article
              key={member.name}
              className="flex items-start gap-4 rounded-lg border border-[color:var(--brand-muted)] bg-background p-4 shadow-sm"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${member.name} portrait`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
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
