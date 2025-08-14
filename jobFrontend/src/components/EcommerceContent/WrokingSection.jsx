import React from 'react';
// Make sure to place your image correctly

const WorkingSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            // src={workingImage}
            src="Photo.jpg"
            alt="Working Process"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>

        {/* Right: Steps */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            How it Works
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Build Your Resume</h3>
                <p className="text-gray-600 dark:text-gray-400">Create a professional resume in minutes using our resume builder.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Apply for Jobs</h3>
                <p className="text-gray-600 dark:text-gray-400">Browse job listings and apply with one click using your saved profile.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Get Hired</h3>
                <p className="text-gray-600 dark:text-gray-400">Start your dream job with top companies that trust our platform.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
