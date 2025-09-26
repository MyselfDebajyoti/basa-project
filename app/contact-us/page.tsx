import React from "react";
import { BreadcrumbTrail } from "@/components/durga/breadcrumb-trail";
import ContactEnquiriesForm from "@/components/ContactEnquriesForm";

function ContactUsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us", current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <BreadcrumbTrail items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Us
              </h2>

              <nav className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Sponsorship Enquiry
                  </h3>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Business/Sponsorship
                  </h3>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Current ExCo
                  </h3>
                </div>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Back to Top
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Header */}
              <div className="px-8 py-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h1>
              </div>

              {/* Form Section */}
              <div className="p-8">
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
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Contact us
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          WhatsApp us on:
                        </p>
                        <div className="flex items-center space-x-2">
                          <p className="text-lg font-medium text-gray-900">
                            +27 79 538 1768
                          </p>
                          <button
                            className="p-1 text-gray-400 hover:text-gray-600"
                            onClick={() =>
                              navigator.clipboard.writeText("+27795381768")
                            }
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Email us on:
                        </p>
                        <div className="flex items-center space-x-2">
                          <p className="text-lg font-medium text-gray-900">
                            contact@amaderbasa.org
                          </p>
                          <button
                            className="p-1 text-gray-400 hover:text-gray-600"
                            onClick={() =>
                              navigator.clipboard.writeText(
                                "contact@amaderbasa.org"
                              )
                            }
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Sponsorship Request
                    </h3>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      DOWNLOAD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
