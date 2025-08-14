import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // You can replace this with API call logic
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-indigo-600 dark:bg-indigo-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-indigo-200 mb-6">
          Stay updated with the latest job opportunities, career tips, and platform updates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
