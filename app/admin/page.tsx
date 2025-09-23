"use client";

import { FormSkeleton } from "@/components/BengaliEnrollmentForm";

export default function AdminPage() {
  return (
    <div className="">
      {/* <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <FormSkeleton />
        </div>
      </main>
    </div>
  );
}
