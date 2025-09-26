// "use client";

// import { BreadcrumbTrail } from "../durga/breadcrumb-trail";
// import { DurgaScheduleFigure } from "../durga/schedule-figure";
// import { PujoCommittee } from "../durga/puj--committee";
// import { BongoUtsav } from "../durga/bongo-utsav";
// // import { Hero } from "./hero";
// import ProfileCard from "./exco-card";

// const breadcrumbItems = [
//   { label: "Home", href: "#" },
//   { label: "Bengali Culture", href: "#" },
//   { label: "Talent & Culture", current: true },
// ];

// export function ExcoBody() {
//   const users = [
//     {
//       name: "Mr. Gourish Chakravorty",
//       title: "President",
//       image: "/exco/Rectangle 457 (9).svg",
//       description:
//         "A Probashi Bangali from Delhi and Mumbai, he has lived in South Africa since 2008. He leads a joint venture in water and environmental management and serves on the Advisory Board of the University of Pretoria EBIT and Chemical Engineering. With his wife, Chandra, and daughter, Gayatri, he remains deeply engaged in community work. A former President of BASA and the India Club, he is committed to strengthening BASA and building closer ties with other communities.",
//     },
//     {
//       name: " Mr. Parikhit Moitra",
//       title: "Vice President",
//       image: "/exco/Rectangle 457 (10).svg",
//       description:
//         "Mr. Parikshit Moitra became a member of BASA in 2018. Known as a man of action rather than words, he has previously served on the BASA Executive Committee twice and remains dedicated to taking on responsibilities. Actively involved in most of the festivals organized by BASA, he is eager to contribute further by serving the association and strengthening its impact.",
//     },
//     {
//       name: "Mr. Sandipan Das",
//       title: "General Secretory",
//       image: "/exco/Rectangle 457 (11).svg",
//       description:
//         "Mr. Sandipan Das has been residing in South Africa since 2011 and is currently employed at Amdocs. He is passionate about tennis, motorcycles, and braai, and has a deep appreciation for good food and music. Being a long-time member of BASA, he feels that he has been a beneficiary but now seeks to contribute actively to this esteemed organization. As a Bengali who has never lived in Bengal, he understands the significance of staying connected to one's roots, regardless of location. Through this opportunity, he aims to preserve and promote the rich cultural heritage of Bengal for future generations in South Africa.",
//     },
//     {
//       name: "Mr. Gourish Chakravorty",
//       title: "President",
//       image: "/exco/Rectangle 457 (12).svg",
//       description:
//         "A self-described Probashi Bangali from Delhi and Mumbai, he has been residing in South Africa since 2008. He leads a joint venture between Ion Exchange India and Safic, a South African company specializing in water and environmental management. He is also a member in the Advisory Board in the University of Pretoria EBIT and Chemical Engineering. His family includes his wife, Chandra, and their only daughter, Gayatri.",
//     },
//     {
//       name: "Dr. Sarah Mitchell",
//       title: "Chief Technology Officer",
//       image: "/exco/Rectangle 457 (13).svg",
//       description:
//         "A pioneering technologist with over 15 years of experience in artificial intelligence and machine learning. She has led multiple successful product launches and holds several patents in the field of computer vision. Sarah is passionate about using technology to solve real-world problems and mentoring the next generation of engineers.",
//     },
//     {
//       name: "Mr. James Rodriguez",
//       title: "VP of Operations",
//       image: "/exco/Rectangle 457 (14).svg",
//       description:
//         "An operational excellence expert who has transformed organizations across three continents. James specializes in lean manufacturing, supply chain optimization, and team development. He holds an MBA from Wharton and has been recognized as 'Operations Leader of the Year' twice in his career.",
//     },
//     {
//       name: "Mr. Gourish Chakravorty",
//       title: "President",
//       image: "/exco/Rectangle 457 (15).svg",
//       description:
//         "A self-described Probashi Bangali from Delhi and Mumbai, he has been residing in South Africa since 2008. He leads a joint venture between Ion Exchange India and Safic, a South African company specializing in water and environmental management. He is also a member in the Advisory Board in the University of Pretoria EBIT and Chemical Engineering. His family includes his wife, Chandra, and their only daughter, Gayatri.",
//     },
//     {
//       name: "Dr. Sarah Mitchell",
//       title: "Chief Technology Officer",
//       image: "/exco/Rectangle 457 (16).svg",
//       description:
//         "A pioneering technologist with over 15 years of experience in artificial intelligence and machine learning. She has led multiple successful product launches and holds several patents in the field of computer vision. Sarah is passionate about using technology to solve real-world problems and mentoring the next generation of engineers.",
//     },
//     {
//       name: "Mr. James Rodriguez",
//       title: "VP of Operations",
//       image: "/exco/Rectangle 457 (18).svg",
//       description:
//         "An operational excellence expert who has transformed organizations across three continents. James specializes in lean manufacturing, supply chain optimization, and team development. He holds an MBA from Wharton and has been recognized as 'Operations Leader of the Year' twice in his career.",
//     },
//     {
//       name: "Mr. Gourish Chakravorty",
//       title: "President",
//       image: "/exco/Rectangle 458.svg",
//       description:
//         "A self-described Probashi Bangali from Delhi and Mumbai, he has been residing in South Africa since 2008. He leads a joint venture between Ion Exchange India and Safic, a South African company specializing in water and environmental management. He is also a member in the Advisory Board in the University of Pretoria EBIT and Chemical Engineering. His family includes his wife, Chandra, and their only daughter, Gayatri.",
//     },
//   ];
//   return (
//     <div className="flex flex-col gap-5">
//       <header className="flex flex-col gap-2">
//         <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>

