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
    name: "Mrs. Anindita Paul",
    description: ["Singing"],
    imageQuery: "Mrs. Anindita Paul portrait",
    imageUrl: "/art-teachers/anindita.png",
  },
  {
    name: "Mr. Somnath Modak",
    description: ["Drama"],
    imageQuery: "Mr. Somnath Modak portrait",
    imageUrl: "/art-teachers/somnath.png",
  },
  {
    name: "Mrs. Hemantika Chatterjee",
    description: ["Drama", "Elocution"],
    imageQuery: "Mrs. Hemantika Chatterjee portrait",
    imageUrl: "/art-teachers/hemantika.png",
  },
  {
    name: "Mrs. Sreela Gupta Banerjee",
    description: ["Theatre"],
    imageQuery: "Mrs. Sreela Gupta Banerjee portrait",
    imageUrl: "/art-teachers/sreela.png",
  },
  {
    name: "Mrs. Saswati Das",
    description: ["Dance"],
    imageQuery: "Mrs. Saswati Das portrait",
    imageUrl: "/art-teachers/saswati.png",
  },
  {
    name: "Mrs. Sudeshna Ghatak",
    description: ["Dance"],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/art-teachers/sudeshna.png",
  },
  {
    name: "Mrs. Annapurna Hazra Ghosh",
    description: ["Elocution", "Singing"],
    imageQuery: "Mrs. Annapurna Hazra Ghosh portrait",
    imageUrl: "/art-teachers/annapurna.png",
  },
  {
    name: "Mrs. Sagarika Ganguly",
    description: ["Singing"],
    imageQuery: "Mrs. Sagarika Ganguly portrait",
    imageUrl: "/art-teachers/sagarika.png",
  },
  {
    name: "Mrs. Swastika Das",
    description: ["Dance"],
    imageQuery: "Mrs. Swastika Das portrait",
    imageUrl: "/art-teachers/swastika.png",
  },
  {
    name: "Mr. Sanjoy Das",
    description: ["Elocution"],
    imageQuery: "Mr. Sanjoy Das portrait",
    imageUrl: "/art-teachers/sanjoy.png",
  },
  {
    name: "Ms. Ambika Ghosh",
    description: ["Dance"],
    imageQuery: "Ms. Ambika Ghosh portrait",
    imageUrl: "/art-teachers/ambika.png",
  },
  {
    name: "Ms. Gayatri Chokroborty",
    description: ["Dance Teacher"],
    imageQuery: "Ms. Gayatri Chokroborty portrait",
    imageUrl: "/art-teachers/gayatri.png",
  },
  {
    name: "Mrs. Rini Sarkar",
    description: ["Elocution"],
    imageQuery: "Mrs. Rini Sarkar portrait",
    imageUrl: "/art-teachers/rini.png",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: ["Elocution"],
    imageQuery: "Mrs. Sayantani Chatterjee portrait",
    imageUrl: "/art-teachers/sayantani.png",
  },
  {
    name: "Mrs. Madhumita Bhattacharya",
    description: ["Dance Teacher"],
    imageQuery: "Mrs. Madhumita Bhattacharya portrait",
    imageUrl: "/art-teachers/madhumita.png",
  },
  {
    name: "Mr. Debmalya Kar",
    description: ["Performing Arts"],
    imageQuery: "Mr. Debmalya Kar portrait",
    imageUrl: "/art-teachers/debmalya.png",
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
              className="flex items-start gap-4  bg-background p-4 "
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
