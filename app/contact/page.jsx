"use client";
import React from "react";
import { useState } from "react";

import ContactEnquiriesForm from "@/components/ContactEnquriesForm";
import { ClipboardCheck, Copy, Download } from "lucide-react";
// import BreadcrumbTrail from "@/components/BreadcrumbTrail";

function ContactUsPage() {
  // const breadcrumbItems = [
  //   { label: "Home", href: "/" },
  //   { label: "Contact Us", current: true },
  // ];
  const [copied, setCopied] = useState({ email: false, phone: false });

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [key]: true });

    setTimeout(() => {
      setCopied({ ...copied, [key]: false });
    }, 2000);
  };

  const handleDownload = () => {
    // Replace 'your-file-name.pdf' with the actual filename in your public folder
    const link = document.createElement("a");
    link.href = "/BASA- Sponsorship Note.pdf"; // Path to file in public folder
    link.download = "sponsorship-request.pdf"; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        {/* <div className="px-10">
          <BreadcrumbTrail items={breadcrumbItems} />
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 hidden  md:block">
            <div className="bg-white  p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Us
              </h2>

              <nav className="space-y-4">
                <div>
                  <h3 className="text-sm font-light text-gray-700 mb-2">
                    Sponsorship Enquiry
                  </h3>
                </div>
                <div>
                  <h3 className="text-sm font-light text-gray-700 mb-2">
                    Business/Sponsorship
                  </h3>
                </div>
                <div>
                  <a
                    className="text-sm font-light text-gray-700 mb-2"
                    href="/our-story/current-exco"
                  >
                    Current ExCo
                  </a>
                </div>
              </nav>

              <div className="mt-8 pt-6  border-gray-200">
                <button className="text-sm text-gray-700 transition-colors">
                  Back to Top
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div>
              {/* Header */}
              <div className=" md:px-0   border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h1>
              </div>

              {/* Form Section */}
              <div className="mt-10">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Enquiries
                  </h2>
                  <p className="text-gray-600">
                    Fill up the below query form. Our team will get back to you.
                  </p>
                </div>

                {/* Contact Form */}
                <ContactEnquiriesForm />
              </div>

              {/* Contact Information */}
              <div className="w-fit flex flex-col gap-6 pt-12">
                {/* Email */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Email
                    </h2>
                    <p className="font-light">president@amaderbasa.org</p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("mail.parulverma@gmail.com", "email")
                    }
                    className="text-gray-600 hover:text-black transition"
                  >
                    {copied.email ? (
                      <ClipboardCheck size={20} />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>

                {/* Divider */}

                {/* Phone */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Whatsapp us on
                    </h2>
                    <p className="font-light">+27 79 538 1768</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+27 66 120 8 021", "phone")}
                    className="text-gray-600 hover:text-black transition"
                  >
                    {copied.phone ? (
                      <ClipboardCheck size={20} />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>

                <div
                  className="flex justify-between items-center"
                  id="sponsorship-request"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Sponsorship Request
                    </h2>
                    <button
                      onClick={handleDownload}
                      className="font-semibold text-sm  rounded-lg transition-colors duration-200   text-black hover:underline"
                    >
                      Download File
                    </button>
                  </div>
                </div>

                {/* Divider */}

                {/* LinkedIn */}
              </div>

              {/* Download Button Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
