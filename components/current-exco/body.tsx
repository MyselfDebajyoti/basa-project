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
import { DurgaScheduleFigure } from "../durga/schedule-figure";
import { PujoCommittee } from "../durga/puj--committee";
import { BongoUtsav } from "../durga/bongo-utsav";
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
      name: "Mr. Gourish Chakravorty",
      title: "President",
      image: "/exco/Rectangle 457 (12).svg",
      description:
        "A self-described Probashi Bangali from Delhi and Mumbai, he has been residing in South Africa since 2008. He leads a joint venture between Ion Exchange India and Safic, a South African company specializing in water and environmental management. He is also a member in the Advisory Board in the University of Pretoria EBIT and Chemical Engineering. His family includes his wife, Chandra, and their only daughter, Gayatri.",
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief Technology Officer",
      image: "/exco/Rectangle 457 (13).svg",
      description:
        "A pioneering technologist with over 15 years of experience in artificial intelligence and machine learning. She has led multiple successful product launches and holds several patents in the field of computer vision. Sarah is passionate about using technology to solve real-world problems and mentoring the next generation of engineers.",
    },
    {
      name: "Mr. James Rodriguez",
      title: "VP of Operations",
      image: "/exco/Rectangle 457 (14).svg",
      description:
        "An operational excellence expert who has transformed organizations across three continents. James specializes in lean manufacturing, supply chain optimization, and team development. He holds an MBA from Wharton and has been recognized as 'Operations Leader of the Year' twice in his career.",
    },
    {
      name: "Mr. Gourish Chakravorty",
      title: "President",
      image: "/exco/Rectangle 457 (15).svg",
      description:
        "A self-described Probashi Bangali from Delhi and Mumbai, he has been residing in South Africa since 2008. He leads a joint venture between Ion Exchange India and Safic, a South African company specializing in water and environmental management. He is also a member in the Advisory Board in the University of Pretoria EBIT and Chemical Engineering. His family includes his wife, Chandra, and their only daughter, Gayatri.",
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief Technology Officer",
      image: "/exco/Rectangle 457 (16).svg",
      description:
        "A pioneering technologist with over 15 years of experience in artificial intelligence and machine learning. She has led multiple successful product launches and holds several patents in the field of computer vision. Sarah is passionate about using technology to solve real-world problems and mentoring the next generation of engineers.",
    },
    {
      name: "Mr. James Rodriguez",
      title: "VP of Operations",
      image: "/exco/Rectangle 457 (18).svg",
      description:
        "An operational excellence expert who has transformed organizations across three continents. James specializes in lean manufacturing, supply chain optimization, and team development. He holds an MBA from Wharton and has been recognized as 'Operations Leader of the Year' twice in his career.",
    },
    {
      name: "Mr. Gourish Chakravorty",
      title: "President",
      image: "/exco/Rectangle 458.svg",
      description:
        "A self-described Probashi Bangali from Delhi and Mumbai, he has been residing in South Africa since 2008. He leads a joint venture between Ion Exchange India and Safic, a South African company specializing in water and environmental management. He is also a member in the Advisory Board in the University of Pretoria EBIT and Chemical Engineering. His family includes his wife, Chandra, and their only daughter, Gayatri.",
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
                Mission Statement from the EXCO : "We, the Executive Committee
                of BASA, are committed to preserving and promoting the cultural
                heritage of Bengal, fostering inclusivity, and strengthening the
                bonds of our community in South Africa. Through cultural
                programs, social initiatives, and collective participation, we
                aim to create a vibrant, united, and welcoming space for present
                and future generations."
              </p>
            </div>
          </div>

          {/* Profile cards grid with improved responsiveness */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 pt-6 sm:pt-8">
            {users.map((user, index) => (
              <ProfileCard key={index} user={user} />
            ))}
          </div>

          {/* <Hero className="mt-12" /> */}
        </div>
      </div>
    </div>
  );
}
