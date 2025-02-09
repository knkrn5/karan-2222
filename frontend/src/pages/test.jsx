import React from "react";

export default function test() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          alt="Profile picture of the person"
          className="w-full"
          height={400}
          src="https://storage.googleapis.com/a1aa/image/B8AUNgL5Wdbwv5MWuSqDO4TvwBZOE5jNXrkqAkyGGAU.jpg"
          width={600}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">John Doe</div>
          <p className="text-gray-700 text-base">
            Hello! I'm John Doe, a passionate web developer with a love for
            creating dynamic and responsive web applications. I have a strong
            background in JavaScript, React, and Tailwind CSS.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            #WebDeveloper
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #JavaScript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #TailwindCSS
          </span>
        </div>
      </div>
    </>
  );
}
