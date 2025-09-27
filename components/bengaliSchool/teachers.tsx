// import Image from "next/image";
// import { cn } from "@/lib/utils";

// type CommitteeMember = {
//   name: string;
//   description: string[];
//   imageQuery: string;
//   imageUrl?: string;
// };

// const committeeMembers: CommitteeMember[] = [
//   {
//     name: "Mrs. Sudeshna Ghatak",
//     description: ["Pujo Committee", "Co-ordinator"],
//     imageQuery: "Mrs. Sudeshna Ghatak portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Annapurna Hazra",
//     description: ["Co-ordinator,", "Bhog Prep."],
//     imageQuery: "Mrs. Annapurna Hazra portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Sayantani Chatterjee",
//     description: ["Co-ordinator,", "Bhog Prep."],
//     imageQuery: "Mrs. Sayantani Chatterjee portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Sagarika Ganguly",
//     description: ["Co-ordinator,", "Bhog Prep."],
//     imageQuery: "Mrs. Sagarika Ganguly portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Ms. Gayatri Chokroborty",
//     description: ["Co-ordinator,", "Venue & Decor"],
//     imageQuery: "Ms. Gayatri Chokroborty portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Ms. Saswati Das",
//     description: ["Co-ordinator,", "Venue & Decor"],
//     imageQuery: "Ms. Saswati Das portrait with saree",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Sikha Bhattacharya",
//     description: ["Co-ordinator,", "Fruit & Prasad"],
//     imageQuery: "Mrs. Sikha Bhattacharya portrait smiling",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Archana",
//     description: ["Co-ordinator,", "Fruit & Prasad"],
//     imageQuery: "Mrs. Archana portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Sharmi Palit",
//     description: ["Co-ordinator", "Pujo Flower"],
//     imageQuery: "Mrs. Sharmi Palit portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Jayashree Mitra",
//     description: ["Co-ordinator,", "Alpona"],
//     imageQuery: "Mrs. Jayashree Mitra portrait with glasses",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Santa Saha",
//     description: ["Co-ordinator,", "Evening Aarati"],
//     imageQuery: "Mrs. Santa Saha portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Chandra Chokroborty",
//     description: ["Co-ordinator,", "Protima & Mondop"],
//     imageQuery: "Mrs. Chandra Chokroborty portrait smiling",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Tamalee Karmakar Das",
//     description: ["Co-ordinator,", "Protima & Mondop"],
//     imageQuery: "Mrs. Tamalee Karmakar Das portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Saswati Das",
//     description: ["Co-ordinator,", "Inventory"],
//     imageQuery: "Mrs. Saswati Das committee member portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
//   {
//     name: "Mrs. Sanjukta Das",
//     description: ["Co-ordinator,", "Inventory"],
//     imageQuery: "Mrs. Sanjukta Das portrait",
//     imageUrl: "/committee/Group 1171275684.png",
//   },
// ];

// type PujoCommitteeProps = {
//   className?: string;
// };

