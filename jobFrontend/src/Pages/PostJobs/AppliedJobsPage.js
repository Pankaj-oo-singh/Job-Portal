// import React from "react";

// // Sample data you provided (replace this with API fetch in real app)
// const jobsData = [
//   {
//     jobTitle: "Email Marketing ",
//     applicants: [
//       {
//         applicantId: 5,
//         email: "sonuggg94@gmail.com",
//         applicationStatus: "APPLIED",
//         resume:
//           "610a0d51-54f8-42b0-8a68-4728e89910b7_PankajSingh_InternshalaResume (3) (3).pdf",
//       },
//     ],
//     company: "Amazon",
//     location: "Delhi",
//     experience: "2",
//     description: "dfa aufyaueyf offauyydyeueg mjkehufiqu euuyfueqy",
//     skillsRequired: ["react", "springboot", "Html"],
//     id: 2,
//   },
//   {
//     jobTitle: "Software Development intern",
//     applicants: [
//       {
//         applicantId: 4,
//         email: "sonuggg94@gmail.com",
//         applicationStatus: "APPLIED",
//         resume:
//           "a18c67b3-93b5-4f26-aa7e-31cf9c7d92b1_PankajSingh_InternshalaResume (3) (3).pdf",
//       },
//       {
//         applicantId: 2,
//         email: "pankaj1@gmail.com",
//         applicationStatus: "APPLIED",
//       },
//     ],
//     company: "Amazon",
//     location: "Delhi",
//     experience: "5",
//     description: "ejhfjuie eyuq uh qeiuq wet qu weutqei e eyyqe ",
//     skillsRequired: ["react", "springboot", "Html"],
//     id: 3,
//   },
// ];

// const loggedInUserEmail = "sonuggg94@gmail.com";

// const AppliedJobsPage = () => {
//   // Filter jobs where logged-in user has applicationStatus = "APPLIED"
//   const appliedJobs = jobsData.filter((job) =>
//     job.applicants.some(
//       (applicant) =>
//         applicant.email === loggedInUserEmail &&
//         applicant.applicationStatus === "APPLIED"
//     )
//   );

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Applied Jobs</h1>

//       {appliedJobs.length === 0 && <p>No applied jobs found.</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {appliedJobs.map((job) => {
//           const applicant = job.applicants.find(
//             (a) => a.email === loggedInUserEmail
//           );

//           return (
//             <div
//               key={job.id}
//               className="border rounded-lg shadow-md p-5 bg-white hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold mb-1">{job.jobTitle}</h2>
//               <p className="text-gray-600 mb-1">
//                 <strong>Company:</strong> {job.company}
//               </p>
//               <p className="text-gray-600 mb-1">
//                 <strong>Location:</strong> {job.location}
//               </p>
//               <p className="text-gray-600 mb-1">
//                 <strong>Experience:</strong> {job.experience} years
//               </p>
//               <p className="mb-2">{job.description}</p>
//               <p className="mb-2">
//                 <strong>Skills Required:</strong>{" "}
//                 {job.skillsRequired.join(", ")}
//               </p>
//               <p className="mb-2">
//                 <strong>Application Status:</strong>{" "}
//                 {applicant ? applicant.applicationStatus : "N/A"}
//               </p>
//               <a
//                 href={applicant?.resume || "#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 View Resume
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AppliedJobsPage;
import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch jobs from backend
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/job/applied`, {
        withCredentials: true, // if your backend needs cookies/auth
      });
      setJobs(response.data);
    } catch (err) {
      setError("Failed to fetch jobs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Applied Jobs</h2>
      {jobs.length === 0 && <p>No applied jobs found.</p>}

      <ul className="space-y-4">
        {jobs.map((job) => {
          // Find applicant details for logged-in user (optional)
          // Here you can filter by user email if needed
          const applicant = job.applicants && job.applicants[0];

          return (
            <li
              key={job.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>{job.description}</p>
              <p>
                <strong>Experience:</strong> {job.experience}
              </p>
              <p>
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p>
                <strong>Skills Required:</strong> {job.skillsRequired.join(", ")}
              </p>

              {applicant && (
                <>
                  <p>
                    <strong>Applicant Name:</strong> {applicant.name}
                  </p>
                  <p>
                    <strong>Application Status:</strong>{" "}
                    {applicant.applicationStatus}
                  </p>
                  <a
                    href={applicant.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppliedJobs;
