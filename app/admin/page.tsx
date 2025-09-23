"use client";

import { FormSkeleton } from "@/components/BengaliEnrollmentForm";
import MembershipForm from "@/components/MemberShipForm";
import RsvpForm from "@/components/RsvpForm";
import ContactEnquriesForm from "@/components/ContactEnquriesForm";
export default function AdminPage() {
  return (
    <div className="">
      <main>
        <div className="max-w-7xl grid grid-cols-2 gap-10 mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <FormSkeleton />
          <MembershipForm />
          <RsvpForm />
          <ContactEnquriesForm />
        </div>
      </main>
    </div>
  );
}