//         <h1 className="text-2xl font-semibold text-[color:var(--brand-text)] text-balance">
//           BASA Executive Committee 2025-26
//         </h1>
//       </header>

//       {/* <DurgaScheduleFigure /> */}

//       <div className="mt-8">
//         <div className="grid gap-8 md:grid-cols-2">
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             The new Executive Committee (EXCO) of the Bengali Association of
//             South Africa was elected in February 2025 through a transparent
//             member voting process, overseen by Election Commissioner Mrs.
//             Annapurna Hazra. A total of nine EXCO members were chosen to lead
//             the association into its next chapter of growth and community
//             service.
//           </p>
//           <p className="text-pretty text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
//             Mission Statement from the EXCO : “We, the Executive Committee of
//             BASA, are committed to preserving and promoting the cultural
//             heritage of Bengal, fostering inclusivity, and strengthening the
//             bonds of our community in South Africa. Through cultural programs,
//             social initiatives, and collective participation, we aim to create a
//             vibrant, united, and welcoming space for present and future
//             generations.”
//           </p>
//         </div>
//       </div>
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 pt-8">
//         {users.map((user, index) => (
//           <ProfileCard key={index} user={user} />
//         ))}
//       </div>
//       {/* <Hero className="mt-12" /> */}
//     </div>
//   );
// }

/////////////////////////

"use client";

import { BreadcrumbTrail } from "../durga/breadcrumb-trail";

// import { Hero } from "./hero";
import ProfileCard from "./exco-card";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Bengali Culture", href: "/performing-art" },
  { label: "Talent & Culture", current: true },
];

