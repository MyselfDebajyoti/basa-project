"use client";

import { BreadcrumbTrail } from "./breadcrumb-trail";

import { BongoUtsav } from "./bongo-utsav";
import { AnnualPicnic } from "./annual-picnic";
import { LokkhiPujo } from "./lokkhi-pujo";
import { SaraswatiPujo } from "./saraswati-pujo";
import { KaliPujo } from "./kali-pujo";
import { DolUtsab } from "./dol-utsab";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Bengali Culture", href: "#" },
  { label: "Talent & Culture", current: true },
];

export function BongoUtsavBody() {
  return (
    <div className="w-full min-h-screen">
      {/* Container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col gap-0 max-w-6xl mx-auto">
          {/* Header Section */}
          <header className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-full">
              <BreadcrumbTrail items={breadcrumbItems} />
            </div>

            <h1
              className="text-xl sm:text-2xl lg:text-3xl font-noto-sans font-semibold text-gray-800 text-left leading-tight"
              id="bongo-utsab"
            >
              Bongo Utsav
            </h1>
          </header>

          {/* Main Content Sections */}
          <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Bongo Utsav Section */}
            <section className="w-full">
              <BongoUtsav className="mt-2 sm:mt-4" />
            </section>

            {/* Annual Picnic Section */}
            <section className="w-full">
              <h2
                className="text-lg sm:text-xl lg:text-2xl font-noto-sans font-semibold text-gray-800 text-left mb-4 sm:mb-6 leading-tight"
                id="annual-picnic"
              >
                Annual Picnic
              </h2>
              <AnnualPicnic className="mt-2 sm:mt-4" />
            </section>

            {/* Lokkhi Pujo Section */}
            <section className="w-full">
              <h2
                className="text-lg sm:text-xl lg:text-2xl font-noto-sans font-semibold text-gray-800 text-left mb-4 sm:mb-6 leading-tight"
                id="lokkhi-pujo"
              >
                Lokkhi Pujo
              </h2>
              <LokkhiPujo className="mt-2 sm:mt-4" />
            </section>

            {/* Saraswati Pujo Section */}
            <section className="w-full" id="saraswati-pujo">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-noto-sans font-semibold text-gray-800 text-left mb-4 sm:mb-6 leading-tight">
                Saraswati Pujo
              </h2>
              <SaraswatiPujo className="mt-2 sm:mt-4" />
            </section>

            {/* Kali Pujo Section */}
            <section className="w-full">
              <h2
                className="text-lg sm:text-xl lg:text-2xl font-noto-sans font-semibold text-gray-800 text-left mb-4 sm:mb-6 leading-tight"
                id="kali-pujo"
              >
                Kali Pujo
              </h2>
              <KaliPujo className="mt-2 sm:mt-4" />
            </section>

            {/* Dol Utsav Section */}
            <section className="w-full">
              <h2
                className="text-lg sm:text-xl lg:text-2xl font-noto-sans font-semibold text-gray-800 text-left mb-4 sm:mb-6 leading-tight"
                id="dol-utsab"
              >
                Dol Utsav
              </h2>
              <DolUtsab className="mt-2 sm:mt-4" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
