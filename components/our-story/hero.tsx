// "use client";

// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { Wishes } from "./wishes";

// type BongoUtsavProps = {
//   className?: string;
// };

// export function Hero({ className }: BongoUtsavProps) {
//   const photos = [
//     "/images/Screenshot 2025-09-18 at 23.07.11 1.svg", // replace with actual paths
//     "/images/Screenshot 2025-09-18 at 23.08.21 1.svg",
//     "/images/Screenshot 2025-09-18 at 23.09.02 1.svg",
//     "/images/Screenshot 2025-09-18 at 23.10.17 1.svg",
//   ];
//   type CommitteeMember = {
//     name: string;
//     description: string[];
//     imageQuery: string;
//     imageUrl?: string;
//     position: string;
//     work: string[];
//   };
//   const committeeMembers: CommitteeMember[] = [
//     {
//       name: "Dr. Amitabh Mitra",
//       description: ["Physician, Poet, Artist"],
//       imageQuery: "Mrs. Sudeshna Ghatak portrait",
//       imageUrl: "/images/Rectangle 457 (8).svg",
//       position: "Member between 1994-2008",
//       work: ["Founding Leader of B.A.S.A"],
//     },
//   ];
//   return (
//     <section className={cn("space-y-6", className)}>
//       <header className="flex flex-col gap-2"></header>

//       <div>
//         <Image
//           src="/images/Group 1171275756.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-full w-full rounded-md object-cover"
//         />
//       </div>
//       <div className="grid gap-8 md:grid-cols-2">
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           The story of the Bengali Association of South Africa (BASA) began with
//           a heartfelt vision: to create a space where Bengalis could unite on
//           the foundation of language, culture, and tradition. For the Bengali
//           diaspora, far away from their ancestral homes, there was a deep need
//           for a platform that would celebrate their shared roots, preserve their
//           identity, and pass down the richness of Bengal’s heritage to future
//           generations. What started as small gatherings among families and
//           friends soon grew into a vibrant idea — a club that would represent
//           the spirit of Bengal for Bengalis across the world, right here in
//           South Africa.
//         </p>
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           A significant milestone came in 2007, when BASA hosted its first
//           public Durga Puja. The festival, central to Bengali culture, became a
//           turning point in uniting the community on a larger scale. It was more
//           than a religious celebration — it became an annual cultural highlight,
//           showcasing the music, dance, literature, food, and artistic
//           expressions of Bengal to the broader South African society. The Puja
//           created a tradition of togetherness that continues to grow stronger
//           every year, attracting not just Bengalis but friends from many other
//           communities who share in the joy and vibrancy of the celebrations.
//         </p>
//       </div>
//       <div className="grid gap-8 md:grid-cols-2">
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           This vision first took shape in 1994, with the formation of the
//           “Dokkhin Africa Bongo Shongothon (DABS).” It was the first organized
//           attempt to bring together the community under one umbrella, uniting
//           people through cultural events, festivals, and social engagement. Over
//           time, as the association grew in strength and reach, it redefined its
//           identity to better reflect its expanding role. In 2005, it was
//           formally renamed the Bengali Association of South Africa (BASA) — an
//           identity that continues to symbolize pride, belonging, and cultural
//           continuity.
//         </p>
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           Recognising the importance of building a sustainable foundation for
//           the future, BASA was officially registered as a Non-Profit Company in
//           2015. This step provided the association with the structure and
//           credibility to expand its activities, engage in wider cultural and
//           social projects, and strengthen its legacy. Today, BASA stands as a
//           beacon for the Bengali community in South Africa — a place where
//           traditions meet modern aspirations, where cultural pride blends with
//           inclusivity, and where the journey that began in 1994 continues to
//           inspire generations.
//         </p>
//       </div>

//       <div className="mt-8 pt-8">
//         <Image
//           src="/images/Group 1171275736.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[500px] w-full rounded-md object-contain"
//         />
//       </div>

