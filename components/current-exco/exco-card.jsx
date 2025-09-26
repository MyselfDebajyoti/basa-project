import React from "react";

// Reusable ProfileCard component
const ProfileCard = ({ user }) => {
  const { name, title, image, description } = user;

  return (
    <div className="bg-white  overflow-hidden   transition-all duration-300">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-12 gap-0">
        {/* Profile Image - Square Cell */}
        <div className="col-span-4 aspect-square relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20"></div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Profile Info - Right Cell */}
        <div className="col-span-8 p-8 pl-2 bg-white flex flex-col justify-center">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                {name}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 font-light">
                  {title}
                </span>
              </div>
            </div>

            {/* {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => {
                  const colors = [
                    "bg-blue-100 text-blue-700",
                    "bg-green-100 text-green-700",
                    "bg-purple-100 text-purple-700",
                    "bg-orange-100 text-orange-700",
                    "bg-pink-100 text-pink-700",
                  ];
                  return (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        colors[index % colors.length]
                      }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Full Width Description Cell */}
      <div className="col-span-12 pt-3 pr-8 pb-8 pl-0 bg-white">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              {/* <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📍</span> Background & Experience
              </h3> */}
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                {description}
              </p>

              {/* {highlights.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-2xl mb-2">{highlight.icon}</div>
                      <div className="font-medium text-gray-900">
                        {highlight.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {highlight.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