// export function PujoCommittee({ className }: PujoCommitteeProps) {
//   return (
//     <section className={cn("space-y-6", className)}>
//       <header className="flex flex-col gap-2">
//         <h2 className="text-3xl font-semibold text-[color:var(--brand-text)] text-balance">
//           Pujo Committee 2025
//         </h2>
//       </header>
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {committeeMembers.map((member) => {
//           const imageSrc = member.imageUrl;
//           return (
//             <article
//               key={member.name}
//               className="flex items-start gap-4  border border-[color:var(--brand-muted)] bg-background p-4 shadow-sm"
//             >
//               <Image
//                 src={imageSrc || "/placeholder.svg"}
//                 alt={`${member.name} portrait`}
//                 width={96}
//                 height={96}
//                 className="h-24 w-24  object-cover"
//               />
//               <div className="space-y-1">
//                 <p className="text-lg font-semibold text-[color:var(--brand-text)] text-pretty">
//                   {member.name}
//                 </p>
//                 {member.description.map((line) => (
//                   <p
//                     key={line}
//                     className="text-sm text-[color:var(--brand-text)] opacity-80 text-pretty"
//                   >
//                     {line}
//                   </p>
//                 ))}
//               </div>
//             </article>
//           );
//         })}
//       </div>
//       <p className="text-xs leading-relaxed text-[color:var(--brand-text)] opacity-70">
//         Please note: This list is compiled in the guidance &amp; advice of the
//         concerned committee co-ordinator. If you find any discrepancy, please
//         know it is probably an unintentional error.
//       </p>
//     </section>
//   );
// }

/////////////////////////////////////////////////////////////////////

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
    name: "Mr. Sanjoy Das",
    description: [
      "I am a chartered accountant & a chartered secretary by profession and living in SA for over 2 decades with his wife Rini and two young children. Sanjoy runs finance team of a mining group in SA. He is an active BASA member and one of the founder teacher of Kisholoy.",
    ],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/teachers/Rectangle 457 (1).svg",
  },
  {
    name: "Mrs. Annapurna Hazra Ghosh",
    description: [
      "I began the journey of Kisholoy to nurture Bengali language, culture, art, and music among BASA’s children. Now active across South Africa, Kisholoy reflects my passion for promoting Bangla heritage. A Statistician at WITS and long-time Johannesburg resident, I value collaboration and community building.",
    ],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/teachers/Rectangle 457 (2).svg",
  },
  {
    name: "Mrs. Rini Sarkar",
    description: [
      " Im a postgraduate in Bengali Literature, lived in South Africa for nearly two decades with my husband, Sanjoy Das, and my two children. A homemaker and active BASA member, I am  also a founding teacher of BASA’s Bangla class, Kisholoy.",
    ],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/teachers/Rectangle 457 (3).svg",
  },
  {
    name: " Mrs. Jayashree Mitra",
    description: [
      "Jayashhree Mitra is a seasoned Chartered Accountant and Company Secretary with 17 years of professional experience. She has recently relocated to South Africa. In her free time, Jayashhree enjoys gardening and traveling, showcasing her passion for nature and exploration. She is a hardcore Bengali at heart and thought..",
    ],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/teachers/Group 1171275683.svg",
  },
  {
    name: "Mrs. Sayantani Chatterjee",
    description: [
      "A post graduate (Masters in Bengali  literature), Sayantani is an administrative professional who has been living in South Africa since 2010. She resides with her husband Anindya Chatterji and three children. She is an active member of BASA and She is one of the teacher in BASA Bangla class (Kisholoy)",
    ],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/teachers/Rectangle 457 (4).svg",
  },
  {
    name: "Mrs. Sikha Bhattacharya",
    description: [
      "A teacher passionate about mother tongue education, sees it as a vital tool for improving learning, enhancing confidence and ensuring the preservation of cultural heritage and identity.Believes in fostering cognitive benefits, building pride and strengthening family and community bond through the mother tongue.",
    ],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/teachers/Rectangle 457 (5).svg",
  },
  {
    name: "Mrs. Madhumita Bhattacharya",
    description: [
      "Madhumita Bhattacharya, a Post Graduate (MBA) with prior experience in administration, has been living in South Africa since 2019 with her husband, (Avik Debnath) and their child. Currently a homemaker, she is an active member of BASA and a teacher at BASA’s Bangla class, (Kisholoy). She enjoys teaching Bangla to children growing up abroad, helping them stay connected to their mother tongue and cultural roots.",
    ],
    imageQuery: "Mrs. Sudeshna Ghatak portrait",
    imageUrl: "/teachers/Rectangle 457 (6).svg",
  },
  {
    name: "Mr. Dipanjan Chaudhuri",
    description: [
      "Dipanjan is an IT professional and living in Johannesburg for more than 8 years now. He is married with Sanchari and having a son Drishan. He is a BASA member and one of the teachers in Kisholoy. As a teacher handling such small kids is not an easy job for me but with the help of other teachers gradually am getting into it so it's a learning for me as well",
    ],
    imageQuery: "Mrs. Annapurna Hazra portrait",
    imageUrl: "/teachers/Rectangle 457 (7).svg",
  },
  // ... rest of the members
];

type PujoCommitteeProps = {
  className?: string;
};

function ProfileCard({ member }: { member: CommitteeMember }) {
  return (
    <div className="flex max-w-md items-start gap-4  bg-white p-4 ">
      {/* Left: Image */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden ">
        <Image
          src={member.imageUrl || "/placeholder.svg"}
          alt={`${member.name} portrait`}
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[color:var(--brand-text)] pb-4">
          {member.name}
        </h3>
        {member.description.map((line) => (
          <p
            key={line}
            className="text-sm text-[color:var(--brand-text)] opacity-80 pr-8"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Teachers({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)} id="teachers">
      <header className="flex flex-col gap-2">
        <h3 className="text-xl font-noto-sans font-semibold text-[color:var(--brand-text)] text-balance">
          Know Our Teachers
        </h3>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {committeeMembers.map((member) => (
          <ProfileCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
