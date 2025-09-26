
"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import HeroImage from "@/components/durga/hero-image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Full-Screen Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[76px] left-0 w-full z-40 my-10">
          <div
            className={`bg-white w-full shadow-2xl transform transition-all duration-300 ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            style={{ height: "calc(100vh - 76px)" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Menu content in columns */}
            <div className="px-8 pb-8 h-full overflow-y-auto">
              <div className="grid grid-cols-5 gap-8 h-full max-w-7xl mx-auto">
                {/* Our Story Column */}
                <div>
                  <h3 className="text-red-600 font-bold text-lg mb-4 border-b border-red-200 pb-2">
                    Our Story
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="hover:text-red-600">
                        History
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Mission & Vision
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Eminent Members
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Patron Messages
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-red-600">
                        Current Ex-Co
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Bengali Culture Column */}
                <div>
                  <h3 className="text-green-600 font-bold text-lg mb-4 border-b border-green-200 pb-2">
                    Bengali Culture
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Festivals & Get Togethers
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Durga Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Lokkhi Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Kali Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Saraswati Puja
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Dol-Utsav
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Bongotsav
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Annual Picnic
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Talent & Culture
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Bengali School - Kshology
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Learning Grades
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Enrol in Kshology
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Know our Teachers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Performing Arts
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Dance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Elocution
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Singing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Drama
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Events Column */}
                <div>
                  <h3 className="text-blue-600 font-bold text-lg mb-4 border-b border-blue-200 pb-2">
                    Events
                  </h3>
                  <div className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Annual Event Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Upcoming Events
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          RSVPs
                        </a>
                      </li>
                    </ul>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Media & Literature
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            E-Magazine Ramdhanu
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Photo Archives
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Print Media
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            TV Media
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Social Media
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            WhatsApp
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Twitter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Beyond BASA Column */}
                <div>
                  <h3 className="text-yellow-600 font-bold text-lg mb-4 border-b border-yellow-200 pb-2">
                    Beyond BASA
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Outreach Programs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Sponsors & Partners
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Sponsor List
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Sponsorship Request
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        Enquiries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-600">
                        BASA Business Exchange
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Join BASA Column */}
                <div>
                  <h3 className="text-purple-600 font-bold text-lg mb-4 border-b border-purple-200 pb-2">
                    Join BASA
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="hover:text-purple-600">
                        Become a Member
                      </a>
                    </li>
                  </ul>

                  {/* Contact and Login at bottom */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>📞</span>
                      <a href="#" className="hover:text-purple-600">
                        Contact us
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <span>🔐</span>
                      <a href="#" className="hover:text-purple-600">
                        ExCo Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header/Navbar */}

      {/* Top Decorative Pattern */}
      <HeroImage />

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
