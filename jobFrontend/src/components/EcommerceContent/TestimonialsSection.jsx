// import React from 'react';
// import { FaStar } from 'react-icons/fa';

// const testimonials = [
//   {
//     name: 'Anjali Sharma',
//     photo: '/avatars/user1.jpg',
//     rating: 5,
//     description:
//       'This platform helped me land my dream job! The interface is smooth and the job recommendations were spot on.',
//   },
//   {
//     name: 'Ravi Patel',
//     photo: '/avatars/user2.jpg',
//     rating: 4,
//     description:
//       'Great experience using this portal. I found several freelance gigs quickly and easily.',
//   },
//   {
//     name: 'Sonia Verma',
//     photo: '/avatars/user3.jpg',
//     rating: 5,
//     description:
//       'I love the user experience and how fast I got interview calls. Highly recommended for job seekers.',
//   },
//   // Add more testimonials as needed
// ];

// const TestimonialsSection = () => {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">
//           What Users Say About Us
//         </h2>
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((user, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
//             >
//               <img
//                 src={user.photo}
//                 alt={user.name}
//                 className="w-20 h-20 rounded-full mb-4 object-cover"
//               />
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
//               <div className="flex items-center justify-center mt-2 mb-3">
//                 {Array.from({ length: user.rating }).map((_, i) => (
//                   <FaStar key={i} className="text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 text-sm">{user.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const testimonials = [
//   {
//     name: 'Anjali Sharma',
//     photo: '/avatars/user1.jpg',
//     rating: 5,
//     description:
//       'This platform helped me land my dream job! The interface is smooth and the job recommendations were spot on.',
//   },
//   {
//     name: 'Ravi Patel',
//     photo: '/avatars/user2.jpg',
//     rating: 4,
//     description:
//       'Great experience using this portal. I found several freelance gigs quickly and easily.',
//   },
//   {
//     name: 'Sonia Verma',
//     photo: '/avatars/user3.jpg',
//     rating: 5,
//     description:
//       'I love the user experience and how fast I got interview calls. Highly recommended for job seekers.',
//   },
//   {
//     name: 'Amit Yadav',
//     photo: '/avatars/user4.jpg',
//     rating: 4,
//     description:
//       'User-friendly and powerful platform for job searching. Excellent support and smooth interface.',
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">
//           What Users Say About Us
//         </h2>

//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000 }}
//           loop={true}
//         >
//           {testimonials.map((user, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//                 <img
//                   src={user.photo}
//                   alt={user.name}
//                   className="w-20 h-20 rounded-full mb-4 object-cover"
//                 />
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
//                 <div className="flex items-center justify-center mt-2 mb-3">
//                   {Array.from({ length: user.rating }).map((_, i) => (
//                     <FaStar key={i} className="text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">{user.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Anjali Sharma',
    photo: '/avatars/user1.jpg',
    rating: 5,
    description:
      'This platform helped me land my dream job! The interface is smooth and the job recommendations were spot on.',
  },
  {
    name: 'Ravi Patel',
    photo: '/avatars/user2.jpg',
    rating: 4,
    description:
      'Great experience using this portal. I found several freelance gigs quickly and easily.',
  },
  {
    name: 'Sonia Verma',
    photo: '/avatars/user3.jpg',
    rating: 5,
    description:
      'I love the user experience and how fast I got interview calls. Highly recommended for job seekers.',
  },
  {
    name: 'Amit Yadav',
    photo: '/avatars/user4.jpg',
    rating: 4,
    description:
      'User-friendly and powerful platform for job searching. Excellent support and smooth interface.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">
          What Users Say About Us
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                <div className="flex items-center justify-center mt-2 mb-3">
                  {Array.from({ length: user.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{user.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
