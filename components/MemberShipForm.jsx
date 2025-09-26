import React, { useState } from "react";
import { databases, DATABASE_ID, TABLES } from "../lib/appwrite";
import { ID } from "appwrite";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    membershipEnquiry: "",
    referringMember: "",
    numberOfAdults: "",
    numberOfChildren: "",
    isStudent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create a document in Appwrite database table
      const response = await databases.createDocument(
        DATABASE_ID,
        TABLES.MEMBERSHIP_FORM,
        ID.unique(),
        {
          name: formData.name,
          contactNumber: formData.contactNumber,
          email: formData.email || "",
          membershipEnquiry: formData.membershipEnquiry,
          referringMember: formData.referringMember || "",
          numberOfAdults: parseInt(formData.numberOfAdults) || 0,
          numberOfChildren: parseInt(formData.numberOfChildren) || 0,
          isStudent: formData.isStudent,
        }
      );

      console.log("Membership form submitted successfully:", response);
      setSubmitMessage("Membership enquiry submitted successfully! We'll get back to you soon.");

      // Reset form after successful submission
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        membershipEnquiry: "",
        referringMember: "",
        numberOfAdults: "",
        numberOfChildren: "",
        isStudent: false,
      });
    } catch (error) {
      console.error("Error submitting membership form:", error);
      setSubmitMessage("Error submitting membership enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl bg-white">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900 mb-4">
          Membership Enquiry
        </h1>
        <p className="text-gray-600 text-lg">
          Still have questions? Fill up the below query form. Our team will get
          back to you.
        </p>
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
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
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
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
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
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            disabled={isSubmitting}
          />
        </div>

        {/* Membership Enquiry */}
        <div>
          <textarea
            name="membershipEnquiry"
            placeholder="Membership Enquiry"
            value={formData.membershipEnquiry}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 resize-vertical"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Name of referring BASA Member */}
        <div>
          <input
            type="text"
            name="referringMember"
            placeholder="Name of referring BASA Member (Optional)"
            value={formData.referringMember}
            onChange={handleChange}
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            disabled={isSubmitting}
          />
        </div>

        {/* Number of Adults */}
        <div>
          <input
            type="number"
            name="numberOfAdults"
            placeholder="Number of Adults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            min="0"
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Number of Children */}
        <div>
          <input
            type="number"
            name="numberOfChildren"
            placeholder="Number of Children"
            value={formData.numberOfChildren}
            onChange={handleChange}
            min="0"
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Student Toggle */}
        <div className="flex items-center space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="isStudent"
              checked={formData.isStudent}
              onChange={handleChange}
              className="sr-only peer"
              disabled={isSubmitting}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="text-lg text-gray-700">I am a student</span>
        </div>

        {/* Note */}
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Please note:</strong>
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Submitting this enquiry form does not guarantee BASA Membership.
            Membership will be granted upon approval of the BASA ExCo and will
            be duely communicated to you.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-semibold text-xl px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gray-500 hover:bg-gray-600 text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
