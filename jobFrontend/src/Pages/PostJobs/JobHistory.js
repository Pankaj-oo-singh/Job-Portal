// import React, { useState, useEffect } from 'react';
// import AppliedJobs from './AppliedJobs';

// const TAB_APPLIED = 'applied';
// const TAB_SAVED = 'saved';
// const TAB_OFFERED = 'offered';
// const TAB_INTERVIEWING = 'interviewing';

// const JobHistoryPage = () => {
//   const [activeTab, setActiveTab] = useState(TAB_APPLIED);
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch jobs whenever activeTab changes
//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`}`, {
//           credentials: 'include', // if using cookies for auth
//           headers: { 'Content-Type': 'application/json' }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch jobs');
//         }
//         const data = await response.json();
//         setJobs(data);
//       } catch (err) {
//         console.error(err);
//         setJobs([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, [activeTab]);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Job History</h1>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {[
//           { key: TAB_APPLIED, label: 'Applied' },
//           { key: TAB_SAVED, label: 'Saved' },
//           { key: TAB_OFFERED, label: 'Offered' },
//           { key: TAB_INTERVIEWING, label: 'Interviewing' },
//         ].map(tab => (
//           <button
//             key={tab.key}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-200'
//             }`}
//             onClick={() => setActiveTab(tab.key)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : jobs.length === 0 ? (
//         <p>No jobs found in this category.</p>
//       ) : (
//         <ul className="space-y-4">
//           {jobs.map(job => (
//             <li
//               key={job.id}
//               className="border rounded p-4 shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold">{job.title}</h2>
//               <p>{job.company}</p>
//               <p>Status: {job.status || activeTab}</p>
//               {/* Add more job info as you like */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // export default JobHistoryPage;
// import React, { useState, useEffect } from 'react';
// // import JobCard from '../FindJobs/JobCard'; 
// // // Reuse your JobCard component
// import JobCard from '../JobCard';

// const TAB_APPLIED = 'applied';
// const TAB_SAVED = 'saved';
// const TAB_OFFERED = 'offered';
// const TAB_INTERVIEWING = 'interviewing';

// const JobHistoryPage = () => {
//   const [activeTab, setActiveTab] = useState(TAB_APPLIED);
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       try {
//         let url = '';

//         // Define backend URL based on tab
//         switch (activeTab) {
//           case TAB_APPLIED:
//             url = 'http://localhost:8080/job/applied';
//             break;
//           case TAB_SAVED:
//             url = 'http://localhost:8080/job/saved'; // Adjust based on your backend
//             break;
//           case TAB_OFFERED:
//             url = 'http://localhost:8080/job/offered'; // Adjust based on your backend
//             break;
//           case TAB_INTERVIEWING:
//             url = 'http://localhost:8080/job/interviewing'; // Adjust based on your backend
//             break;
//           default:
//             url = '';
//         }

//         if (!url) return;

//         const response = await fetch(url, {
//           credentials: 'include', // needed for cookies if using Spring Security
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) throw new Error('Failed to fetch jobs');

//         const data = await response.json();
//         setJobs(data);
//       } catch (err) {
//         console.error(err);
//         setJobs([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, [activeTab]);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Job History</h1>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {[
//           { key: TAB_APPLIED, label: 'Applied' },
//           { key: TAB_SAVED, label: 'Saved' },
//           { key: TAB_OFFERED, label: 'Offered' },
//           { key: TAB_INTERVIEWING, label: 'Interviewing' },
//         ].map((tab) => (
//           <button
//             key={tab.key}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-200'
//             }`}
//             onClick={() => setActiveTab(tab.key)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : jobs.length === 0 ? (
//         <p>No jobs found in this category.</p>
//       ) : (
//         <div className="grid gap-6">
//           {jobs.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // // export default JobHistoryPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TABS = {
//   APPLIED: 'APPLIED',
//   SAVED: 'SAVED',
//   OFFERED: 'OFFERED',
//   INTERVIEWING: 'INTERVIEWING'
// };

// const BASE_URL = 'http://localhost:8080';

// const JobHistoryPage = () => {
//   const [activeTab, setActiveTab] = useState(TABS.APPLIED);
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);

 
//   const fetchJobs = async (status) => {
//   try {
//     setLoading(true);
//     const response = await axios.get(`${BASE_URL}/job/applied`, {
//       params: { status },
//       withCredentials: true,
//     });
//     console.log("Axios response data:", response.data);  // <-- add this line
//     setJobs(response.data);
//   } catch (error) {
//     console.error('Error fetching jobs:', error);
//   } finally {
//     setLoading(false);
//   }
// };


//   useEffect(() => {
//     fetchJobs(activeTab);
//   }, [activeTab]);

//   return (
//     <div className="job-history-container">
//       <h2 className="text-xl font-semibold mb-4">Job History</h2>

//       <div className="tabs flex gap-4 mb-4">
//         {Object.values(TABS).map((tab) => (
//           <button
//             key={tab}
//             className={`py-2 px-4 rounded ${
//               activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab.charAt(0) + tab.slice(1).toLowerCase()}
//           </button>
//         ))}
//       </div>

