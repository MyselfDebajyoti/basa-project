import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    whatsappNumber: "",
    email: "",
    country: "",
    bengaliLearning: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
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
            className="bg-red-400 hover:bg-red-500 text-white font-semibold text-xl px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