//       <div className="grid gap-8 md:grid-cols-2">
//         <Image
//           src="/images/WhatsApp Image 2025-09-16 at 05.28.59.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//         <Image
//           src="/images/WhatsApp Image 2025-09-16 at 05.29.00 (2).svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//       </div>
//       <div className="grid gap-8 md:grid-cols-3">
//         <Image
//           src="/images/Screenshot 2025-09-18 at 22.57.27 1.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//         <Image
//           src="/images/Screenshot 2025-09-18 at 22.37.33 1.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//         <Image
//           src="/images/Screenshot 2025-09-18 at 22.36.46 1.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//       </div>
//       <div className="grid gap-8 md:grid-cols-2">
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           (Top Single) A literary piece in Bengali by Mr. Satyen Biswas, DGM,
//           Air India (Retd.), capturing the prelude to the formation of Dokkhin
//           Africa Bongo Songhothon (DABS)—the first NRI Bengali association in
//           South Africa, established in 1996
//         </p>
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           (Middle Row Right) On 15th August 1997, during India’s 50th
//           Independence Day celebrations, members of DABS led a choir of South
//           African children in singing “Jana Gana Mana,” the Indian National
//           Anthem, at the Indian Consulate, 1 Eton Road, Johannesburg
//         </p>
//       </div>
//       <div className="grid gap-8 md:grid-cols-2">
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           (Middle Row Left) A photograph of Madiba, the great Nelson Mandela
//           from the book of Chayanika Chakraborty, as seen by her in 1994. Now
//           residing in the UK, she was among the founding members of DABS.
//         </p>
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           (Bottom Row) Cover pages from the 2st, 3rd, and 4th Bijoya Sommeloni
//           —annual Dussera get-togethers organised by DABS in 1997, 1998, and
//           1999. The covers were hand-illustrated by DABS members, reflecting the
//           community’s creativity and spirit.
//         </p>
//       </div>
//       <section id="Mission">
//         <h3 className="text-2xl font-semibold text-[color:var(--brand-text)] text-balance">
//           Mision and Vision
//         </h3>
//         <div className="grid gap-8 md:grid-cols-2">
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             The Bengali Association of South Africa (BASA) is a dynamic cultural
//             and social organization committed to preserving and celebrating the
//             rich heritage of Bengal while embracing the vibrant diversity of
//             South Africa. We serve as a hub for Bengalis across the country,
//             creating a home away from home where traditions are cherished,
//             connections are nurtured, and culture thrives
//           </p>
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             At the same time, BASA proudly acknowledges the legacy of Nelson
//             Mandela, South Africa’s beloved statesman and Nobel Peace Prize
//             laureate. His lifelong struggle for justice, equality, and unity
//             reflects the very values that guide our community and strengthen our
//             mission of cultural exchange and inclusivity.
//           </p>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2">
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             Bengal, in the eastern part of the Indian subcontinent, is
//             celebrated for its literature, art, music, festivals, and cuisine.
//             It is the birthplace of world-renowned figures such as Rabindranath
//             Tagore — Nobel laureate, poet, philosopher, and humanist — whose
//             timeless works and universal message of love, peace, and harmony
//             continue to inspire people worldwide.
//           </p>
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             Through festivals, cultural programs, and social initiatives, BASA
//             showcases Bengali music, dance, literature, and art while fostering
//             dialogue with the wider South African community. From Durga and
//             Saraswati Puja to food festivals and cultural evenings, we keep our
//             heritage alive and build cultural bridges. We invite
//             everyone—Bengalis, friends, and the curious—to celebrate Bengal’s
//             spirit and South Africa’s diversity with us.
//           </p>
//         </div>
//       </section>
//       <div className="grid gap-8 md:grid-cols-2">
//         <Image
//           src="/images/Screenshot 2025-09-18 at 23.02.00.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//         <Image
//           src="/images/Screenshot 2025-09-18 at 23.02.09.svg"
//           alt="Dance performance at Bongo Utsav"
//           width={200}
//           height={140}
//           className="h-[450px] w-full rounded-md object-contain"
//         />
//       </div>
//       <div className="grid gap-8 md:grid-cols-2">
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           (Above) Two Hand-illustrated Ex-Co List of Dokkhin Africa Bongo
//           Songothon during the 90s.
//         </p>
//       </div>
//       <section id="patron-messages">
//         <Wishes />
//       </section>

