import React, { useState } from 'react';
// import CompanySection from './compo';
import JobCategorySection from './JobCategorySection';
import WorkingSection from './WrokingSection';
import TestimonialsSection from './TestimonialsSection';
import SubscribeSection from './SubscribeSection';
import CompanySection from './CompanySection'


const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = () => {
    // You can integrate this with API or filtering logic
    console.log('Searching for:', jobTitle, jobType);
  };

  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Find your next</span>
                  <span className="block text-indigo-600">career opportunity</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Search through thousands of full-time and part-time jobs to find the perfect fit for you.
                </p>

                {/* Search Inputs */}
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Job Title"
                    className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="text"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    placeholder="Job Type (e.g., Full-Time)"
                    className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-base font-medium"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src=""
          alt="Person finding a job"
        />

      </div>
      <div>
        <CompanySection/>
      </div>
      <div>
        <JobCategorySection/>
      </div>
       <div>
       <WorkingSection/>
      </div>
    <TestimonialsSection/>
    <SubscribeSection/>
     
    
    </section>

    
  );
};

export default HeroSection;