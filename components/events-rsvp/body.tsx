"use client";

import { BreadcrumbTrail } from "../durga/breadcrumb-trail";
import RsvpForm from "../RsvpForm";

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
      <RsvpForm/>
    </div>
  );
}