//       <section id="eminent-members">
//         <h3 className="text-2xl font-semibold text-[color:var(--brand-text)] text-balance   pt-10">
//           Eminent Members of the Association
//         </h3>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//           {photos.map((src, idx) => (
//             <div
//               key={idx}
//               className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm"
//             >
//               <Image
//                 src={src}
//                 alt={`Old memories photo ${idx + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="grid gap-8 md:grid-cols-2">
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             (Top Row Left) Former Indian Mens Cricket Team Captain, Saurav
//             Ganguly, the Prince of Calcutta with team-mate & wicket-keeper
//             batsman, Saba Karim was hosted at their home by DABS members for a
//             dinner during their South Africa tour 1996-97
//           </p>
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             (Top Row Right) Former Indian Cricket team captain Mr. Sunil
//             Gavaskar and Mohinder Amarnath with DABS members in Johannesburg.
//           </p>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2">
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             (Bottom Row Left) DABS members with Mr. Shahrukh Khan in
//             Johannesburg.
//           </p>
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             (Bottom Row Right) DABS members in a cultural function
//           </p>
//         </div>
//       </section>

//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 pt-10">
//         {committeeMembers.map((member) => {
//           const imageSrc = member.imageUrl;
//           return (
//             <article
//               key={member.name}
//               className="flex items-start gap-4  bg-background p-4 pl-0 "
//             >
//               <Image
//                 src={imageSrc || "/placeholder.svg"}
//                 alt={`${member.name} portrait`}
//                 width={96}
//                 height={96}
//                 className="h-24 w-24  object-cover"
//               />
//               <div className="flex flex-col gap-4">
//                 <div className="space-y-1">
//                   <p className="text-lg font-semibold text-[color:var(--brand-text)] text-pretty">
//                     {member.name}
//                   </p>
//                   {member.description.map((line: string) => (
//                     <p
//                       key={line}
//                       className="text-sm text-[color:var(--brand-text)] opacity-80 text-pretty"
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-sm font-semibold text-[color:var(--brand-text)] text-pretty">
//                     {member.position}
//                   </p>
//                   {member.work.map((line: string) => (
//                     <p
//                       key={line}
//                       className="text-sm text-[color:var(--brand-text)] opacity-80 text-pretty"
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//       <div className="grid gap-8 md:grid-cols-2">
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//           Dr. Amitabh Mitra is an Indian-born South African physician, poet, and
//           artist who has lived in South Africa for over three decades. He
//           studied medicine and orthopaedic surgery in Gwalior, India, later
//           specializing in aerospace medicine at the University of Pretoria. A
//           trauma and orthopaedic surgeon, he currently serves at the Accident
//           and Emergency Unit of Cecilia Makiwane Hospital in Mdantsane.
//           Alongside his medical career, Dr. Mitra has published twelve volumes
//           of poetry and exhibited his poetry art internationally. His work,
//           deeply rooted in his childhood city of Gwalior, often blends painting
//           and verse, as seen in A Slow Train to Gwalior. His art and poetry have
//           been showcased in South Africa and India, and a documentary on his
//           Gwalior-inspired poetry was screened at the 2009 Grahamstown National
//           Arts Festival. He has represented South Africa at literary festivals,
//           including Oslo (2008) and Madibaland (2022), and was honored by the
//           Sahitya Akademi in New Delhi.
//         </p>
//         <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85 ">
//           Mitra’s medical journey has taken him across Bhutan, Arunachal
//           Pradesh, Zimbabwe, and finally South Africa. His experiences in
//           Bhutan’s high-altitude hospitals inspired poetry translated into
//           French, and he later chronicled life in Bulawayo’s townships during
//           political unrest. His more recent works, such as Mdantsane Breathing,
//           capture the spirit of the South African township where he practices
//           medicine. His contributions have been widely recognized: the Discovery
//           Foundation Award for Rural Research (2017), the Eastern Cape Minister
//           of Art and Culture’s Special Award for Fine Arts (2018), the SAPS
//           Provincial Commissioner’s Ambassador Award (2022), and the National
//           Arts Festival’s short film tribute to his fusion of art and medicine
//           (2021). In 2022, he also became the first English poet to receive the
//           Mukut Bihari Saroj Award in Gwalior. Beyond art and medicine, Mitra
//           has served as National Secretary General of the South African Foreign
//           Qualified Doctors’ Association, representing 3,800 professionals.
//           Listed among the 78 notable alumni of the University of Pretoria, his
//           career embodies a rare confluence of healing, art, and cultural
//           bridge-building.
//         </p>
//       </div>
//     </section>
//   );
// }