//       {loading ? (
//         <p>Loading {activeTab.toLowerCase()} jobs...</p>
//       ) : jobs.length === 0 ? (
//         <p>No {activeTab.toLowerCase()} jobs found.</p>
//       ) : (
//         <ul className="job-list space-y-4">
//           {jobs.map((job) => (
//             <li key={job.id} className="p-4 border rounded shadow">
//               <h4 className="font-bold text-lg">{job.jobTitle}</h4>
//               <p className="text-sm text-gray-600">
//                 {job.companyName} - {job.location}
//               </p>
//               <p className="text-sm mt-2">{job.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default JobHistoryPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getHeaders, BASE_URL } from '../../Api/Constant';

// const JobHistoryPage = () => {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAppliedJobs();
//   }, []);

//   const fetchAppliedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/applied`, {
//         headers: getHeaders(),
//       });

//       console.log("✅ Raw response data from /job/applied:", response.data);

//       setAppliedJobs(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("❌ Error fetching applied jobs:", error);
//       setLoading(false);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Applied Jobs</h2>
//       {appliedJobs.map((job) => (
//         <div key={job.id} className="border p-4 mb-4 rounded shadow">
//           <h3 className="text-lg font-semibold">{job.jobTitle}</h3>
//           <p><strong>Company:</strong> {job.company}</p>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Experience:</strong> {job.experience} years</p>
//           <p><strong>Skills Required:</strong> {job.skillsRequired.join(', ')}</p>
//           <p><strong>Description:</strong> {job.description}</p>

//           <div className="mt-2">
//             <h4 className="font-medium">Applicants:</h4>
//             <ul className="list-disc pl-6">
//               {job.applicants.map((applicant, index) => (
//                 <li key={index}>
//                   {applicant.name} - {applicant.email} - Status: {applicant.applicationStatus}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobHistoryPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getHeaders, BASE_URL } from '../../Api/Constant';

// const TABS = ["Applied", "Saved", "Offered", "Interviewing"];

// const JobHistoryPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("Applied");

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/applied`, {
//         headers: getHeaders(),
//       });

//       console.log("✅ Raw response data from /job/applied:", response.data);

//       setJobs(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("❌ Error fetching applied jobs:", error);
//       setLoading(false);
//     }
//   };

//   const getFilteredJobs = () => {
//     return jobs.filter(job =>
//       job.applicants.some(applicant => applicant.applicationStatus === activeTab.toUpperCase())
//     );
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Job History</h2>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {TABS.map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Jobs */}
//       {getFilteredJobs().map(job => (
//         <div key={job.id} className="border p-4 mb-4 rounded shadow">
//           <h3 className="text-lg font-semibold">{job.jobTitle}</h3>
//           <p><strong>Company:</strong> {job.company}</p>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Experience:</strong> {job.experience} years</p>
//           <p><strong>Skills Required:</strong> {job.skillsRequired.join(', ')}</p>
//           <p><strong>Description:</strong> {job.description}</p>

//           <div className="mt-2">
//             <h4 className="font-medium">Applicants with status {activeTab.toUpperCase()}:</h4>
//             <ul className="list-disc pl-6">
//               {job.applicants
//                 .filter(applicant => applicant.applicationStatus === activeTab.toUpperCase())
//                 .map((applicant, index) => (
//                   <li key={index}>
//                     {applicant.name} - {applicant.email} - Status: {applicant.applicationStatus}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobHistoryPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getHeaders, BASE_URL } from '../../Api/Constant';

const TABS = ["Applied", "Saved", "Offered", "Interviewing"];

const JobHistoryPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Applied");

  useEffect(() => {
    fetchJobs(activeTab);
  }, [activeTab]);

  const fetchJobs = async (tab) => {
    setLoading(true);
    try {
      let url = '';
      if (tab === "Applied") url = `${BASE_URL}/job/applied`;
      else if (tab === "Saved") url = `${BASE_URL}/job/saved`;
      else if (tab === "Offered") url = `${BASE_URL}/job/offered`;
      else if (tab === "Interviewing") url = `${BASE_URL}/job/interviewing`;
      else url = `${BASE_URL}/job/applied`;

      const response = await axios.get(url, {
        headers: getHeaders(),
      });

      console.log(`✅ Raw response data from ${url}:`, response.data);
      setJobs(response.data);
    } catch (error) {
      console.error("❌ Error fetching jobs:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredJobs = () => {
    if (activeTab === "Saved") {
      // saved jobs come directly from backend
      return jobs;
    }
    // for other tabs, filter jobs by applicant status
    return jobs.filter(job =>
      job.applicants.some(applicant => applicant.applicationStatus === activeTab.toUpperCase())
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job History</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Jobs */}
      {getFilteredJobs().length === 0 ? (
        <p>No {activeTab.toLowerCase()} jobs found.</p>
      ) : (
        getFilteredJobs().map(job => (
          <div key={job.id} className="border p-4 mb-4 rounded shadow">
            <h3 className="text-lg font-semibold">{job.jobTitle}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Experience:</strong> {job.experience} years</p>
            <p><strong>Skills Required:</strong> {job.skillsRequired.join(', ')}</p>
            <p><strong>Description:</strong> {job.description}</p>

            {/* Show applicants only for non-Saved tabs */}
            {activeTab !== "Saved" && (
              <div className="mt-2">
                <h4 className="font-medium">Applicants with status {activeTab.toUpperCase()}:</h4>
                <ul className="list-disc pl-6">
                  {job.applicants
                    .filter(applicant => applicant.applicationStatus === activeTab.toUpperCase())
                    .map((applicant, index) => (
                      <li key={index}>
                        {applicant.name} - {applicant.email} - Status: {applicant.applicationStatus}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobHistoryPage;
