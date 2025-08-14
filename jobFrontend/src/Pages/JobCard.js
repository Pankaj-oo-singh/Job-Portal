// import React from 'react';
// import { FaUsers, FaBriefcase, FaGlobe, FaCalendarAlt } from 'react-icons/fa';

// const JobCard = ({ job }) => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
//       {/* Job Title & Posted Date */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
//         <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
//         <span className="text-sm text-gray-500 flex items-center gap-1">
//           <FaCalendarAlt className="text-gray-400" />
//           {new Date(job.date).toLocaleDateString()}
//         </span>
//       </div>

//       {/* Company Name */}
//       <p className="text-blue-700 font-medium mb-3">{job.company || 'Unknown Company'}</p>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
//         <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
//           {job.level || 'Entry Level'}
//         </span>
//         <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
//           {job.type || 'Full-time'}
//         </span>
//         <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
//           {job.mode || 'Remote'}
//         </span>
//       </div>

//       {/* Summary */}
//       <p className="text-gray-700 mb-4 line-clamp-3">{job.summary}</p>

//       {/* Stats */}
//       <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mt-2 gap-4">
//         <div className="flex items-center gap-2">
//           <FaUsers className="text-blue-500" />
//           <span>{job.applicants || 0} Applicants</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <FaBriefcase className="text-green-600" />
//           <span>₹{job.package?.toLocaleString() || '0'}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
// import React from 'react';
// import { FaUsers, FaBriefcase, FaGlobe, FaCalendarAlt } from 'react-icons/fa';

// const JobCard = ({ job }) => {
//   const {
//     title,
//     company,
//     applicants,
//     level,
//     type,
//     mode,
//     summary,
//     package: salary,
//     date,
//   } = job;

//   return (
//     <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-700">
//       {/* Title & Date */}
//       <div className="flex justify-between items-start md:items-center mb-2">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
//         <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
//           <FaCalendarAlt className="text-gray-400" />
//           {new Date(date).toLocaleDateString()}
//         </span>
//       </div>

//       {/* Company */}
//       <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{company || 'Unknown Company'}</p>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
//         <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full">
//           {level || 'Entry Level'}
//         </span>
//         <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-white px-3 py-1 rounded-full">
//           {type || 'Full-time'}
//         </span>
//         <span className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white px-3 py-1 rounded-full">
//           {mode || 'Remote'}
//         </span>
//       </div>

//       {/* Summary */}
//       <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>

//       {/* Stats */}
//       <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
//         <div className="flex items-center gap-2">
//           <FaUsers className="text-blue-500" />
//           <span>{applicants || 0} Applicants</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaBriefcase className="text-green-600" />
//           <span>₹{salary?.toLocaleString() || '0'}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaUsers, FaBriefcase, FaGlobe, FaCalendarAlt } from 'react-icons/fa';

// const JobCard = ({ job }) => {
//   const {
//     id,
//     title,
//     company,
//     applicants,
//     level,
//     type,
//     mode,
//     summary,
//     package: salary,
//     date,
//   } = job;

//   return (
//     <Link to={`/job/${id}`} className="block">
//       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-700">
//         {/* Title & Date */}
//         <div className="flex justify-between items-start md:items-center mb-2">
//           <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
//           <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
//             <FaCalendarAlt className="text-gray-400" />
//             {new Date(date).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Company */}
//         <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{company || 'Unknown Company'}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
//           <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full">
//             {level || 'Entry Level'}
//           </span>
//           <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-white px-3 py-1 rounded-full">
//             {type || 'Full-time'}
//           </span>
//           <span className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white px-3 py-1 rounded-full">
//             {mode || 'Remote'}
//           </span>
//         </div>

//         {/* Summary */}
//         <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>

//         {/* Stats */}
//         <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
//           <div className="flex items-center gap-2">
//             <FaUsers className="text-blue-500" />
//             <span>{applicants || 0} Applicants</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaBriefcase className="text-green-600" />
//             <span>₹{salary?.toLocaleString() || '0'}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// // export default JobCard;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUsers, FaBriefcase, FaGlobe, FaCalendarAlt, FaRegBookmark, FaBookmark } from 'react-icons/fa';

// const JobCard = ({ job, onSave }) => {
//   const {
//     id,
//     title,
//     company,
//     applicants,
//     level,
//     type,
//     mode,
//     summary,
//     package: salary,
//     date,
//   } = job;

//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
//     setIsSaved(savedJobs.includes(id));
//   }, [id]);

//   const handleSave = (e) => {
//     e.preventDefault(); // Prevent navigating when clicking the icon
//     onSave(job); // callback to parent
//     setIsSaved(prev => !prev);
//   };

//   return (
//     <Link to={`/job/${id}`} className="block relative group">
//       {/* Save Icon */}
//       <button
//         onClick={handleSave}
//         className="absolute top-3 right-3 z-10 text-xl text-gray-500 hover:text-blue-600"
//         title={isSaved ? 'Unsave' : 'Save'}
//       >
//         {isSaved ? <FaBookmark /> : <FaRegBookmark />}
//       </button>

