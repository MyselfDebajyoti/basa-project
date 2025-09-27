"use client";

import Image from "next/image";
import BusinessEnquiriesForm from "../businessForm";
// import { Button } from "@/components/ui/button";

export function BusinessEnquiryBody() {
  return (
    <div className="space-y-12">
      {/* BASA Networking & Business Exchange Section */}
      <section id="networking">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-[color:var(--brand-text)] mb-4">
              BASA Networking & Business Exchange
            </h1>
            <nav className="text-sm text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Bengali Culture</span>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--brand-primary)]">
                Talent & Culture
              </span>
            </nav>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-lg mb-8">
            <Image
              src="/bussiness-enquiry/bussiness-enquiry.png"
              alt="BASA Networking & Business Exchange"
              width={500}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - About BASA Member Networking */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[color:var(--brand-text)] mb-4">
                BASA Member Networking & Business Exchange
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Bengali Association of South Africa (BASA) is not only a
                cultural hub but also a platform for collaboration, growth, and
                opportunity. As our community continues to flourish, BASA
                recognises the importance of connecting members beyond cultural
                activities — into meaningful business networking and
                professional development opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                BASA provides entrepreneurs, professionals, and business owners
                within the community an opportunity to showcase their expertise,
                explore partnerships, and discover new avenues for growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through the BASA Business Exchange, members can engage in
                networking sessions, business showcases, referrals, and
                collaborations that strengthen both individual ventures and the
                wider community. Whether you run a small business, represent a
                corporate enterprise, or offer specialised professional
                services, BASA&apos;s platform can help you connect with
                potential clients, partners, and collaborators across South
                Africa and beyond.
              </p>
            </div>

            {/* Right Column - Questions to Guide Your Enquiry */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[color:var(--brand-text)] mb-4">
                Questions to Guide Your Enquiry
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[color:var(--brand-primary)] mr-2 mt-1">
                    •
                  </span>
                  <span>
                    Are you a business owner looking to connect with new clients
                    within the BASA community?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[color:var(--brand-primary)] mr-2 mt-1">
                    •
                  </span>
                  <span>
                    Do you wish to explore partnerships or collaborations with
                    other Bengali professionals in South Africa?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[color:var(--brand-primary)] mr-2 mt-1">
                    •
                  </span>
                  <span>
                    Would you like to showcase your services or products at BASA
                    cultural programs and events?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[color:var(--brand-primary)] mr-2 mt-1">
                    •
                  </span>
                  <span>
                    Are you seeking a platform to expand your professional
                    network while giving back to the community?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[color:var(--brand-primary)] mr-2 mt-1">
                    •
                  </span>
                  <span>
                    Do you want to learn about exclusive BASA business forums,
                    exhibitions, or referral programs?
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                Fill out the form below to let us know more about your business
                and how BASA can support your journey. Together, we can build a
                strong, interconnected network that celebrates both our culture
                and our professional success.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - About BASA Member Networking */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[color:var(--brand-text)] mb-4">
                Entrepreneur / Business Exchange Enquiry
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fill out the form below to let us know more about your business
                and how BASA can support your journey. Together, we can build a
                strong, interconnected network that celebrates both our culture
                and our professional success.
              </p>
            </div>

            {/* Right Column - Questions to Guide Your Enquiry */}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form">
        <BusinessEnquiriesForm></BusinessEnquiriesForm>
      </section>
    </div>
  );
}
