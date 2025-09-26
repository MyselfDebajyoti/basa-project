"use client";

import Image from "next/image";
// import { Button } from "@/components/ui/button";
import MembershipForm from "../MemberShipForm";

export function JoinBasaBody() {
  return (
    <div className="space-y-12">
      {/* Membership Section */}
      <section id="membership">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-[color:var(--brand-text)] mb-4">
              Membership
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

          {/* Benefits Section */}
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--brand-text)] mb-6">
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Becoming a member of the Bengali Association of South Africa
                  offers numerous benefits to our members and their families. As
                  a member, you will enjoy the following advantages:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Member Exclusive Benefits:</strong> Participation
                      in all BASA organised events
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Community Networking:</strong> A chance to connect
                      and build ties within the South African Bengali Community
                      who have a love for Bengali culture, heritage & tradition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Family Engagement:</strong> Programs and
                      activities designed for all age groups - from children to
                      the elderly to participate constructively & meaningfully
                      with BASA
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Discounted Access:</strong> Reduced or
                      complimentary entry to selected events, workshops, and
                      community initiatives
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Volunteer Opportunities:</strong> Be part of event
                      committees, cultural performances, and social outreach,
                      gaining hands-on experience in organising valuable Bengali
                      cultural events
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Educational Programs:</strong> Special cultural,
                      educational and talent-based activities designed to help
                      younger generations engage with their roots
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Voting Rights:</strong> Members have the right to
                      vote in BASA elections and contribute directly to the
                      future direction of BASA
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      <strong>Newsletter & Updates:</strong> Stay informed about
                      upcoming events, news, activities, and community
                      initiatives through BASA&apos;s regular communications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[color:var(--brand-primary)] mr-2">
                      •
                    </span>
                    <span>
                      By joining BASA, you are not only enriching your own life
                      with culture and community, but also contributing to the
                      preservation and growth of Bengali heritage in South
                      Africa
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Membership Tiers */}
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--brand-text)] mb-6">
              Membership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              {[
                {
                  icon: "/join-basa/icon1.png",
                  title: "Family",
                  price: "ZAR 1800 / Year",
                  alt: "Family",
                },
                {
                  icon: "/join-basa/icon2.png",
                  title: "Individual",
                  price: "ZAR 1200 / Year",
                  alt: "Individual",
                },
                {
                  icon: "/join-basa/icon3.png",
                  title: "Student",
                  price: "ZAR 700 / Year",
                  alt: "Student",
                },
                {
                  icon: "/join-basa/icon4.png",
                  title: "Renewal",
                  price: "1 March",
                  alt: "Renewal",
                },
              ].map((tier, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <Image
                      src={tier.icon}
                      alt={tier.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-[color:var(--brand-text)] mb-2">
                    {tier.title}
                  </h3>
                  <p className="text- font-bold text-[color:var(--brand-primary)] mb-4">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees Payment Section */}
      <section id="fees-payment">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold text-[color:var(--brand-text)]">
            Fees Payment
          </h2>
          <div className="rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              By 01 March of every year, BASA encourages all Members to renew
              their Annual Membership. All Membership fees can be paid through
              Electronic Fund Transfer (EFT) to the below mentioned Bank
              Account. Once transferred, please send the Proof of Payment with
              your full reference to{" "}
              <a
                href="mailto:bsamemberinfo@basa.com"
                className="text-[color:var(--brand-primary)] hover:underline"
              >
                bsamemberinfo@basa.com
              </a>{" "}
              or WhatsApp to +27 79 538 1768. Please use &quot;BASA Annual
              Membership&quot; as the subject of the communication.
            </p>

            <div className=" gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[color:var(--brand-text)] mb-2">
                    Bank
                  </h3>
                  <p className="text-gray-700">First National Bank (FNB)</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[color:var(--brand-text)] mb-2">
                    Account Name
                  </h3>
                  <p className="text-gray-700">
                    Bengali Association of South Africa NPC
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[color:var(--brand-text)] mb-2">
                    Account Number
                  </h3>
                  <p className="text-gray-700 font-mono text-lg">
                    62 619 647 92 0
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[color:var(--brand-text)] mb-2">
                    Branch Code
                  </h3>
                  <p className="text-gray-700 font-mono text-lg">254005</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[color:var(--brand-text)] mb-2">
                    Reference
                  </h3>
                  <p className="text-gray-700">
                    &lt;Main Member Name&gt; - &lt;YYYY&gt; - &lt;FY&gt;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    (eg Example Surname Sen 2025-26)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section id="membership-form">
        <div>
          <MembershipForm />
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-text)]">
            Have Questions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[color:var(--brand-text)]">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:bsamemberinfo@basa.com"
                    className="text-[color:var(--brand-primary)] hover:underline"
                  >
                    bsamemberinfo@basa.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/27795381768"
                    className="text-[color:var(--brand-primary)] hover:underline"
                  >
                    +27 79 538 1768
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-[color:var(--brand-text)]">
                Get in Touch
              </h3>
              <p className="text-gray-700">
                Our membership team is here to help answer any questions about
                joining BASA and becoming part of our community.
              </p>
              <Button
                variant="outline"
                className="border-[color:var(--brand-primary)] text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