//       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-700">
//         {/* Title & Date */}
//         <div className="flex justify-between items-start md:items-center mb-2">
//           <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
//           <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
//             <FaCalendarAlt className="text-gray-400" />
//             {new Date(date).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Company */}
//         <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{company || 'Unknown Company'}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
//           <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full">
//             {level || 'Entry Level'}
//           </span>
//           <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-white px-3 py-1 rounded-full">
//             {type || 'Full-time'}
//           </span>
//           <span className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white px-3 py-1 rounded-full">
//             {mode || 'Remote'}
//           </span>
//         </div>

//         {/* Summary */}
//         <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>

//         {/* Stats */}
//         <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
//           <div className="flex items-center gap-2">
//             <FaUsers className="text-blue-500" />
//             <span>{applicants || 0} Applicants</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaBriefcase className="text-green-600" />
//             <span>₹{salary?.toLocaleString() || '0'}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default JobCard;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUsers, FaBriefcase, FaCalendarAlt, FaRegBookmark, FaBookmark } from 'react-icons/fa';
// import { getToken } from '../Utils/Jwt-Utils';  // Adjust path if needed

// const BASE_URL = 'http://localhost:8080';

// const JobCard = ({ job, onSave }) => {
//   const {
//     id,
//     title,
//     company,
//     applicants,
//     level,
//     type,
//     mode,
//     summary,
//     jobstatus,
    
//     package: salary,
//     date,
//   } = job;

//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     // Optionally, fetch saved jobs from backend or localStorage here to set initial saved state
//     // For now, assume false on mount
//   }, [id]);

//   const handleSave = async (e) => {
//     e.preventDefault();

//     const token = getToken(); // Fetch 'authToken' from localStorage

//     if (!token) {
//       alert('Please login to save jobs.');
//       return;
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/job/save/${id}`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
        
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       setIsSaved(prev => !prev);

//       if (onSave) {
//         onSave(job);
//       }
//     } catch (error) {
//       console.error('Failed to save job:', error);
//       alert('Failed to save job. Please try again.');
//     }
//   };

//   return (
//     <Link to={`/job/${id}`} className="block relative group">
//       {/* Save Icon */}
//       <button
//         onClick={handleSave}
//         className="absolute top-3 right-3 z-10 text-xl text-gray-500 hover:text-blue-600"
//         title={isSaved ? 'Unsave' : 'Save'}
//         type="button"
//       >
//         {isSaved ? <FaBookmark /> : <FaRegBookmark />}
//       </button>

//       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-700">
//         {/* Title & Date */}
//         <div className="flex justify-between items-start md:items-center mb-2">
//           <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
//           <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
//             <FaCalendarAlt className="text-gray-400" />
//             {new Date(date).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Company */}
//         <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{company || 'Unknown Company'}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
//           <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full">
//             {level || 'Entry Level'}
//           </span>
//           <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-white px-3 py-1 rounded-full">
//             {type || 'Full-time'}
//           </span>
//           <span className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white px-3 py-1 rounded-full">
//             {mode || 'Remote'}
//           </span>
           
          
           
//         </div>

//         {/* Summary */}
//         <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>

//         {/* Stats */}
//         <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
//           <div className="flex items-center gap-2">
//             <FaUsers className="text-blue-500" />
//             <span>{applicants || 0} Applicants</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaBriefcase className="text-green-600" />
//             <span>₹{salary?.toLocaleString() || '0'}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default JobCard;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaBriefcase,
  FaCalendarAlt,
  FaRegBookmark,
  FaBookmark
} from 'react-icons/fa';
import { getToken } from '../Utils/Jwt-Utils'; // Adjust the path as necessary

const BASE_URL = 'http://localhost:8080';

const JobCard = ({ job, onSave }) => {
  const {
    id,
    title,
    company,
    applicants,
    level,
    type,
    mode,
    summary,
    package: salary,
    date,
    status,
  } = job;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // You can check if the job is already saved here
    setIsSaved(false); // default to false
  }, [id]);

  const handleSave = async (e) => {
    e.preventDefault();

    const token = getToken();
    if (!token) {
      alert('Please login to save jobs.');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/job/save/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
      }

      setIsSaved(prev => !prev);
      if (onSave) onSave(job);
    } catch (error) {
      console.error('Failed to save job:', error);
      alert('Could not save job. Try again.');
    }
  };

  return (
    <Link to={`/job/${id}`} className="block relative group">
      {/* Save Icon */}
      <button
        onClick={handleSave}
        className="absolute top-3 right-3 z-10 text-xl text-gray-500 hover:text-blue-600"
        title={isSaved ? 'Unsave' : 'Save'}
        type="button"
      >
        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      </button>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-700">
        {/* Title & Date */}
        <div className="flex justify-between items-start md:items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <FaCalendarAlt className="text-gray-400" />
            {new Date(date).toLocaleDateString()}
          </span>
        </div>

        {/* Company */}
        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
          {company || 'Unknown Company'}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
          {level && (
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full">
              {level}
            </span>
          )}
          {type && (
            <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-white px-3 py-1 rounded-full">
              {type}
            </span>
          )}
          {mode && (
            <span className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white px-3 py-1 rounded-full">
              {mode}
            </span>
          )}
          {status && (
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white px-3 py-1 rounded-full">
              {status}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <FaUsers className="text-blue-500" />
            <span>{applicants} Applicants</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-green-600" />
            <span>₹{salary?.toLocaleString() || '0'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
