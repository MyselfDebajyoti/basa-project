// "use client";

// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Full-Screen Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-[76px] left-0 w-full z-40 my-10">
//           <div
//             className={`bg-white w-full shadow-2xl transform transition-all duration-300 ease-out ${
//               isMenuOpen
//                 ? "translate-y-0 opacity-100"
//                 : "-translate-y-10 opacity-0"
//             }`}
//             style={{ height: "calc(100vh - 76px)" }}
//           >
//             {/* Close button */}
//             <div className="flex justify-end p-4">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 <X className="w-6 h-6" />
//               </Button>
//             </div>

//             {/* Menu content in columns */}
//             <div className="px-8 pb-8 h-full overflow-y-auto">
//               <div className="grid grid-cols-5 gap-8 h-full max-w-7xl mx-auto">
//                 {/* Our Story Column */}
//                 <div>
//                   <h3 className="text-red-600 font-bold text-lg mb-4 border-b border-red-200 pb-2">
//                     Our Story
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     <li>
//                       <a href="#" className="hover:text-red-600">
//                         History
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-red-600">
//                         Mission & Vision
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-red-600">
//                         Eminent Members
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-red-600">
//                         Patron Messages
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-red-600">
//                         Current Ex-Co
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Bengali Culture Column */}
//                 <div>
//                   <h3 className="text-green-600 font-bold text-lg mb-4 border-b border-green-200 pb-2">
//                     Bengali Culture
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">
//                         Festivals & Get Togethers
//                       </h4>
//                       <ul className="space-y-1 text-sm text-gray-700">
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Durga Puja
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Lokkhi Puja
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Kali Puja
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Saraswati Puja
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Dol-Utsav
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Bongotsav
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Annual Picnic
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">
//                         Talent & Culture
//                       </h4>
//                       <ul className="space-y-1 text-sm text-gray-700">
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Bengali School - Kshology
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Learning Grades
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Enrol in Kshology
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Know our Teachers
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">
//                         Performing Arts
//                       </h4>
//                       <ul className="space-y-1 text-sm text-gray-700">
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Dance
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Elocution
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Singing
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-green-600">
//                             Drama
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Events Column */}
//                 <div>
//                   <h3 className="text-blue-600 font-bold text-lg mb-4 border-b border-blue-200 pb-2">
//                     Events
//                   </h3>
//                   <div className="space-y-4">
//                     <ul className="space-y-2 text-sm text-gray-700">
//                       <li>
//                         <a href="#" className="hover:text-blue-600">
//                           Annual Event Calendar
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-blue-600">
//                           Upcoming Events
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-blue-600">
//                           RSVPs
//                         </a>
//                       </li>
//                     </ul>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">
//                         Media & Literature
//                       </h4>
//                       <ul className="space-y-1 text-sm text-gray-700">
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             E-Magazine Ramdhanu
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             Photo Archives
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             Print Media
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             TV Media
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">
//                         Social Media
//                       </h4>
//                       <ul className="space-y-1 text-sm text-gray-700">
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             Facebook
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             WhatsApp
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             Instagram
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-blue-600">
//                             Twitter
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Beyond BASA Column */}
//                 <div>
//                   <h3 className="text-yellow-600 font-bold text-lg mb-4 border-b border-yellow-200 pb-2">
//                     Beyond BASA
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     <li>
//                       <a href="#" className="hover:text-yellow-600">
//                         Outreach Programs
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-yellow-600">
//                         Sponsors & Partners
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-yellow-600">
//                         Sponsor List
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-yellow-600">
//                         Sponsorship Request
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-yellow-600">
//                         Enquiries
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:text-yellow-600">
//                         BASA Business Exchange
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Join BASA Column */}
//                 <div>
//                   <h3 className="text-purple-600 font-bold text-lg mb-4 border-b border-purple-200 pb-2">
//                     Join BASA
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     <li>
//                       <a href="#" className="hover:text-purple-600">
//                         Become a Member
//                       </a>
//                     </li>
//                   </ul>

