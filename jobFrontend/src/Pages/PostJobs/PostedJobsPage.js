// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL, getHeaders } from '../../Api/Constant';

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   const fetchPostedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0]); // Set default selected job
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderTabContent = () => {
//     if (!selectedJob) return null;

//     switch (activeTab) {
//       case 'Overview':
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         return selectedJob.applicants?.length > 0 ? (
//           <ul className="list-disc pl-6">
//             {selectedJob.applicants.map((applicant, idx) => (
//               <li key={idx}>
//                 {applicant.name} ({applicant.email}) – Status: {applicant.applicationStatus}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No applicants for this job yet.</p>
//         );

//       case 'Invited':
//         const invited = selectedJob.applicants?.filter(a => a.applicationStatus === 'INVITED');
//         return invited?.length > 0 ? (
//           <ul className="list-disc pl-6">
//             {invited.map((applicant, idx) => (
//               <li key={idx}>
//                 {applicant.name} ({applicant.email}) – Status: {applicant.applicationStatus}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No invited candidates yet.</p>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loading) return <p>Loading jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job list */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default PostedJobsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL} from '../../Api/Constant';
// import { getToken } from '../../Utils/Jwt-Utils';

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loadingJobs, setLoadingJobs] = useState(true);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   // Fetch posted jobs
//   const fetchPostedJobs = async () => {
//     try {
//       setLoadingJobs(true);
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0] || null);
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoadingJobs(false);
//     }
//   };

//   // Fetch all applicants for jobs posted by current user
//   const fetchApplicants = async () => {
//     try {
//       setLoadingApplicants(true);
//       const response = await axios.get(`${BASE_URL}/job/posted-jobs/applicants`, {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Failed to fetch applicants:', error);
//       setApplicants([]);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   // When tab changes, if it's Applicants tab, fetch applicants
//   useEffect(() => {
//     if (activeTab === 'Applicants') {
//       fetchApplicants();
//     }
//   }, [activeTab]);

//   const renderTabContent = () => {
//     if (!selectedJob && activeTab !== 'Applicants') return null;

//     switch (activeTab) {
//       case 'Overview':
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         if (loadingApplicants) return <p>Loading applicants...</p>;

//         if (applicants.length === 0) return <p>No applicants for your posted jobs yet.</p>;

//         return (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {applicants.map((applicant) => (
//               <div key={applicant.applicantId} className="border rounded p-4 shadow-sm">
//                 <h3 className="font-semibold">{applicant.name}</h3>
//                 <p><strong>Email:</strong> {applicant.email}</p>
//                 <p><strong>Phone:</strong> {applicant.phone}</p>
//                 <p><strong>Website:</strong> <a href={applicant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{applicant.website}</a></p>
//                 <p><strong>Application Status:</strong> {applicant.applicationStatus}</p>
//                 <p><strong>Applied On:</strong> {new Date(applicant.timestamp).toLocaleString()}</p>
//                 <p>
//                   <strong>Resume:</strong> {' '}
//                   <a href={`${BASE_URL}/files/${applicant.resume}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                     View Resume
//                   </a>
//                 </p>
//                 <p>
//                   <strong>Cover Letter:</strong> {' '}
//                   <a href={`${BASE_URL}/files/${applicant.coverLetter}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                     View Cover Letter
//                   </a>
//                 </p>
//               </div>
//             ))}
//           </div>
//         );

//       case 'Invited':
//         // Show invited applicants from all applicants
//         const invitedApplicants = applicants.filter(a => a.applicationStatus === 'INVITED');
//         if (loadingApplicants) return <p>Loading invited applicants...</p>;

//         if (invitedApplicants.length === 0) return <p>No invited candidates yet.</p>;

