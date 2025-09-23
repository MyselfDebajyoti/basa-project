import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Decorative Pattern */}
      <div className="h-12 relative overflow-hidden">
        <img
          src="/images/Group 1171275754.png"
          alt="Top decorative pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="pt-10 px-4 ">
        <div className="max-w-7xl mx-auto text-center">
          {/* Bengali Text */}
          <h1 className="text-2xl md:text-4xl text-blue-600 font-medium mb-8">
            বাঙালি ভাষার আলোর ঢেউ, বাঙালি হৃদয় তুমি...
          </h1>

          {/* Event Information */}
          <div className="text-right mb-12 max-w-md ml-auto">
            <div className="text-3xl font-bold text-red-600 mb-2">
              3rd, 4th & 5th Oct
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-1">
              Shree Radhe Shyam
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-3">
              Mandir Complex, Sandton
            </div>
            <div className="text-base text-gray-600">
              2 Gilla Crescent, Marlboro
            </div>
            <div className="text-base text-gray-600">
              Gardens, Sandton, 2063
            </div>
          </div>

          {/* Central Emblems - Much Larger */}
          <div className="flex justify-center items-end space-x-8 lg:space-x-16">
            {/* Left Emblem */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <Image
                src="/images/Group 1171275750 (1).png"
                alt="Sharadotsav 2025 Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Center Emblem (Largest) */}
            <div className="relative w-96 h-[500px] lg:w-[450px] lg:h-[600px]">
              <Image
                src="/images/Group 1171275750 (1).png"
                alt="Maa Aaschen Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Emblem */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <Image
                src="/images/Group 1171275750 (1).png"
                alt="Durga 2025 Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Decorative Pattern */}
      <div className="h-12 relative overflow-hidden ">
        <img
          src="/images/Group 1171275754.png"
          alt="Bottom decorative pattern"
          className="w-full h-full object-cover"
        />
      </div>
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
