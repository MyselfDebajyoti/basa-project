import React, { useState } from "react";
import { databases, DATABASE_ID, TABLES } from "../lib/appwrite";
import { ID } from "appwrite";

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    nabamiMahaJogyo: 0,
    dashamiDebiBoron: 0,
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (eventName, value) => {
    setFormData((prev) => ({
      ...prev,
      [eventName]: parseInt(value) || 0,
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
        TABLES.RSVP_FORM,
        ID.unique(),
        {
          name: formData.name,
          contactNumber: formData.contactNumber,
          nabamiMahaJogyo: formData.nabamiMahaJogyo,
          dashamiDebiBoron: formData.dashamiDebiBoron,
          comments: formData.comments || "",
        }
      );

      console.log("RSVP form submitted successfully:", response);
      setSubmitMessage(
        "RSVP submitted successfully! We'll see you at the events."
      );

      // Reset form after successful submission
      setFormData({
        name: "",
        contactNumber: "",
        nabamiMahaJogyo: 0,
        dashamiDebiBoron: 0,
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting RSVP form:", error);
      setSubmitMessage("Error submitting RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-5 h-auto mr-2"
              />
              <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Please enter your contact number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="flex-1 px-4 py-3 text-base border border-gray-300 rounded-r-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Nabami Maha Jogyo Event */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nabami Maha Jogyo – 5th October , Sunday 12:30 PM
          </label>
          <select
            value={formData.nabamiMahaJogyo}
            onChange={(e) =>
              handleNumberChange("nabamiMahaJogyo", e.target.value)
            }
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
            disabled={isSubmitting}
          >
            {[...Array(21)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Dashami Debi Boron Event */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dashami Debi Boron – 5th October , Sunday 2:30 PM
          </label>
          <select
            value={formData.dashamiDebiBoron}
            onChange={(e) =>
              handleNumberChange("dashamiDebiBoron", e.target.value)
            }
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
            disabled={isSubmitting}
          >
            {[...Array(21)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Comments (If Any)
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400 resize-vertical"
            placeholder="Enter your comments here..."
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-medium text-base px-6 py-3 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;