export function ExcoBody() {
  const users = [
    {
      name: "Mr. Gourish Chakravorty",
      title: "President",
      image: "/exco/Rectangle 457 (9).svg",
      description:
        "A Probashi Bangali from Delhi and Mumbai, he has lived in South Africa since 2008. He leads a joint venture in water and environmental management and serves on the Advisory Board of the University of Pretoria EBIT and Chemical Engineering. With his wife, Chandra, and daughter, Gayatri, he remains deeply engaged in community work. A former President of BASA and the India Club, he is committed to strengthening BASA and building closer ties with other communities.",
    },
    {
      name: " Mr. Parikhit Moitra",
      title: "Vice President",
      image: "/exco/Rectangle 457 (10).svg",
      description:
        "Mr. Parikshit Moitra became a member of BASA in 2018. Known as a man of action rather than words, he has previously served on the BASA Executive Committee twice and remains dedicated to taking on responsibilities. Actively involved in most of the festivals organized by BASA, he is eager to contribute further by serving the association and strengthening its impact.",
    },
    {
      name: "Mr. Sandipan Das",
      title: "General Secretory",
      image: "/exco/Rectangle 457 (11).svg",
      description:
        "Mr. Sandipan Das has been residing in South Africa since 2011 and is currently employed at Amdocs. He is passionate about tennis, motorcycles, and braai, and has a deep appreciation for good food and music. Being a long-time member of BASA, he feels that he has been a beneficiary but now seeks to contribute actively to this esteemed organization. As a Bengali who has never lived in Bengal, he understands the significance of staying connected to one's roots, regardless of location. Through this opportunity, he aims to preserve and promote the rich cultural heritage of Bengal for future generations in South Africa.",
    },
    {
      name: "Mrs. Sayantani Chatterjee",
      title: "Executive Committee Member",
      image: "/exco/Rectangle 457 (12).svg",
      description:
        "Mrs. Sayantani Chatterjee is a friendly, and creative individual with a passion for poetry, singing, and social work. Since moving to Joburg in 2016, she became a proud member of BASA in 2023 and has cherished celebrating Durga Pujo and other cultural events, bringing the spirit of Kolkata to Joburg. With a strong commitment to community development, Sayantani is excited to contribute as part of the Exco team, striving to serve with integrity, transparency, and compassion",
    },
    {
      name: "Mrs. Mahua Basu",
      title: "Cultural Secretary",
      image: "/exco/Rectangle 457 (13).svg",
      description:
        "Mahua Basu, originally from Behala, Kolkata, has been residing in Johannesburg since April 2022. With over 14 years of experience in the FMCG sector,she works as a certified Food Safety Auditor.She finds joy in life’s simple pleasures—whether it’s immersing herself in books, exploring new destinations through travel, or experimenting with new recipes in the kitchen. Spending quality time with family, sharing stories, and enjoying meals together are moments she cherishes. Her passion for learning, discovering diverse cultures, and creating flavorful dishes keeps her engaged and inspired. Now serving her second term as a part of BASA EXCO,she looks forward to learning, growing,and making meaningful contributions with the support of the BASA community ",
    },
    {
      name: "Mr. Jayashree Mitra",
      title: "Treasurer",
      image: "/exco/Rectangle 457 (14).svg",
      description:
        "As a Chartered Accountant and a passionate Bengali at heart, Jayashree is a dynamic and enthusiastic individual dedicated to societal causes. Following a 15-year career, she took a break and is currently residing in SA. She enjoys traveling, exploring new destinations, and has a keen interest in photography, painting, and studying ancient texts. After taking a break from her demanding career, BASA provided a welcoming environment that helped her connect with this foreign land and celebrate her cultural heritage. With her accounting expertise, Jayashree can play a valuable role in supporting BASA’s financial stability by helping maintain a healthy balance between member contributions, funds received and expenses. In addition to treasury functions, she is keen to participate in BASA's cultural programmes",
    },
    {
      name: "Mr. Siddhartha Sen",
      title: "Executive Committee Member",
      image: "/exco/Rectangle 457 (18).svg",
      description:
        "Originally from Kolkata, Siddhartha came to South Africa in 1994 with his parents and grew up in Durban. He relocated to Johannesburg in 2013 and is involved in the insurance industry and logistics. His wife Candice is from South Africa and is a home executive. They have been married for 8 years and have a 7-year-old daughter named Shona. Siddhartha is inspired to join the BASA Executive Committee because of the deep sense of community it fosters, aligning with his Bengali heritage and cultural identity. As a team player, he is eager to contribute meaningfully, adding value to our beloved association.",
    },
    {
      name: "Mr. Vishal Vishwas",
      title: "Executive Committee Member",
      image: "/exco/Rectangle 457 (16).svg",
      description:
        "As software professional, he has been working in the banking domain for the past 17 years. Since 2019, he has been residing in Johannesburg with his wife and son.An outdoor enthusiast, he enjoys traveling through the countryside, hosting braais, and experimenting with cooking. His association with BASA began in 2019, the year he moved to South Africa. His motivation for joining BASA was to stay connected to his cultural roots and pass on its essence to his 7-year-old child. He looks forward to contributing to BASA's mission of fostering a community enriched by culture, music, arts, festivities, and social welfare.",
    },
    ,
  ];

  const userone = [
    {
      name: "Mrs. Annapurna Hazra Ghosh",
      title: "Election Commissioner 2025",
      image: "/committee/annapurna.png",
      description:
        "I began the journey of Kisholoy with the dream of nurturing the essence of Bengali language, culture, art, and music among the children of BASA. With this dynamic team, Kisholoy has spread its wings across South Africa and beyond. By profession, I am a Statistician and teach at WITS University. Over the past 21 years, I have lived in several cities across South Africa, and since 2016 my family has made Johannesburg our home, with BASA being an integral part. I enjoy working collaboratively and contributing to larger community goals. As a devoted admirer of my Bengali roots and heritage, I remain deeply passionate about promoting Bangla among younger generations and communities.",
    },
  ];

  return (
    <div className="w-full">
      {/* Main container with responsive padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-4 sm:py-6 lg:py-8">
          <header className="flex flex-col gap-3 sm:gap-4">
            <div className="px-1">
              <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>
            </div>

            <h1 className="px-1 text-xl sm:text-2xl lg:text-3xl font-semibold text-[color:var(--brand-text)] text-balance">
              BASA Executive Committee 2025-26
            </h1>
          </header>

          {/* <DurgaScheduleFigure /> */}

          <div className="mt-4 sm:mt-6 lg:mt-8 px-1">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <p className="text-pretty text-sm sm:text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
                The new Executive Committee (EXCO) of the Bengali Association of
                South Africa was elected in February 2025 through a transparent
                member voting process, overseen by Election Commissioner Mrs.
                Annapurna Hazra. A total of nine EXCO members were chosen to
                lead the association into its next chapter of growth and
                community service.
              </p>
              <p className="text-pretty text-sm sm:text-base leading-relaxed text-[color:var(--brand-text)] opacity-85">
                Mission Statement from the EXCO : &quot;We, the Executive
                Committee of BASA, are committed to preserving and promoting the
                cultural heritage of Bengal, fostering inclusivity, and
                strengthening the bonds of our community in South Africa.
                Through cultural programs, social initiatives, and collective
                participation, we aim to create a vibrant, united, and welcoming
                space for present and future generations.&quot;
              </p>
            </div>
          </div>

          {/* Profile cards grid with improved responsiveness */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 pt-6 sm:pt-8">
            {users.map((user, index) => (
              <ProfileCard key={index} user={user} />
            ))}
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 pt-6 sm:pt-8 border-t border-gray-300">
            {userone.map((user, index) => (
              <ProfileCard key={index} user={user} />
            ))}
          </div>

          {/* <Hero className="mt-12" /> */}
        </div>
      </div>
    </div>
  );
}
