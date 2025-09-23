// // "use client";

// // import Head from "next/head";
// // import Image from "next/image";
// // import { useState } from "react";

// // export default function Home() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   return (
// //     <>
// //       <Head>
// //         <title>Bengali Association of South Africa</title>
// //         <meta
// //           name="description"
// //           content="Bengali Association of South Africa"
// //         />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <div className="min-h-screen bg-white">
// //         {/* Header */}
// //         <header className="bg-white shadow-sm relative z-50">
// //           <div className="max-w-7xl mx-auto px-4">
// //             <div className="flex items-center justify-between h-20">
// //               {/* Logo */}
// //               <div className="flex items-center space-x-3">
// //                 <div className="w-24 h-24 relative">
// //                   <Image
// //                     src="/images/General 1.svg"
// //                     alt="BASA Logo"
// //                     fill
// //                     className="object-contain"
// //                     priority
// //                   />
// //                 </div>
// //               </div>

// //               {/* Desktop Menu */}
// //               <nav className="hidden lg:flex items-center space-x-8">
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Our Story
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Durga Pujo
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Bengali School
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Event Calendar
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Social Responsibilities
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Join BASA
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Contact Us
// //                 </a>
// //               </nav>

// //               {/* Mobile Menu Button */}
// //               <div className="lg:hidden flex items-center space-x-4">
// //                 <span className="text-sm text-gray-700 font-medium">
// //                   More Menu
// //                 </span>
// //                 <button
// //                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //                   className="p-2"
// //                 >
// //                   <svg
// //                     className="w-6 h-6"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 12h16M4 18h16"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Mobile Menu */}
// //             {isMobileMenuOpen && (
// //               <div className="lg:hidden border-t">
// //                 <div className="px-4 py-2 space-y-1">
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Our Story
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Durga Pujo
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Bengali School
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Event Calendar
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Social Responsibilities
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Join BASA
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Contact Us
// //                   </a>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </header>

// //         {/* Main Content */}
// //         <main className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
// //           {/* Top Decorative Pattern */}
// //           <div className="relative w-full h-16">
// //             <Image
// //               src="/images/Screenshot 2025-09-22 051911.png"
// //               alt="Decorative Pattern"
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //           </div>

// //           {/* Hero Image Section */}
// //           <div className="relative w-full h-[610px] overflow-hidden  z-1">
// //             <Image
// //               src="/images/Group 1171275753 (1).png"
// //               alt="Durga Puja Celebration"
// //               fill
// //               className="object-cover "
// //               priority
// //             />
// //           </div>

// //           {/* Content */}

// //           {/* Bottom Decorative Pattern */}
// //           <div className="absolute bottom-0 w-full h-16 z-0">
// //             <Image
// //               src="/images/Screenshot 2025-09-22 051911.png"
// //               alt="Decorative Pattern"
// //               fill
// //               className="object-cover transform"
// //               priority
// //             />
// //           </div>
// //         </main>
// //       </div>
// //     </>
// //   );

// //   {
// //     /* Hero content */
// //   }
// //   <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
// //     <div className="mx-auto max-w-2xl text-center">
// //       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
// //         Welcome to Our Organization
// //       </h1>
// //       <p className="mt-6 text-lg leading-8 text-gray-600">
// //         Discover our vibrant community and get involved in exciting events and
// //         initiatives.
// //       </p>
// //       <div className="mt-10 flex items-center justify-center gap-x-6">
// //         <a
// //           href="/events"
// //           className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
// //         >
// //           Upcoming Events
// //         </a>
// //         <a
// //           href="/exco"
// //           className="text-sm font-semibold leading-6 text-gray-900"
// //         >
// //           Meet Our Team <span aria-hidden="true">→</span>
// //         </a>
// //       </div>
// //     </div>
// //   </div>;

// //   {
// //     /* Bottom gradient */
// //   }
// //   <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
// //     <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-200 to-blue-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
// //   </div>;
// // }

// /////////////////////////////////////////////////////////////////////

// // "use client";
// // import Head from "next/head";
// // import Image from "next/image";
// // import { useState } from "react";

// // export default function Home() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   return (
// //     <>
// //       <Head>
// //         <title>Bengali Association of South Africa</title>
// //         <meta
// //           name="description"
// //           content="Bengali Association of South Africa"
// //         />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <div className="min-h-screen bg-white">
// //         {/* Header */}
// //         <header className="bg-white shadow-sm relative z-50">
// //           <div className="max-w-7xl mx-auto px-4">
// //             <div className="flex items-center justify-between h-20">
// //               {/* Logo */}
// //               <div className="flex items-center space-x-3">
// //                 <div className="w-24 h-24 relative">
// //                   <Image
// //                     src="/logo.png"
// //                     alt="BASA Logo"
// //                     fill
// //                     className="object-contain"
// //                     priority
// //                   />
// //                 </div>
// //                 <div className="hidden sm:block">
// //                   <div className="text-gray-900 font-bold text-base leading-tight">
// //                     BENGALI
// //                     <br />
// //                     ASSOCIATION OF
// //                     <br />
// //                     SOUTH AFRICA
// //                   </div>
// //                   <div className="text-gray-600 text-xs mt-1">
// //                     A Non-Profit Organisation
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Desktop Menu */}
// //               <nav className="hidden lg:flex items-center space-x-8">
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Our Story
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Durga Pujo
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Bengali School
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Event Calendar
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Social Responsibilities
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Join BASA
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-700 hover:text-gray-900 text-sm font-medium"
// //                 >
// //                   Contact Us
// //                 </a>
// //               </nav>