/////////////////////////////////////////////////////////////

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Wishes } from "./wishes";

type BongoUtsavProps = {
  className?: string;
};

export function Hero({ className }: BongoUtsavProps) {
  const photos = [
    "/images/Screenshot 2025-09-18 at 23.07.11 1.svg",
    "/images/Screenshot 2025-09-18 at 23.08.21 1.svg",
    "/images/Screenshot 2025-09-18 at 23.09.02 1.svg",
    "/images/Screenshot 2025-09-18 at 23.10.17 1.svg",
  ];

  type CommitteeMember = {
    name: string;
    description: string[];
    imageQuery: string;
    imageUrl?: string;
    position: string;
    work: string[];
  };

  const committeeMembers: CommitteeMember[] = [
    {
      name: "Dr. Amitabh Mitra",
      description: ["Physician, Poet, Artist"],
      imageQuery: "Mrs. Sudeshna Ghatak portrait",
      imageUrl: "/images/Rectangle 457 (8).svg",
      position: "Member between 1994-2008",
      work: ["Founding Leader of B.A.S.A"],
    },
  ];

  return (
    <section
      className={cn(
        "space-y-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto",
        className
      )}
    >
      <header className="flex flex-col gap-2"></header>

      {/* Top banner */}
      <div>
        <Image
          src="/images/Group 1171275756.svg"
          alt="Dance performance at Bongo Utsav"
          width={1200}
          height={600}
          className="w-full rounded-md object-cover max-h-[320px] sm:max-h-[450px] mx-auto"
        />
      </div>

      {/* Intro paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          The story of the Bengali Association of South Africa (BASA) began with
          a heartfelt vision: to create a space where Bengalis could unite on
          the foundation of language, culture, and tradition. For the Bengali
          diaspora, far away from their ancestral homes, there was a deep need
          for a platform that would celebrate their shared roots, preserve their
          identity, and pass down the richness of Bengal’s heritage to future
          generations. What started as small gatherings among families and
          friends soon grew into a vibrant idea — a club that would represent
          the spirit of Bengal for Bengalis across the world, right here in
          South Africa.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          A significant milestone came in 2007, when BASA hosted its first
          public Durga Puja. The festival, central to Bengali culture, became a
          turning point in uniting the community on a larger scale. It was more
          than a religious celebration — it became an annual cultural highlight,
          showcasing the music, dance, literature, food, and artistic
          expressions of Bengal to the broader South African society. The Puja
          created a tradition of togetherness that continues to grow stronger
          every year, attracting not just Bengalis but friends from many other
          communities who share in the joy and vibrancy of the celebrations.
        </p>
      </div>

      {/* History */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          This vision first took shape in 1994, with the formation of the
          “Dokkhin Africa Bongo Shongothon (DABS).” It was the first organized
          attempt to bring together the community under one umbrella, uniting
          people through cultural events, festivals, and social engagement. Over
          time, as the association grew in strength and reach, it redefined its
          identity to better reflect its expanding role. In 2005, it was
          formally renamed the Bengali Association of South Africa (BASA) — an
          identity that continues to symbolize pride, belonging, and cultural
          continuity.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Recognising the importance of building a sustainable foundation for
          the future, BASA was officially registered as a Non-Profit Company in
          2015. This step provided the association with the structure and
          credibility to expand its activities, engage in wider cultural and
          social projects, and strengthen its legacy. Today, BASA stands as a
          beacon for the Bengali community in South Africa — a place where
          traditions meet modern aspirations, where cultural pride blends with
          inclusivity, and where the journey that began in 1994 continues to
          inspire generations.
        </p>
      </div>

      {/* Large timeline image */}
      <div className="">
        <Image
          src="/images/Group 1171275736.svg"
          alt="Dance performance at Bongo Utsav"
          width={1200}
          height={500}
          className="w-full rounded-md object-contain max-h-[500px] sm:max-h-[600px] mx-auto"
        />
      </div>

      {/* Two-image gallery row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Image
          src="/images/WhatsApp Image 2025-09-16 at 05.28.59.svg"
          alt="Dance performance at Bongo Utsav"
          width={1200}
          height={800}
          className="w-full rounded-md object-contain max-h-[320px] sm:max-h-[450px] mx-auto"
        />
        <Image
          src="/images/WhatsApp Image 2025-09-16 at 05.29.00 (2).svg"
          alt="Dance performance at Bongo Utsav"
          width={1200}
          height={800}
          className="w-full rounded-md object-contain max-h-[320px] sm:max-h-[450px] mx-auto"
        />
      </div>

      {/* 3-up gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/images/Screenshot 2025-09-18 at 22.57.27 1.svg"
            alt="Dance performance at Bongo Utsav"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/images/Screenshot 2025-09-18 at 22.37.33 1.svg"
            alt="Dance performance at Bongo Utsav"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/images/Screenshot 2025-09-18 at 22.36.46 1.svg"
            alt="Dance performance at Bongo Utsav"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Two short descriptive paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          (Top Single) A literary piece in Bengali by Mr. Satyen Biswas, DGM,
          Air India (Retd.), capturing the prelude to the formation of Dokkhin
          Africa Bongo Songhothon (DABS)—the first NRI Bengali association in
          South Africa, established in 1996
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          (Middle Row Right) On 15th August 1997, during India’s 50th
          Independence Day celebrations, members of DABS led a choir of South
          African children in singing “Jana Gana Mana,” the Indian National
          Anthem, at the Indian Consulate, 1 Eton Road, Johannesburg
        </p>
      </div>

      {/* Two more descriptive paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          (Middle Row Left) A photograph of Madiba, the great Nelson Mandela
          from the book of Chayanika Chakraborty, as seen by her in 1994. Now
          residing in the UK, she was among the founding members of DABS.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          (Bottom Row) Cover pages from the 2st, 3rd, and 4th Bijoya Sommeloni
          —annual Dussera get-togethers organised by DABS in 1997, 1998, and
          1999. The covers were hand-illustrated by DABS members, reflecting the
          community’s creativity and spirit.
        </p>
      </div>

      {/* Mission and Vision */}
      <section id="Mission" className="space-y-6">
        <h3 className="text-2xl font-semibold text-[color:var(--brand-text)] text-balance">
          Mision and Vision
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            The Bengali Association of South Africa (BASA) is a dynamic cultural
            and social organization committed to preserving and celebrating the
            rich heritage of Bengal while embracing the vibrant diversity of
            South Africa. We serve as a hub for Bengalis across the country,
            creating a home away from home where traditions are cherished,
            connections are nurtured, and culture thrives
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            At the same time, BASA proudly acknowledges the legacy of Nelson
            Mandela, South Africa’s beloved statesman and Nobel Peace Prize
            laureate. His lifelong struggle for justice, equality, and unity
            reflects the very values that guide our community and strengthen our
            mission of cultural exchange and inclusivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Bengal, in the eastern part of the Indian subcontinent, is
            celebrated for its literature, art, music, festivals, and cuisine.
            It is the birthplace of world-renowned figures such as Rabindranath
            Tagore — Nobel laureate, poet, philosopher, and humanist — whose
            timeless works and universal message of love, peace, and harmony
            continue to inspire people worldwide.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            Through festivals, cultural programs, and social initiatives, BASA
            showcases Bengali music, dance, literature, and art while fostering
            dialogue with the wider South African community. From Durga and
            Saraswati Puja to food festivals and cultural evenings, we keep our
            heritage alive and build cultural bridges. We invite
            everyone—Bengalis, friends, and the curious—to celebrate Bengal’s
            spirit and South Africa’s diversity with us.
          </p>
        </div>
      </section>

      {/* Two screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Image
          src="/images/Screenshot 2025-09-18 at 23.02.00.svg"
          alt="Dance performance at Bongo Utsav"
          width={1200}
          height={800}
          className="w-full rounded-md object-contain max-h-[450px] mx-auto"
        />
        <Image
          src="/images/Screenshot 2025-09-18 at 23.02.09.svg"
          alt="Dance performance at Bongo Utsav"
          width={1200}
          height={800}
          className="w-full rounded-md object-contain max-h-[450px] mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          (Above) Two Hand-illustrated Ex-Co List of Dokkhin Africa Bongo
          Songothon during the 90s.
        </p>
      </div>

      {/* Patron messages */}
      <section id="patron-messages">
        <Wishes />
      </section>

      {/* Eminent Members */}
      <section id="eminent-members">
        <h3 className="text-2xl font-semibold text-[color:var(--brand-text)] text-balance pt-10">
          Eminent Members of the Association
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {photos.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm"
            >
              <Image
                src={src}
                alt={`Old memories photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            (Top Row Left) Former Indian Mens Cricket Team Captain, Saurav
            Ganguly, the Prince of Calcutta with team-mate & wicket-keeper
            batsman, Saba Karim was hosted at their home by DABS members for a
            dinner during their South Africa tour 1996-97
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            (Top Row Right) Former Indian Cricket team captain Mr. Sunil
            Gavaskar and Mohinder Amarnath with DABS members in Johannesburg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-2">
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            (Bottom Row Left) DABS members with Mr. Shahrukh Khan in
            Johannesburg.
          </p>
          <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
            (Bottom Row Right) DABS members in a cultural function
          </p>
        </div>
      </section>

      {/* Committee / Eminent member card(s) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
        {committeeMembers.map((member) => {
          const imageSrc = member.imageUrl;
          return (
            <article
              key={member.name}
              className="flex items-start gap-4 bg-background p-4 pl-0 rounded-md"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${member.name} portrait`}
                width={96}
                height={96}
                className="h-24 w-24 object-cover rounded-md"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-[color:var(--brand-text)] text-pretty">
                    {member.name}
                  </p>
                  {member.description.map((line: string) => (
                    <p
                      key={line}
                      className="text-sm text-[color:var(--brand-text)] opacity-80 text-pretty"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[color:var(--brand-text)] text-pretty">
                    {member.position}
                  </p>
                  {member.work.map((line: string) => (
                    <p
                      key={line}
                      className="text-sm text-[color:var(--brand-text)] opacity-80 text-pretty"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Final long bio text — kept exactly as your original */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
          Dr. Amitabh Mitra is an Indian-born South African physician, poet, and
          artist who has lived in South Africa for over three decades. He
          studied medicine and orthopaedic surgery in Gwalior, India, later
          specializing in aerospace medicine at the University of Pretoria. A
          trauma and orthopaedic surgeon, he currently serves at the Accident
          and Emergency Unit of Cecilia Makiwane Hospital in Mdantsane.
          Alongside his medical career, Dr. Mitra has published twelve volumes
          of poetry and exhibited his poetry art internationally. His work,
          deeply rooted in his childhood city of Gwalior, often blends painting
          and verse, as seen in A Slow Train to Gwalior. His art and poetry have
          been showcased in South Africa and India, and a documentary on his
          Gwalior-inspired poetry was screened at the 2009 Grahamstown National
          Arts Festival. He has represented South Africa at literary festivals,
          including Oslo (2008) and Madibaland (2022), and was honored by the
          Sahitya Akademi in New Delhi.
        </p>
        <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85 ">
          Mitra’s medical journey has taken him across Bhutan, Arunachal
          Pradesh, Zimbabwe, and finally South Africa. His experiences in
          Bhutan’s high-altitude hospitals inspired poetry translated into
          French, and he later chronicled life in Bulawayo’s townships during
          political unrest. His more recent works, such as Mdantsane Breathing,
          capture the spirit of the South African township where he practices
          medicine. His contributions have been widely recognized: the Discovery
          Foundation Award for Rural Research (2017), the Eastern Cape Minister
          of Art and Culture’s Special Award for Fine Arts (2018), the SAPS
          Provincial Commissioner’s Ambassador Award (2022), and the National
          Arts Festival’s short film tribute to his fusion of art and medicine
          (2021). In 2022, he also became the first English poet to receive the
          Mukut Bihari Saroj Award in Gwalior. Beyond art and medicine, Mitra
          has served as National Secretary General of the South African Foreign
          Qualified Doctors’ Association, representing 3,800 professionals.
          Listed among the 78 notable alumni of the University of Pretoria, his
          career embodies a rare confluence of healing, art, and cultural
          bridge-building.
        </p>
      </div>
    </section>
  );
}
