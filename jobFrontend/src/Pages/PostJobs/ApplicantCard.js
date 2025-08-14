// import React from 'react';
// import { BASE_URL} from '../../Api/Constant'

// const ApplicantCard = ({ applicant }) => {
//   return (
//     <div className="bg-white border rounded-xl shadow-md p-5 hover:shadow-lg transition">
//       <h3 className="text-lg font-semibold mb-2">{applicant.name}</h3>
//       <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {applicant.email}</p>
//       <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {applicant.phone}</p>
//       <p className="text-sm text-gray-600 mb-1">
//         <strong>Website:</strong>{' '}
//         <a href={applicant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//           {applicant.website}
//         </a>
//       </p>
//       <p className="text-sm text-gray-600 mb-1"><strong>Status:</strong> {applicant.applicationStatus}</p>
//       <p className="text-sm text-gray-600 mb-1">
//         <strong>Applied At:</strong> {new Date(applicant.timestamp).toLocaleString()}
//       </p>
//       <div className="mt-3 space-y-1">
//         <a
//           href={`${BASE_URL}/uploads/resumes/${applicant.resume}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block text-blue-600 underline text-sm"
//         >
//           📄 View Resume
//         </a>
//         <a
//           href={`${BASE_URL}/uploads/cover-letters/${applicant.coverLetter}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block text-blue-600 underline text-sm"
//         >
//           📝 View Cover Letter
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ApplicantCard;
// import React from 'react';
// import { BASE_URL } from '../../Api/Constant';

// const ApplicantCard = ({ applicant }) => {
//   const handleViewProfile = () => {
//     // You can implement navigation or modal logic here
//     alert(`Viewing profile of ${applicant.name}`);
//   };

//   const handleScheduleInterview = () => {
//     // Implement scheduling logic or modal here
//     alert(`Scheduling interview with ${applicant.name}`);
//   };

//   return (
//     <div className="bg-white border rounded-xl shadow-md p-5 hover:shadow-lg transition flex flex-col justify-between">
//       <div>
//         <h3 className="text-lg font-semibold mb-2">{applicant.name}</h3>
//         <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {applicant.email}</p>
//         <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {applicant.phone}</p>
//         <p className="text-sm text-gray-600 mb-1">
//           <strong>Website:</strong>{' '}
//           <a href={applicant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//             {applicant.website}
//           </a>
//         </p>
//         <p className="text-sm text-gray-600 mb-1"><strong>Status:</strong> {applicant.applicationStatus}</p>
//         <p className="text-sm text-gray-600 mb-1">
//           <strong>Applied At:</strong> {new Date(applicant.timestamp).toLocaleString()}
//         </p>
//         <div className="mt-3 space-y-1">
//           <a
//             href={`${BASE_URL}/uploads/resumes/${applicant.resume}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block text-blue-600 underline text-sm"
//           >
//             📄 View Resume
//           </a>
//           <a
//             href={`${BASE_URL}/uploads/cover-letters/${applicant.coverLetter}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block text-blue-600 underline text-sm"
//           >
//             📝 View Cover Letter
//           </a>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-4 flex gap-2">
//         <button
//           onClick={handleViewProfile}
//           className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
//         >
//           View Profile
//         </button>
//         <button
//           onClick={handleScheduleInterview}
//           className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
//         >
//           Schedule
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApplicantCard;




// import React from 'react';
// import { BASE_URL } from '../../Api/Constant';
// import { FaEnvelope, FaPhone, FaGlobe, FaFileAlt, FaRegFilePdf, FaUserCircle, FaCalendarAlt } from 'react-icons/fa';

// const ApplicantCard = ({ applicant }) => {
//   const handleViewProfile = () => {
//     alert(`Viewing profile of ${applicant.name}`);
//   };

//   const handleScheduleInterview = () => {
//     alert(`Scheduling interview with ${applicant.name}`);
//   };

//   return (
//     <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between">
//       {/* Header with name and avatar */}
//       <div className="flex items-center gap-4 mb-3">
//         <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
//           <FaUserCircle />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">{applicant.name}</h3>
//           <p className="text-xs text-gray-500">Status: {applicant.applicationStatus}</p>
//         </div>
//       </div>

//       {/* Contact & info */}
//       <div className="space-y-2 text-sm text-gray-700">
//         <div className="flex items-center gap-2">
//           <FaEnvelope className="text-blue-500" />
//           <span>{applicant.email}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaPhone className="text-green-500" />
//           <span>{applicant.phone}</span>
//         </div>
//         {applicant.website && (
//           <div className="flex items-center gap-2">
//             <FaGlobe className="text-purple-500" />
//             <a
//               href={applicant.website}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {applicant.website}
//             </a>
//           </div>
//         )}
//         <div className="flex items-center gap-2">
//           <FaCalendarAlt className="text-yellow-500" />
//           <span>
//             Applied: {new Date(applicant.timestamp).toLocaleString()}
//           </span>
//         </div>
//       </div>

//       {/* Documents */}
//       <div className="mt-4 space-y-1 text-sm">
//         <a
//           href={`${BASE_URL}/uploads/resumes/${applicant.resume}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-blue-600 underline"
//         >
//           <FaRegFilePdf /> View Resume
//         </a>
//         <a
//           href={`${BASE_URL}/uploads/cover-letters/${applicant.coverLetter}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-blue-600 underline"
//         >
//           <FaFileAlt /> View Cover Letter
//         </a>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-5 flex gap-2">
//         <button
//           onClick={handleViewProfile}
//           className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
//         >
//           View Profile
//         </button>
//         <button
//           onClick={handleScheduleInterview}
//           className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
//         >
//           Schedule
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApplicantCard;

import React from 'react';
import { BASE_URL } from '../../Api/Constant';
import { FaEnvelope, FaPhone, FaGlobe, FaRegFilePdf, FaFileAlt, FaUserCircle, FaCalendarAlt } from 'react-icons/fa';

const ApplicantCard = ({ applicant, onSchedule }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
          <FaUserCircle />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{applicant.name}</h3>
          <p className="text-xs text-gray-500">Status: {applicant.applicationStatus}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2"><FaEnvelope /> {applicant.email}</div>
        <div className="flex items-center gap-2"><FaPhone /> {applicant.phone}</div>
        {applicant.website && (
          <div className="flex items-center gap-2">
            <FaGlobe />
            <a href={applicant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {applicant.website}
            </a>
          </div>
        )}
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          Applied: {new Date(applicant.timestamp).toLocaleString()}
        </div>
      </div>

      <div className="mt-4 space-y-1 text-sm">
        <a
          href={`${BASE_URL}/uploads/resumes/${applicant.resume}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 underline"
        >
          <FaRegFilePdf /> View Resume
        </a>
        <a
          href={`${BASE_URL}/uploads/cover-letters/${applicant.coverLetter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 underline"
        >
          <FaFileAlt /> View Cover Letter
        </a>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
          onClick={() => alert(`Viewing profile of ${applicant.name}`)}
        >
          View Profile
        </button>
        <button
          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
          onClick={() => onSchedule(applicant)}
        >
          Schedule
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard;