//         return (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {invitedApplicants.map((applicant) => (
//               <div key={applicant.applicantId} className="border rounded p-4 shadow-sm">
//                 <h3 className="font-semibold">{applicant.name}</h3>
//                 <p><strong>Email:</strong> {applicant.email}</p>
//                 <p><strong>Phone:</strong> {applicant.phone}</p>
//                 <p><strong>Website:</strong> <a href={applicant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{applicant.website}</a></p>
//                 <p><strong>Application Status:</strong> {applicant.applicationStatus}</p>
//                 <p><strong>Applied On:</strong> {new Date(applicant.timestamp).toLocaleString()}</p>
//                 <p>
//                   <strong>Resume:</strong> {' '}
//                   <a href={`${BASE_URL}/files/${applicant.resume}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                     View Resume
//                   </a>
//                 </p>
//                 <p>
//                   <strong>Cover Letter:</strong> {' '}
//                   <a href={`${BASE_URL}/files/${applicant.coverLetter}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                     View Cover Letter
//                   </a>
//                 </p>
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loadingJobs) return <p>Loading posted jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job list */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default PostedJobsPage;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL, getHeaders } from '../../Api/Constant';

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loading, setLoading] = useState(true);
//   const [applicants, setApplicants] = useState([]);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   // Fetch all posted jobs
//   const fetchPostedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0] || null); // Default select first job if exists
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch applicants for the current user (all jobs posted by user)
//   const fetchApplicants = async () => {
//     setLoadingApplicants(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted-jobs/applicants`, {
//         headers: getHeaders(),
//       });
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Failed to fetch applicants:', error);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   // Whenever Applicants tab is activated, load applicants
//   useEffect(() => {
//     if (activeTab === 'Applicants') {
//       fetchApplicants();
//     }
//   }, [activeTab]);

//   const renderTabContent = () => {
//     if (!selectedJob && activeTab !== 'Applicants') return null;

//     switch (activeTab) {
//       case 'Overview':
//         if (!selectedJob) return <p>No job selected.</p>;
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         if (loadingApplicants) return <p>Loading applicants...</p>;
//         if (applicants.length === 0) return <p>No applicants found for your posted jobs.</p>;

//         return (
//           <div className="space-y-4">
//             {applicants.map((applicant) => (
//               <div key={applicant.applicantId} className="border rounded p-4 shadow-md">
//                 <p><strong>Name:</strong> {applicant.name}</p>
//                 <p><strong>Email:</strong> {applicant.email}</p>
//                 <p><strong>Phone:</strong> {applicant.phone}</p>
//                 <p><strong>Website:</strong> <a href={applicant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{applicant.website}</a></p>
//                 <p><strong>Application Status:</strong> {applicant.applicationStatus}</p>
//                 <p><strong>Applied At:</strong> {new Date(applicant.timestamp).toLocaleString()}</p>
//                 <p>
//                   <strong>Resume:</strong>{' '}
//                   <a
//                     href={`${BASE_URL}/uploads/resumes/${applicant.resume}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     View Resume
//                   </a>
//                 </p>
//                 <p>
//                   <strong>Cover Letter:</strong>{' '}
//                   <a
//                     href={`${BASE_URL}/uploads/cover-letters/${applicant.coverLetter}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     View Cover Letter
//                   </a>
//                 </p>
//               </div>
//             ))}
//           </div>
//         );

//       case 'Invited':
//         if (!selectedJob) return <p>No job selected.</p>;
//         const invited = selectedJob.applicants?.filter(a => a.applicationStatus === 'INVITED');
//         if (!invited || invited.length === 0) return <p>No invited candidates yet.</p>;

