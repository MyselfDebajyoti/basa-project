import Image from "next/image";
import HeroImage from "@/components/durga/hero-image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Full-Screen Dropdown Menu */}

      {/* Header/Navbar */}

      {/* Top Decorative Pattern */}
      <HeroImage />

      <section className="py-16 px-4 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
            Get to the Buzz
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1 - Durga Pujo 2025 */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/assets/Group 1171275770.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
            </div>

            {/* Card 2 - Learn Bengali (Square Card) */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/assets/Group 1171275771.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />
              {/* public/assets/.png */}
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}
              {/* Content */}
            </div>

            {/* Card 3 - Join Community */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/assets/Group 1171275772.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
            </div>
          </div>
        </div>
      </section>
      <section className=" py-16 px-4 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
            Get to know us
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1 - Durga Pujo 2025 */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/assets/Group 1171275773.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
            </div>

            {/* Card 2 - Learn Bengali (Square Card) */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/assets/Group 1171275774.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
            </div>

            {/* Card 3 - Join Community */}
            <div className="relative inline-block  overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Background Image - Community Photo */}
              <img
                src="/assets/Group 1171275776.png"
                alt="Join our vibrant community"
                className="block w-full h-auto"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20  to-transparent"></div> */}

              {/* Content */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-16 text-left">
            Our Partners
          </h2>

          {/* Partners Grid - Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 place-items-center">
            {[
              {
                title: "Travel Partner",
                logos: [
                  { src: "/icons/24hrs.svg", alt: "Travel Partner" },
                  { src: "/icons/quatar.svg", alt: "Qatar Airways" },
                ],
              },
              {
                title: "Media Partner",
                logos: [{ src: "/icons/zee.svg", alt: "Zee Africa" }],
              },
              {
                title: "Banking Partner",
                logos: [
                  { src: "/icons/sbi-bank.svg", alt: "SBI South Africa" },
                ],
              },
              {
                title: "Breakfast Partner",
                logos: [{ src: "/icons/kellogs.svg", alt: "Kellogg's" }],
              },
              {
                title: "Retail Partner",
                logos: [
                  { src: "/icons/india-bazaar.svg", alt: "India Bazaar" },
                  { src: "/icons/chopees.png", alt: "Chopees" },
                ],
              },
            ].map((partner, index) => (
              <div key={index} className="text-center w-full">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                  {partner.title}
                </h3>
                <div
                  className={`${
                    partner.logos.length > 1
                      ? "flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center"
                      : "flex items-center justify-center"
                  }`}
                >
                  {partner.logos.map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className="h-10 sm:h-12 w-full max-w-[80px] sm:max-w-[100px] flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Partners Grid - Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
            {/* Sponsor */}
            <div className="text-center w-full">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                Sponsor
              </h3>
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <img
                  src="/icons/Jindal Steel Logo 2025 1.svg"
                  alt="Jindal Steel"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Radio Partner */}
            <div className="text-center w-full">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                Radio Partner
              </h3>
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <img
                  src="/icons/friendsfm.svg"
                  alt="Friends FM 91.9"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Television Partner */}
            <div className="text-center w-full">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                Television Partner
              </h3>
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <img
                  src="/icons/rBangla.svg"
                  alt="R Bangla"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Branding Partner */}
            <div className="text-center w-full">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                Branding Partner
              </h3>
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <img
                  src="/icons/min-design.svg"
                  alt="Min Design Studio"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* CSR Partner */}
            <div className="text-center w-full">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                CSR Partner
              </h3>
              <div className="h-12 sm:h-16 flex items-center justify-center">
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
      {/* Friends of the Association Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
            Friends of the Association
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Bengali Association of South Africa would like to sincerely
                acknowledge the help and generosity of the following individuals
                who have supported us since our inception. Your unwavering
                encouragement through thick and thin is deeply appreciated and
                warmly remembered.
              </p>
            </div>

            {/* Right Column - Names */}
            <div className="space-y-4">
              <div className="text-gray-800">
                <strong>Shree Kiritbhai Acharya & Smt. Neelam Acharya</strong>
              </div>
              <div className="text-gray-800">
                <strong>Mr. Ashok Jain & Mrs. Kavita Jain</strong>
              </div>
              <div className="text-gray-800">
                <strong>Mr. Ravi Tripathi & Mrs. Banti Tripathi.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
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
                src="/icons/image 173 (1).png"
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
                src="/icons/image 180.png"
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
                src="/icons/image 122.png"
                alt="Twitter"
                fill
                className="object-contain"
              />
            </a>
            <a
              href="https://twitter.com/bengaliassocsa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 relative"
            >
              <Image
                src="/icons/image 189.png"
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
