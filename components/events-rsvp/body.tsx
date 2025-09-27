"use client";

import { BreadcrumbTrail } from "../durga/breadcrumb-trail";
import RsvpForm from "../RsvpForm";
import Link from "next/link";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  //   { label: "Bengali Culture", href: "/events/bongo-utsav" },
  { label: "RSVP", current: true },
];

export function EventsBody() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <BreadcrumbTrail items={breadcrumbItems}></BreadcrumbTrail>
      </header>
      <img src="/images/events-rsvp.png" alt="" />
      <p className="text-xs">
        Please note: This is a tentative list. Actual dates and venue may
        differ. Please reach out to the Ex-Co for exact dates and venues.
      </p>
      <h2 className="text-xl font-noto-sans font-semibold text-gray-800  text-left">
        Upcoming Events
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        id="upcoming-events"
      >
        {/* Card 1 - Durga Pujo 2025 */}
        <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
          {/* Background Image - Community Photo */}
          <Link href="/events">
            <img
              src="/assets/Group 1171275770.png"
              alt="Join our vibrant community"
              className="block w-full h-auto"
            />
          </Link>
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

          {/* Content */}
        </div>

        {/* Card 2 - Learn Bengali (Square Card) */}

        {/* Card 3 - Join Community */}
      </div>
      <h2
        className="text-xl font-noto-sans font-semibold text-gray-800  text-left"
        id="rsvp"
      >
        RSVP Form:
      </h2>
      <RsvpForm />
    </div>
  );
}