//         return (
//           <ul className="list-disc pl-6">
//             {invited.map((applicant, idx) => (
//               <li key={idx}>
//                 {applicant.name} ({applicant.email}) – Status: {applicant.applicationStatus}
//               </li>
//             ))}
//           </ul>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loading) return <p>Loading jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job list */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default PostedJobsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL, getHeaders } from '../../Api/Constant'
// import ApplicantCard from './ApplicantCard' // 👈 import the reusable card

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loading, setLoading] = useState(true);
//   const [applicants, setApplicants] = useState([]);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   const fetchPostedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0] || null);
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchApplicants = async () => {
//     setLoadingApplicants(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted-jobs/applicants`, {
//         headers: getHeaders(),
//       });
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Failed to fetch applicants:', error);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === 'Applicants') {
//       fetchApplicants();
//     }
//   }, [activeTab]);

//   const renderTabContent = () => {
//     if (!selectedJob && activeTab !== 'Applicants') return null;

//     switch (activeTab) {
//       case 'Overview':
//         if (!selectedJob) return <p>No job selected.</p>;
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         if (loadingApplicants) return <p>Loading applicants...</p>;
//         if (applicants.length === 0) return <p>No applicants found for your posted jobs.</p>;

//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {applicants.map((applicant) => (
//               <ApplicantCard key={applicant.applicantId} applicant={applicant} />
//             ))}
//           </div>
//         );

//       case 'Invited':
//         if (!selectedJob) return <p>No job selected.</p>;
//         const invited = selectedJob.applicants?.filter(a => a.applicationStatus === 'INVITED');
//         if (!invited || invited.length === 0) return <p>No invited candidates yet.</p>;

//         return (
//           <ul className="list-disc pl-6">
//             {invited.map((applicant, idx) => (
//               <li key={idx}>
//                 {applicant.name} ({applicant.email}) – Status: {applicant.applicationStatus}
//               </li>
//             ))}
//           </ul>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loading) return <p>Loading jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job List */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Tab Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default PostedJobsPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL, getHeaders } from '../../Api/Constant';
// import ApplicantCard from './ApplicantCard';

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loading, setLoading] = useState(true);
//   const [applicants, setApplicants] = useState([]);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);
//   const [scheduleTime, setScheduleTime] = useState('');

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   const fetchPostedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0] || null);
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchApplicants = async () => {
//     setLoadingApplicants(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted-jobs/applicants`, {
//         headers: getHeaders(),
//       });
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Failed to fetch applicants:', error);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === 'Applicants') {
//       fetchApplicants();
//     }
//   }, [activeTab]);

//   const renderTabContent = () => {
//     if (!selectedJob && activeTab !== 'Applicants') return null;

//     switch (activeTab) {
//       case 'Overview':
//         if (!selectedJob) return <p>No job selected.</p>;
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         if (loadingApplicants) return <p>Loading applicants...</p>;
//         if (applicants.length === 0) return <p>No applicants found for your posted jobs.</p>;

//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {applicants.map((applicant) => (
//               <ApplicantCard
//                 key={applicant.applicantId}
//                 applicant={applicant}
//                 onSchedule={(app) => {
//                   setSelectedApplicant(app);
//                   setShowModal(true);
//                 }}
//               />
//             ))}
//           </div>
//         );

//       case 'Invited':
//         if (!selectedJob) return <p>No job selected.</p>;
//         const invited = selectedJob.applicants?.filter(a => a.applicationStatus === 'INVITED');
//         if (!invited || invited.length === 0) return <p>No invited candidates yet.</p>;

//         return (
//           <ul className="list-disc pl-6">
//             {invited.map((applicant, idx) => (
//               <li key={idx}>
//                 {applicant.name} ({applicant.email}) – Status: {applicant.applicationStatus}
//               </li>
//             ))}
//           </ul>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loading) return <p>Loading jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job List */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>

//       {/* Modal for scheduling interview */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-xl font-semibold mb-4">Schedule Interview</h2>
//             <p className="mb-2">Applicant: <strong>{selectedApplicant?.name}</strong></p>

//             <label className="block mb-2 text-sm">Select Interview Time</label>
//             <input
//               type="datetime-local"
//               value={scheduleTime}
//               onChange={(e) => setScheduleTime(e.target.value)}
//               className="w-full border px-3 py-2 rounded mb-4"
//             />

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   // TODO: Send time to backend if needed
//                   console.log(`Interview scheduled for ${selectedApplicant?.name} at ${scheduleTime}`);
//                   setShowModal(false);
//                   setScheduleTime('');
//                   setActiveTab('Invited');
//                 }}
//                 className="px-4 py-2 bg-blue-600 text-white rounded"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostedJobsPage;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL, getHeaders } from '../../Api/Constant';
// import ApplicantCard from './ApplicantCard';
// import ScheduleInterviewModal from './ScheduleInterviewModal';

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loading, setLoading] = useState(true);
//   const [applicants, setApplicants] = useState([]);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   const fetchPostedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0] || null);
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchApplicants = async () => {
//     setLoadingApplicants(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted-jobs/applicants`, {
//         headers: getHeaders(),
//       });
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Failed to fetch applicants:', error);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === 'Applicants') {
//       fetchApplicants();
//     }
//   }, [activeTab]);

//   const renderTabContent = () => {
//     if (!selectedJob && activeTab !== 'Applicants') return null;

//     switch (activeTab) {
//       case 'Overview':
//         if (!selectedJob) return <p>No job selected.</p>;
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         if (loadingApplicants) return <p>Loading applicants...</p>;
//         if (applicants.length === 0) return <p>No applicants found for your posted jobs.</p>;

//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {applicants.map((applicant) => (
//               <ApplicantCard
//                 key={applicant.applicantId}
//                 applicant={applicant}
//                 onSchedule={(app) => {
//                   setSelectedApplicant(app);
//                   setShowModal(true);
//                 }}
//               />
//             ))}
//           </div>
//         );

//       case 'Invited':
//         if (!selectedJob) return <p>No job selected.</p>;
//         const invited = applicants.filter(a => a.applicationStatus === 'INTERVIEWING');
//         if (invited.length === 0) return <p>No invited candidates yet.</p>;

//         return (
//           <ul className="list-disc pl-6">
//             {invited.map((applicant) => (
//               <li key={applicant.applicantId}>
//                 {applicant.name} ({applicant.email}) – Scheduled Interview: {new Date(applicant.scheduledInterviewTime).toLocaleString()}
//               </li>
//             ))}
//           </ul>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loading) return <p>Loading jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job List */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>

//       {/* Schedule Interview Modal */}
//       <ScheduleInterviewModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         selectedApplicant={selectedApplicant}
//         fetchApplicants={fetchApplicants}
//         setActiveTab={setActiveTab}
//       />
//     </div>
//   );
// };

// export default PostedJobsPage;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL, getHeaders } from '../../Api/Constant';
// import ApplicantCard from './ApplicantCard';
// import ScheduleInterviewModal from './ScheduleInterviewModal';
// import InvitedApplicantCard from './InvitedApplicantCard';

// const TABS = ['Overview', 'Applicants', 'Invited'];

// const PostedJobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [loading, setLoading] = useState(true);
//   const [applicants, setApplicants] = useState([]);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   const fetchPostedJobs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setJobs(response.data);
//       setSelectedJob(response.data[0] || null);
//     } catch (error) {
//       console.error('Failed to fetch posted jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchApplicants = async () => {
//     setLoadingApplicants(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/job/posted-jobs/applicants`, {
//         headers: getHeaders(),
//       });
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Failed to fetch applicants:', error);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === 'Applicants' || activeTab === 'Invited') {
//       fetchApplicants();
//     }
//   }, [activeTab]);

//   // Function to update applicant status (ACCEPTED / REJECTED)
//   const updateApplicantStatus = async (applicantId, status) => {
//     try {
//       await axios.put(
//         `${BASE_URL}/applicant/${applicantId}/status`,
//         { status },
//         { headers: getHeaders() }
//       );
//       // Refresh applicants after update
//       await fetchApplicants();
//     } catch (error) {
//       console.error('Failed to update applicant status:', error);
//       alert('Failed to update status. Please try again.');
//     }
//   };

//   const renderTabContent = () => {
//     if (!selectedJob && activeTab !== 'Applicants') return null;

//     switch (activeTab) {
//       case 'Overview':
//         if (!selectedJob) return <p>No job selected.</p>;
//         return (
//           <div className="space-y-2">
//             <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
//             <p><strong>Company:</strong> {selectedJob.company}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Experience:</strong> {selectedJob.experience}</p>
//             <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
//             <p><strong>Package Offered:</strong> ₹{selectedJob.packageOffered}</p>
//             <p><strong>About:</strong> {selectedJob.about}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills Required:</strong> {selectedJob.skillsRequired?.join(', ')}</p>
//           </div>
//         );

//       case 'Applicants':
//         if (loadingApplicants) return <p>Loading applicants...</p>;
//         if (applicants.length === 0) return <p>No applicants found for your posted jobs.</p>;

//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {applicants.map((applicant) => (
//               <ApplicantCard
//                 key={applicant.applicantId}
//                 applicant={applicant}
//                 onSchedule={(app) => {
//                   setSelectedApplicant(app);
//                   setShowModal(true);
//                 }}
//               />
//             ))}
//           </div>
//         );

//       case 'Invited':
//         if (!selectedJob) return <p>No job selected.</p>;
//         const invited = applicants.filter(a => a.applicationStatus === 'INTERVIEWING');
//         if (invited.length === 0) return <p>No invited candidates yet.</p>;

//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {invited.map(applicant => (
//               <InvitedApplicantCard
//                 key={applicant.applicantId}
//                 applicant={applicant}
//                 onStatusChange={updateApplicantStatus}
//               />
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   if (loading) return <p>Loading jobs...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>

//       {/* Job List */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {jobs.map(job => (
//           <div
//             key={job.id}
//             onClick={() => {
//               setSelectedJob(job);
//               setActiveTab('Overview');
//             }}
//             className={`p-4 border rounded cursor-pointer w-64 shadow-md hover:bg-gray-100 ${
//               selectedJob?.id === job.id ? 'bg-blue-100 border-blue-500' : ''
//             }`}
//           >
//             <h3 className="font-semibold">{job.jobTitle}</h3>
//             <p className="text-sm">{job.company}</p>
//             <p className="text-sm text-gray-600">{job.location}</p>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
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

//       {/* Content */}
//       <div className="bg-white p-4 rounded shadow">{renderTabContent()}</div>

//       {/* Schedule Interview Modal */}
//       <ScheduleInterviewModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         selectedApplicant={selectedApplicant}
//         fetchApplicants={fetchApplicants}
//         setActiveTab={setActiveTab}
//       />
//     </div>
//   );
// };

// export default PostedJobsPage;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL, getHeaders } from "../../Api/Constant";
// import ApplicantCard from "./ApplicantCard";
// import InvitedApplicantCard from "./InvitedApplicantCard";
// import PostedJobCard from "./PostedJobCard";
// import ScheduleInterviewModal from "./ScheduleInterviewModal"; // import modal

// const tabs = ["Posted", "Applicants", "Invited"];

// const PostedJobsPage = () => {
//   const [activeTab, setActiveTab] = useState("Posted");
//   const [postedJobs, setPostedJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [applicants, setApplicants] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loadingApplicants, setLoadingApplicants] = useState(false);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);

//   const fetchPostedJobs = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${BASE_URL}/job/posted`, {
//         headers: getHeaders(),
//       });
//       setPostedJobs(res.data);
//       if (res.data.length > 0) {
//         setSelectedJob(res.data[0]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch posted jobs", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchApplicants = async () => {
//     if (!selectedJob) return;
//     setLoadingApplicants(true);
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/job/${selectedJob.id}/applicants`,
//         {
//           headers: getHeaders(),
//         }
//       );
//       setApplicants(response.data);
//     } catch (error) {
//       console.error("Failed to fetch applicants", error);
//     } finally {
//       setLoadingApplicants(false);
//     }
//   };

//   useEffect(() => {
//     fetchPostedJobs();
//   }, []);

//   useEffect(() => {
//     if ((activeTab === "Applicants" || activeTab === "Invited") && selectedJob) {
//       fetchApplicants();
//     }
//   }, [activeTab, selectedJob]);


//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">My Posted Jobs</h1>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Job Selector */}
//       {activeTab !== "Posted" && (
//         <div className="flex overflow-x-auto space-x-4 mb-6">
//           {postedJobs.map((job) => (
//             <div
//               key={job.id}
//               className={`cursor-pointer p-3 rounded-md shadow-md border ${
//                 selectedJob?.id === job.id ? "border-blue-500" : "border-gray-300"
//               }`}
//               onClick={() => setSelectedJob(job)}
//             >
//               <h2 className="font-semibold">{job.jobTitle}</h2>
//               <p className="text-sm text-gray-500">{job.company}</p>
//               <p className="text-sm text-gray-500">Description: {job.description}</p>
//               <p className="text-sm text-gray-500">Posted Time: {job.postTime}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Tab Content */}
//       {loading ? (
//         <p>Loading posted jobs...</p>
//       ) : activeTab === "Posted" ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {postedJobs.map((job) => (
//             <PostedJobCard key={job.id} job={job} />
//           ))}
//         </div>
//       ) : loadingApplicants ? (
//         <p>Loading applicants...</p>
//       ) : activeTab === "Applicants" ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {applicants.length === 0 ? (
//             <p>No applicants for this job.</p>
//           ) : (
//             applicants.map((applicant) => (
//               <ApplicantCard
//                 key={applicant.applicantId}
//                 applicant={applicant}
//                 jobId={selectedJob.id}
//                 setShowModal={setShowModal}
//                 setSelectedApplicant={setSelectedApplicant}
//               />
//             ))
//           )}
//         </div>
//       ) : (
//         // Invited
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {applicants
//             .filter((a) => a.applicationStatus === "INTERVIEWING")
//             .map((applicant) => (
//               <InvitedApplicantCard
//                 key={applicant.applicantId}
//                 applicant={applicant}
//                 jobId={selectedJob.id}
//               />
//             ))}
//         </div>
//       )}

//       {/* Modal */}
//       <ScheduleInterviewModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         selectedApplicant={selectedApplicant}
//         fetchApplicants={fetchApplicants}
//         setActiveTab={setActiveTab}
//       />
//     </div>
//   );
// };

// export default PostedJobsPage;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, getHeaders } from "../../Api/Constant";
import ApplicantCard from "./ApplicantCard";
import InvitedApplicantCard from "./InvitedApplicantCard";
import PostedJobCard from "./PostedJobCard";
import ScheduleInterviewModal from "./ScheduleInterviewModal"; // import modal

const tabs = ["Posted", "Applicants", "Invited"];

const PostedJobsPage = () => {
  const [activeTab, setActiveTab] = useState("Posted");
  const [postedJobs, setPostedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingApplicants, setLoadingApplicants] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const fetchPostedJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/job/posted`, {
        headers: getHeaders(),
      });
      setPostedJobs(res.data);
      if (res.data.length > 0) {
        setSelectedJob(res.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch posted jobs", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchApplicants = async () => {
    if (!selectedJob) return;
    setLoadingApplicants(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/job/${selectedJob.id}/applicants`,
        {
          headers: getHeaders(),
        }
      );
      setApplicants(response.data);
    } catch (error) {
      console.error("Failed to fetch applicants", error);
    } finally {
      setLoadingApplicants(false);
    }
  };

  useEffect(() => {
    fetchPostedJobs();
  }, []);

  useEffect(() => {
    if ((activeTab === "Applicants" || activeTab === "Invited") && selectedJob) {
      fetchApplicants();
    }
  }, [activeTab, selectedJob]);

  // Handler for schedule button click - sets selected applicant and opens modal
  const handleSchedule = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Posted Jobs</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Job Selector */}
      {activeTab !== "Posted" && (
        <div className="flex overflow-x-auto space-x-4 mb-6">
          {postedJobs.map((job) => (
            <div
              key={job.id}
              className={`cursor-pointer p-3 rounded-md shadow-md border ${
                selectedJob?.id === job.id ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <h2 className="font-semibold">{job.jobTitle}</h2>
              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-500">Description: {job.description}</p>
              <p className="text-sm text-gray-500">Posted Time: {job.postTime}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content */}
      {loading ? (
        <p>Loading posted jobs...</p>
      ) : activeTab === "Posted" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postedJobs.map((job) => (
            <PostedJobCard key={job.id} job={job} />
          ))}
        </div>
      ) : loadingApplicants ? (
        <p>Loading applicants...</p>
      ) : activeTab === "Applicants" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applicants.length === 0 ? (
            <p>No applicants for this job.</p>
          ) : (
            applicants.map((applicant) => (
              <ApplicantCard
                key={applicant.applicantId}
                applicant={applicant}
                jobId={selectedJob.id}
                onSchedule={handleSchedule}  // Pass single onSchedule callback here
              />
            ))
          )}
        </div>
      ) : (
        // Invited tab content
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applicants
            .filter((a) => a.applicationStatus === "INTERVIEWING")
            .map((applicant) => (
              <InvitedApplicantCard
                key={applicant.applicantId}
                applicant={applicant}
                jobId={selectedJob.id}
              />
            ))}
        </div>
      )}

      {/* Modal */}
      <ScheduleInterviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedApplicant={selectedApplicant}
        fetchApplicants={fetchApplicants}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default PostedJobsPage;
