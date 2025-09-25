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
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Annapurna Hazra",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Sagarika Ganguly",
    description: ["Co-ordinator,", "Bhog Prep."],
    imageQuery: "Mrs. Sagarika Ganguly portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Ms. Gayatri Chokroborty",
    description: ["Co-ordinator,", "Venue & Decor"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Ms. Saswati Das",
    description: ["Co-ordinator,", "Venue & Decor"],
    imageQuery: "Ms. Saswati Das portrait with saree",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Sikha Bhattacharya",
    description: ["Co-ordinator,", "Fruit & Prasad"],
    imageQuery: "Mrs. Sikha Bhattacharya portrait smiling",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Archana",
    description: ["Co-ordinator,", "Fruit & Prasad"],
    imageQuery: "Mrs. Archana portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Sharmi Palit",
    description: ["Co-ordinator", "Pujo Flower"],
    imageQuery: "Mrs. Sharmi Palit portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Jayashree Mitra",
    description: ["Co-ordinator,", "Alpona"],
    imageQuery: "Mrs. Jayashree Mitra portrait with glasses",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Santa Saha",
    description: ["Co-ordinator,", "Evening Aarati"],
    imageQuery: "Mrs. Santa Saha portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Chandra Chokroborty",
    description: ["Co-ordinator,", "Protima & Mondop"],
    imageQuery: "Mrs. Chandra Chokroborty portrait smiling",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Tamalee Karmakar Das",
    description: ["Co-ordinator,", "Protima & Mondop"],
    imageQuery: "Mrs. Tamalee Karmakar Das portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Saswati Das",
    description: ["Co-ordinator,", "Inventory"],
    imageQuery: "Mrs. Saswati Das committee member portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
  {
    name: "Mrs. Sanjukta Das",
    description: ["Co-ordinator,", "Inventory"],
    imageQuery: "Mrs. Sanjukta Das portrait",
    imageUrl: "/committee/Group 1171275684.png",
  },
];

type PujoCommitteeProps = {
  className?: string;
};

export function Teachers({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[color:var(--brand-text)] text-balance">
          Teachers of our BASA cultural endeavors
        </h3>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {committeeMembers.map((member) => {
          const imageSrc = member.imageUrl;
          return (
            <article
              key={member.name}
              className="flex items-start gap-4  border border-[color:var(--brand-muted)] bg-background p-4 shadow-sm"
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
    </section>
  );
}
