// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   {
//     src: "/images/image 116.svg",
//     alt: "Bengali School Image 1",
//   },
//   {
//     src: "/images/dummy-2.jpg",
//     alt: "Bengali School Image 2",
//   },
//   {
//     src: "/images/dummy-3.jpg",
//     alt: "Bengali School Image 3",
//   },
// ];

// export function HeroImage() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-advance slides every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setActiveIndex((current) => (current + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((current) => (current - 1 + images.length) % images.length);
//   };

//   const goToSlide = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="relative max-w-full overflow-hidden">
//       <figure className="border border-[color:var(--brand-muted)] bg-background">
//         <div className="relative overflow-hidden w-full">
//           {/* Navigation Buttons */}

//           {/* Images */}
//           <div
//             className="flex w-full transition-transform duration-500 ease-out"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             <div className="flex w-full flex-nowrap">
//               {images.map((image, index) => (
//                 <div key={index} className="w-full flex-none">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     width={700}
//                     height={360}
//                     className="h-[480px] w-full object-cover object-top"
//                     priority={index === 0}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </figure>

//       {/* Navigation Dots */}
//       <div className="mt-6">
//         <div className="flex justify-center gap-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={[
//                 "h-2.5 w-2.5 rounded-full transition-colors",
//                 index === activeIndex
//                   ? "bg-[color:var(--brand-primary)]"
//                   : "bg-[color:var(--brand-muted)] hover:bg-[color:var(--brand-muted-hover)]",
//               ].join(" ")}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/Home Page -Carousel Image 1.png",
    alt: "Bengali School Image 1",
  },
  {
    src: "/images/Home Page -Carousel Image 2.png",
    alt: "Bengali School Image 2",
  },
  {
    src: "/images/Home Page -Carousel Image 3.png",
    alt: "Bengali School Image 3",
  },
];

export default function HeroImage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveIndex((i) => (i + 1) % images.length);
  const prevSlide = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goToSlide = (index: number) => setActiveIndex(index);

  // Track width is N * 100% so we must translate by (100 / N)% per slide
  const trackWidth = images.length * 100; // percent
  const translatePercentage = activeIndex * (100 / images.length);

  return (
    <div className="relative w-full overflow-hidden">
      <figure className="border border-[color:var(--brand-muted)] bg-background">
        <div className="w-full overflow-hidden">
          {/* Track: width = images.length * 100% */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(-${translatePercentage}%)`,
            }}
          >
            {images.map((image, idx) => (
              // Each slide must take (100 / N)% of the track so it equals 100% of the viewport
              <div
                key={idx}
                className="flex-none"
                style={{ width: `${100 / images.length}%` }}
              >
                {/* Use Image with `fill` so it scales to parent and doesn't introduce intrinsic width overflow */}
                <div className="relative h-[480px] w-full select-none">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    priority={idx === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </figure>

      {/* Prev / Next controls (optional) */}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm hover:bg-white"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm hover:bg-white"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex
                ? "bg-[color:var(--brand-primary)]"
                : "bg-[color:var(--brand-muted)] hover:bg-[color:var(--brand-muted-hover)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
