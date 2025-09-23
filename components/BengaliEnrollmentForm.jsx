import React, { useState } from "react";
import { databases, DATABASE_ID, TABLE_ID } from "../lib/appwrite";
import { ID } from "appwrite";

export const FormSkeleton = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    whatsappNumber: "",
    email: "",
    country: "",
    bengaliLearning: "",
    age: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create a document in Appwrite database table
      const response = await databases.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(), // Generates a unique ID
        {
          studentName: formData.studentName,
          whatsappNumber: formData.whatsappNumber,
          email: formData.email || "", // Handle optional email
          country: formData.country,
          bengaliLearning: formData.bengaliLearning,
          age: formData.age,
        }
      );

      console.log("Form submitted successfully:", response);
      setSubmitMessage(
        "Form submitted successfully! We'll get back to you soon."
      );

      // Reset form after successful submission
      setFormData({
        studentName: "",
        whatsappNumber: "",
        email: "",
        country: "",
        bengaliLearning: "",
        age: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Enrol & Learn Bengali
        </h1>
        <p className="text-gray-600 text-lg">
          Fill up the below query form. Our team will get back to you.
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
        {/* Student Name */}
        <div>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <input
            type="tel"
            name="whatsappNumber"
            placeholder="Parents/ Guardian Whatsapp Number"
            value={formData.whatsappNumber}
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

        {/* Country */}
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country of current residence"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Bengali Learning */}
        <div>
          <textarea
            name="bengaliLearning"
            placeholder="Regarding Bengali Learning"
            value={formData.bengaliLearning}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 resize-vertical"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Age */}
        <div>
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
            required
            disabled={isSubmitting}
          >
            <option value="" disabled className="text-gray-400">
              Select Age
            </option>
            <option value="3-4">Age 3-4 Years</option>
            <option value="5">Age 5 Years</option>
            <option value="6-7">Age 6-7 Years</option>
            <option value="8-10">Age 8-10 Years</option>
            <option value="11-15">Age 11-15 Years</option>
            <option value="16+">Age 16+ Years</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-semibold text-xl px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-red-400 hover:bg-red-500 text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
