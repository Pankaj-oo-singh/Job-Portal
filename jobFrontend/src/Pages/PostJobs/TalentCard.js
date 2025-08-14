// import React from 'react';

// const TalentCard = ({ profile, onViewProfile, onMessage }) => {
//      const BASE_URL = "http://localhost:8080";
//   return (
//     <div className="max-w-sm rounded-2xl overflow-hidden shadow-md p-4 bg-white">
//       <img
//         className="w-24 h-24 rounded-full mx-auto object-cover"
//         src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
//         alt="Profile"
//       />
//       <div className="text-center mt-4">
//         <h3 className="text-lg font-semibold">{profile.jobTitle || 'Job Title'}</h3>
//         <p className="text-sm text-gray-600 mt-1">{profile.about || 'No about info.'}</p>

//         <div className="flex flex-wrap justify-center gap-2 mt-3">
//           {profile.skills?.map((skill, idx) => (
//             <span
//               key={idx}
//               className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between mt-6 px-4">
//         <button
//           onClick={() => onViewProfile(profile.id)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//         >
//           Profile
//         </button>
//         <button
//           onClick={() => onMessage(profile.id)}
//           className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
//         >
//           Message
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TalentCard;
import React from 'react';
import Footer from '../../components/Footer/Footer';

const TalentCard = ({ profile, onViewProfile, onMessage }) => {
  const BASE_URL = 'http://localhost:8080';

  return (
    <div>
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl duration-300 w-full max-w-sm mx-auto">
      <div className="p-6 flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
          alt="Profile"
        />

        <h2 className="mt-4 text-xl font-bold text-gray-800">{profile.jobTitle || 'Job Title'}</h2>
        <p className="text-sm text-gray-600 mt-2 text-center">{profile.about || 'No about info.'}</p>

        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {profile.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-around p-4 border-t border-gray-100">
        <button
          onClick={() => onViewProfile(profile.id)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          View Profile
        </button>
        <button
          onClick={() => onMessage(profile.id)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
        >
          Message
        </button>
      </div>
      
    </div>
    
    </div>
  );
};

export default TalentCard;
