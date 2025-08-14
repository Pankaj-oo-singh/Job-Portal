    import React from 'react';

const companies = [
  {
    name: 'Google',
    logo: '/logos/google.png',
  },
  {
    name: 'Amazon',
    logo: '/logos/amazon.png',
  },
  {
    name: 'Microsoft',
    logo: '/logos/microsoft.png',
  },
  {
    name: 'Netflix',
    logo: '/logos/netflix.png',
  },
  {
    name: 'Facebook',
    logo: '/logos/facebook.png',
  },
  {
    name: 'Adobe',
    logo: '/logos/adobe.png',
  },
  // Add more companies here
];

const CompanySection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Companies Hiring Now
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 object-contain mb-2"
              />
              <p className="text-gray-800 dark:text-gray-100 text-sm font-semibold">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