//                   {/* Contact and Login at bottom */}
//                   <div className="mt-8 space-y-3">
//                     <div className="flex items-center space-x-2 text-sm text-gray-700">
//                       <span>📞</span>
//                       <a href="#" className="hover:text-purple-600">
//                         Contact us
//                       </a>
//                     </div>
//                     <div className="flex items-center space-x-2 text-sm text-gray-700">
//                       <span>🔐</span>
//                       <a href="#" className="hover:text-purple-600">
//                         ExCo Login
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header/Navbar */}
//       <header className="bg-white px-4 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="w-16 h-16 relative mr-3">
//               <Image
//                 src="/images/Screenshot 2025-09-23 052102.png"
//                 alt="BASA Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <div className="text-sm">
//               <div className="font-bold text-gray-800">BENGALI</div>
//               <div className="font-bold text-gray-800">ASSOCIATION OF</div>
//               <div className="font-bold text-gray-800">SOUTH AFRICA</div>
//               <div className="text-xs text-gray-600 mt-1">
//                 A NON-PROFIT ORGANISATION
//               </div>
//             </div>
//           </div>

//           {/* Navigation Menu */}
//           <nav className="hidden lg:flex items-center space-x-6 text-sm text-gray-700">
//             <a href="#" className="hover:text-gray-900">
//               Our Story
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               Durga Puja
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               Bengali School
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               Event Calendar
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               Social Responsibilities
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               Join BASA
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               Contact Us
//             </a>
//             <button
//               onClick={() => setIsMenuOpen(true)}
//               className="flex items-center space-x-2 hover:text-gray-900"
//             >
//               <span>More Menu</span>
//               <Menu className="w-4 h-4" />
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="sm"
//             className="lg:hidden"
//             onClick={() => setIsMenuOpen(true)}
//           >
//             <Menu className="w-5 h-5" />
//           </Button>
//         </div>
//       </header>

//       {/* Top Decorative Pattern */}
//       <div className="h-12 relative overflow-hidden">
//         <img
//           src="/images/Group 1171275754.png"
//           alt="Top decorative pattern"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Main Content */}
//       <main className="pt-10 px-4 pb-16">
//         <div className="max-w-7xl mx-auto text-center">
//           {/* Bengali Text */}
//           <h1 className="text-2xl md:text-4xl text-blue-600 font-medium mb-16">
//             বাঙালি ভাষার আলোর ঢেউ, বাঙালি হৃদয় তুমি...
//           </h1>

//           {/* Event Information */}
//           <div className="text-right mb-12 max-w-md ml-auto">
//             <div className="text-3xl font-bold text-red-600 mb-2">
//               3rd, 4th & 5th Oct
//             </div>
//             <div className="text-xl font-semibold text-gray-800 mb-1">
//               Shree Radhe Shyam
//             </div>
//             <div className="text-xl font-semibold text-gray-800 mb-3">
//               Mandir Complex, Sandton
//             </div>
//             <div className="text-base text-gray-600">
//               2 Gilla Crescent, Marlboro
//             </div>
//             <div className="text-base text-gray-600">
//               Gardens, Sandton, 2063
//             </div>
//           </div>

//           {/* Central Emblems - Much Larger */}
//           <div className="flex justify-center items-end space-x-8 lg:space-x-16">
//             {/* Left Emblem */}
//             <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
//               <Image
//                 src="/images/Group 1171275752 (1).png"
//                 alt="Sharadotsav 2025 Emblem"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>

//             {/* Center Emblem (Largest) */}
//             <div className="relative w-96 h-[500px] lg:w-[450px] lg:h-[600px]">
//               <Image
//                 src="/images/Group 1171275750 (1).png"
//                 alt="Maa Aaschen Emblem"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>

//             {/* Right Emblem */}
//             <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
//               <Image
//                 src="/images/Group 1171275752 (1).png"
//                 alt="Durga 2025 Emblem"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Cards Section - Get to the Buzz */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Title */}
//           <h2 className="text-3xl font-bold text-gray-800 mb-12 text-left">
//             Get to the Buzz.
//           </h2>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
//             {/* Card 1 - Durga Pujo 2025 */}
//             <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('/images/Group 1171275754.png')`,
//                 }}
//               ></div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

//               {/* Content */}
//               <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
//                 {/* Durga Pujo Logo */}
//                 <div className="flex items-start">
//                   <div className="text-left">
//                     <div className="text-blue-400 text-xl font-bold mb-1">
//                       শারদোৎসব
//                     </div>
//                     <div className="text-red-500 text-2xl font-bold">DURGA</div>
//                     <div className="text-red-500 text-2xl font-bold">PUJO</div>
//                     <div className="text-yellow-400 text-lg font-bold">
//                       2025
//                     </div>
//                     <div className="text-sm mt-2">3rd 4th 5th Oct</div>
//                     <div className="text-xs">Shree Radhe Shyam</div>
//                     <div className="text-xs">Mandir Complex, Sandton</div>
//                   </div>
//                 </div>