// //               {/* Mobile Menu Button */}
// //               <div className="lg:hidden flex items-center space-x-4">
// //                 <span className="text-sm text-gray-700 font-medium">
// //                   More Menu
// //                 </span>
// //                 <button
// //                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //                   className="p-2"
// //                 >
// //                   <svg
// //                     className="w-6 h-6"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 12h16M4 18h16"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Mobile Menu */}
// //             {isMobileMenuOpen && (
// //               <div className="lg:hidden border-t">
// //                 <div className="px-4 py-2 space-y-1">
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Our Story
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Durga Pujo
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Bengali School
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Event Calendar
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Social Responsibilities
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Join BASA
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 text-gray-700 text-sm font-medium"
// //                   >
// //                     Contact Us
// //                   </a>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </header>

// //         {/* Main Section with Fixed Background */}
// //         <main
// //           className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
// //           style={{
// //             backgroundImage: 'url("/images/Group 1171275754.png")',
// //           }}
// //         >
// //           {/* White Container with 5rem margin top/bottom */}
// //           <div className=" py-5">
// //             <div className="bg-white mx-4 sm:mx-8 lg:mx-16 my-20 p-8 rounded-lg shadow-lg">
// //               {/* Hero Section Image */}
// //               <div className="w-full max-w-6xl mx-auto">
// //                 <Image
// //                   src="/images/Group 1171275753 (1).png"
// //                   alt="Durga Puja 2025 - Bengali Association of South Africa"
// //                   width={1200}
// //                   height={800}
// //                   className="w-full h-auto rounded-lg"
// //                   priority
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </>
// //   );
// // }

// //////////////////////////////////////////////////////////////////////////////////

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
//       <main className="pt-10 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Bengali Text */}
//           <h1 className="text-2xl md:text-3xl text-blue-600 font-medium mb-12">
//             বাঙালি ভাষার আলোর ঢেউ, বাঙালি হৃদয় তুমি...
//           </h1>

//           {/* Event Information */}
//           <div className="text-right mb-8 max-w-sm ml-auto">
//             <div className="text-2xl font-bold text-red-600 mb-1">
//               3rd, 4th & 5th Oct
//             </div>
//             <div className="text-lg font-semibold text-gray-800 mb-1">
//               Shree Radhe Shyam
//             </div>
//             <div className="text-lg font-semibold text-gray-800 mb-2">
//               Mandir Complex, Sandton
//             </div>
//             <div className="text-sm text-gray-600">
//               2 Gilla Crescent, Marlboro
//             </div>
//             <div className="text-sm text-gray-600">Gardens, Sandton, 2063</div>
//           </div>

//           {/* Central Emblems */}
//           <div className="flex justify-center items-center space-x-12 ">
//             {/* Left Emblem */}
//             <div className="relative w-48 h-80">
//               <Image
//                 src="/images/Group 1171275752 (1).png"
//                 alt="Sharadotsav 2025 Emblem"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>

//             {/* Center Emblem (Larger) */}
//             <div className="relative w-64 h-80">
//               <Image
//                 src="/images/Group 1171275750 (1).png"
//                 alt="Maa Aaschen Emblem"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>

//             {/* Right Emblem */}
//             <div className="relative w-48 h-60">
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

//       {/* Bottom Decorative Pattern */}
//       <div className="h-12 relative overflow-hidden">
//         <img
//           src="/images/Group 1171275754.png"
//           alt="Bottom decorative pattern"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Navigation Dots */}
//     </div>
//   );
// }

