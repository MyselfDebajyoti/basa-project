import React, { useState } from "react";
import { databases, DATABASE_ID, TABLES } from "../lib/appwrite";
import { ID } from "appwrite";

const ContactEnquiriesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const subjectOptions = [
    "General Enquiry",
    "Regarding Bengali Class",
    "Business/ Sponsorship",
    "Membership",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectSelect = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subject: subject,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create a document in Appwrite database table
      const response = await databases.createDocument(
        DATABASE_ID,
        TABLES.CONTACT_ENQUIRIES_FORM,
        ID.unique(),
        {
          name: formData.name,
          contactNumber: formData.contactNumber,
          email: formData.email || "",
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("Contact enquiry form submitted successfully:", response);
      setSubmitMessage(
        "Contact enquiry submitted successfully! We'll get back to you soon."
      );

      // Reset form after successful submission
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact enquiry form:", error);
      setSubmitMessage("Error submitting contact enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg  p-6 pl-0 pt-0 md:p-0 bg-white">
      <div className="mb-8">
        {/* <p className="text-gray-600 text-sm">
          Fill up the below query form. Our team will get back to you.
        </p> */}
      </div>

      {/* Success/Error Message */}
      {submitMessage && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitMessage.includes("successfully")
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Contact Number */}
        <div>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-4 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            disabled={isSubmitting}
          />
        </div>

        {/* Subject Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => !isSubmitting && setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-4 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-left flex justify-between items-center"
            disabled={isSubmitting}
          >
            <span
              className={formData.subject ? "text-gray-700" : "text-gray-400"}
            >
              {formData.subject || "Subject"}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Options */}
          {isDropdownOpen && !isSubmitting && (
            <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
              {subjectOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSubjectSelect(option)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    index === 0 ? "rounded-t-lg" : ""
                  } ${
                    index === subjectOptions.length - 1 ? "rounded-b-lg" : ""
                  } ${
                    option === "Business/ Sponsorship"
                      ? "text-blue-500 underline"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Type your message...."
            value={formData.message}
            onChange={handleChange}
            rows={8}
            className="w-full px-4 py-4 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 resize-vertical"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-red-400 hover:bg-red-500 text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && !isSubmitting && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default ContactEnquiriesForm;
