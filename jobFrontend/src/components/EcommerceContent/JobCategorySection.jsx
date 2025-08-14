import React from 'react';
import { FaLaptopCode, FaStethoscope, FaPaintBrush, FaChartLine, FaMoneyBillWave, FaTools } from 'react-icons/fa';

const categories = [
  { name: 'IT & Software', icon: <FaLaptopCode />, path: '/category/it' },
  { name: 'Healthcare', icon: <FaStethoscope />, path: '/category/healthcare' },
  { name: 'Design & Creative', icon: <FaPaintBrush />, path: '/category/design' },
  { name: 'Marketing & Sales', icon: <FaChartLine />, path: '/category/marketing' },
  { name: 'Finance & Banking', icon: <FaMoneyBillWave />, path: '/category/finance' },
  { name: 'Engineering', icon: <FaTools />, path: '/category/engineering' },
];

const JobCategorySection = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Explore Job Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              href={category.path}
              key={index}
              className="flex items-center space-x-4 bg-white dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-gray-700 p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-indigo-600 dark:text-indigo-400 text-3xl">
                {category.icon}
              </div>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategorySection;