/////////////////////////////////////////////////////////

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Decorative Pattern */}
      <div className="h-12 relative overflow-hidden">
        <img
          src="/images/Group 1171275754.png"
          alt="Top decorative pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="pt-10 px-4 ">
        <div className="max-w-7xl mx-auto text-center">
          {/* Bengali Text */}
          <h1 className="text-2xl md:text-4xl text-blue-600 font-medium mb-8">
            বাঙালি ভাষার আলোর ঢেউ, বাঙালি হৃদয় তুমি...
          </h1>

          {/* Event Information */}
          <div className="text-right mb-12 max-w-md ml-auto">
            <div className="text-3xl font-bold text-red-600 mb-2">
              3rd, 4th & 5th Oct
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-1">
              Shree Radhe Shyam
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-3">
              Mandir Complex, Sandton
            </div>
            <div className="text-base text-gray-600">
              2 Gilla Crescent, Marlboro
            </div>
            <div className="text-base text-gray-600">
              Gardens, Sandton, 2063
            </div>
          </div>

          {/* Central Emblems - Much Larger */}
          <div className="flex justify-center items-end space-x-8 lg:space-x-16">
            {/* Left Emblem */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <Image
                src="/images/Group 1171275750 (1).png"
                alt="Sharadotsav 2025 Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Center Emblem (Largest) */}
            <div className="relative w-96 h-[500px] lg:w-[450px] lg:h-[600px]">
              <Image
                src="/images/Group 1171275750 (1).png"
                alt="Maa Aaschen Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Emblem */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <Image
                src="/images/Group 1171275750 (1).png"
                alt="Durga 2025 Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Decorative Pattern */}
      <div className="h-12 relative overflow-hidden ">
        <img
          src="/images/Group 1171275754.png"
          alt="Bottom decorative pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <section className=" py-16 px-4 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl  text-gray-800 mb-12 text-left">
            Get to the Buzz.
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1 - Durga Pujo 2025 */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/images/Group 1171275745.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Text */}
                <div className="text-left">
                  <div className="text-xl font-semibold">Join our Vibrant</div>
                  <div className="text-xl font-semibold mb-7">
                    Community. Be a Member
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Learn Bengali (Square Card) */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/images/Group 1171275745.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Text */}
                <div className="text-left">
                  <div className="text-xl font-semibold">Join our Vibrant</div>
                  <div className="text-xl font-semibold mb-7">
                    Community. Be a Member
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Join Community */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/images/Group 1171275745.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Text */}
                <div className="text-left">
                  <div className="text-xl font-semibold">Join our Vibrant</div>
                  <div className="text-xl font-semibold mb-7">
                    Community. Be a Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-16 px-4 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl  text-gray-800 mb-12 text-left">
            Get to the Buzz.
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1 - Durga Pujo 2025 */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/images/Group 1171275745.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Text */}
                <div className="text-left">
                  <div className="text-xl font-semibold">Join our Vibrant</div>
                  <div className="text-xl font-semibold mb-7">
                    Community. Be a Member
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Learn Bengali (Square Card) */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/images/Group 1171275745.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Text */}
                <div className="text-left">
                  <div className="text-xl font-semibold">Join our Vibrant</div>
                  <div className="text-xl font-semibold mb-7">
                    Community. Be a Member
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Join Community */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/images/Group 1171275745.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Text */}
                <div className="text-left">
                  <div className="text-xl font-semibold">Join our Vibrant</div>
                  <div className="text-xl font-semibold mb-7">
                    Community. Be a Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl  text-gray-800 mb-16 text-left">
            Our Partners
          </h2>

          {/* Partners Grid - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Travel Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Travel Partner
              </h3>
              <div className="flex flex-col space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <img
                    src="/icons/24hrs.svg"
                    alt="Travel Partner"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <img
                    src="/icons/quatar.svg"
                    alt="Qatar Airways"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Media Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Media Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/zee.svg"
                  alt="Zee Africa"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Banking Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Banking Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/sbi-bank.svg"
                  alt="SBI South Africa"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Breakfast Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Breakfast Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/kellogs.svg"
                  alt="Kellogg's"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Retail Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Retail Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/india-bazaar.svg"
                  alt="India Bazaar"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Partners Grid - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Sponsor */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Sponsor
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/Jindal Steel Logo 2025 1.svg"
                  alt="Jindal Steel"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Radio Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Radio Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/friendsfm.svg"
                  alt="Friends FM 91.9"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Television Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Television Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/rBangla.svg"
                  alt="R Bangla"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Branding Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Branding Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/min-design.svg"
                  alt="Min Design Studio"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* CSR Partner */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                CSR Partner
              </h3>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/icons/ibanita.svg"
                  alt="Imbanita"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl text-gray-800 mb-12 text-left">
            Latest Events
          </h2>

          {/* Facebook Post Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/FriendsFM919/videos/2898745130317631&show_text=false&width=500"
                width="100%"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency={true}
                allow="encrypted-media"
                title="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white py-12 mt-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/bengaliassociationsa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 relative"
            >
              <Image
                src="/icons/image 173.png"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bengaliassociationsa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 relative"
            >
              <Image
                src="/icons/image 175.png"
                alt="Instagram"
                fill
                className="object-contain"
              />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com/bengaliassocsa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 relative"
            >
              <Image
                src="/icons/image 174.png"
                alt="Twitter"
                fill
                className="object-contain"
              />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-600 text-sm">
            © Copyright Bengali Association of South Africa NPC 2025. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
