import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Membership Enquiry
        </h1>
        <p className="text-gray-600 text-lg">
          Still have questions? Fill up the below query form. Our team will get
          back to you.
        </p>
      </div>

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
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold text-xl px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
