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
    src: "/images/image-3.png",
    alt: "Bengali School Image 2",
  },
  {
    src: "/images/image-2.png",
    alt: "Bengali School Image 3",
  },
];

export default function HeroImage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-advance slides every 10 seconds, stop at the end
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => {
        if (i < images.length - 1) {
          return i + 1;
        }
        return i; // Stay at last slide
      });
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex((i) => i + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
  };

  const goToSlide = (index: number) => setActiveIndex(index);

  const trackWidth = images.length * 100;
  const translatePercentage = activeIndex * (100 / images.length);

  return (
    <div className="relative w-full overflow-hidden">
      <figure className="max-w-[1920px] mx-auto">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(-${translatePercentage}%)`,
            }}
          >
            {images.map((image, idx) => (
              <div
                key={idx}
                className="flex-none"
                style={{ width: `${100 / images.length}%` }}
              >
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] xl:h-[720px] w-full select-none">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </figure>

      {/* Prev button - hidden when at first slide */}
      {activeIndex > 0 && (
        <button
          aria-label="Previous slide"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm hover:bg-white transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Next button - hidden when at last slide */}
      {activeIndex < images.length - 1 && (
        <button
          aria-label="Next slide"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm hover:bg-white transition-opacity"
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2 pb-4">
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