//                 {/* Bottom Text */}
//                 <div className="text-left">
//                   <div className="text-lg font-semibold">Upcoming</div>
//                   <div className="text-lg font-semibold">Events & RSVPs</div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 2 - Learn Bengali (Square Card) */}
//             <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
//               {/* Top Pattern */}
//               <div className="absolute top-0 left-0 w-full h-16">
//                 <img
//                   src="/images/Group 1171275754.png"
//                   alt="Top pattern"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Center Content Area */}
//               <div className="absolute top-16 left-0 right-0 bottom-16 bg-white flex flex-col justify-center items-center p-6">
//                 {/* Kshology Logo */}
//                 <div className="mb-6">
//                   <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
//                     <div className="text-white text-3xl font-bold">ক্ষ</div>
//                   </div>
//                 </div>

//                 {/* Kshology Text */}
//                 <div className="text-center mb-4">
//                   <div className="text-2xl font-bold mb-2">
//                     <span className="text-pink-500">কি</span>
//                     <span className="text-orange-400">শো</span>
//                     <span className="text-blue-500">ল</span>
//                     <span className="text-green-600">ম</span>
//                     <span className="text-purple-600">য়</span>
//                   </div>
//                 </div>

//                 {/* Description Text */}
//                 <div className="text-center text-xs text-gray-700 leading-tight">
//                   <div className="font-semibold mb-1">
//                     KISHOLOGY : A CENTER FOR BENGALI
//                   </div>
//                   <div className="font-semibold mb-1">
//                     LANGUAGE, CULTURE & GLOBAL TIES
//                   </div>
//                   <div className="font-medium">
//                     BY THE BENGALI ASSOCIATION OF SOUTH AFRICA
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Pattern with Overlay Text */}
//               <div className="absolute bottom-0 left-0 w-full h-16 relative">
//                 <img
//                   src="/images/Group 1171275754.png"
//                   alt="Bottom pattern"
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Overlay for text readability */}
//                 <div className="absolute inset-0 bg-black/60"></div>
//                 {/* Overlay Text */}
//                 <div className="absolute inset-0 flex items-center justify-center text-white text-center">
//                   <div>
//                     <div className="text-lg font-semibold">Learn Bengali</div>
//                     <div className="text-lg font-semibold">
//                       Language with us
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 3 - Join Community */}
//             <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
//               {/* Background Image - Community Photo */}
//               <img
//                 src="/images/Group 1171275745.png"
//                 alt="Join our vibrant community"
//                 className="block w-full h-auto"
//               />

//               {/* Overlay */}
//               {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
//                 {/* Bottom Text */}
//                 <div className="text-left">
//                   <div className="text-xl font-semibold">Join our Vibrant</div>
//                   <div className="text-xl font-semibold mb-7">
//                     Community. Be a Member
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bottom Decorative Pattern */}
//       <div className="h-12 relative overflow-hidden">
//         <img
//           src="/images/Group 1171275754.png"
//           alt="Bottom decorative pattern"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////

import type { CSSProperties } from "react";
import { BreadcrumbTrail } from "@/components/durga/breadcrumb-trail";
import { PujoSidebar } from "@/components/durga/pujo-sidebar";
import { PujoBody } from "@/components/durga/pujo-body";

const breadcrumbItems = [
  { label: "Home", href: "#" },
  { label: "Bengali Culture", href: "#" },
  { label: "Talent & Culture", current: true },
];

const sidebarItems = [
  { label: "Durga Pujo", href: "#", active: true },
  { label: "Lokhhi Pujo", href: "#" },
  { label: "Saraswati Pujo", href: "#" },
  { label: "Kali Pujo", href: "#" },
  { label: "Dol Utsav", href: "#" },
  { label: "Bongo Utsav", href: "#" },
  { label: "Annual Picnic", href: "#" },
  { label: "Back to Top", href: "#" },
];

const palette = {
  "--brand-primary": "#264653",
  "--brand-accent": "#e76f51",
  "--brand-text": "#1f2937",
  "--brand-muted": "#f1f5f9",
} as CSSProperties;

export default function Page() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-6xl py-12 md:py-16">
        <div style={palette} className="flex flex-col gap-8 md:gap-10">
          {/* <BreadcrumbTrail items={breadcrumbItems} /> */}
          <div className="flex flex-col gap-12 md:grid md:grid-cols-[200px_1fr] md:gap-14">
            <PujoSidebar items={sidebarItems} />
            <PujoBody />
          </div>
        </div>
      </section>
    </main>
  );
}
