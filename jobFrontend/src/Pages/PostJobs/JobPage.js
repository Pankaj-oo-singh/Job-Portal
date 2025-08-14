// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaMapMarkerAlt, FaBriefcase, FaClock, FaMoneyBillWave } from "react-icons/fa";

// const BASE_URL = "http://localhost:8080";

// const JobPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/job/${id}`);
//         if (!res.ok) throw new Error("Job not found");
//         const data = await res.json();
//         setJob(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
//         Loading job details...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
//         <p>{error}</p>
//         <button
//           onClick={() => navigate(-1)}
//           className="mt-4 px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6 min-h-screen bg-white rounded-lg shadow">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">{job.jobTitle}</h1>
//           <p className="text-indigo-600 font-medium mt-1">{job.company}</p>
//         </div>
//         <button
//           onClick={() => navigate(-1)}
//           className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
//         >
//           ← Back to Jobs
//         </button>
//       </div>

//       {/* Tags & Meta */}
//       <div className="flex flex-wrap gap-3 text-sm font-medium mb-6">
//         <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800">
//           <FaBriefcase /> {job.jobType}
//         </span>
//         <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-800">
//           <FaClock /> {job.experience}
//         </span>
//         <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-800">
//           <FaMapMarkerAlt /> {job.location}
//         </span>
//         <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
//           <FaMoneyBillWave /> ₹{job.packageOffered?.toLocaleString()}
//         </span>
//       </div>

//       {/* Description */}
//       <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
//         <h2 className="text-xl font-semibold mb-2">Job Description</h2>
//         <p className="whitespace-pre-line">{job.about}</p>
//       </div>

//       {/* Action Area (optional: Apply Now, Save, etc.) */}
//       <div className="mt-8 flex justify-end gap-4">
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
//           Apply Now
//         </button>
//         <button className="bg-gray-100 px-6 py-2 rounded-md hover:bg-gray-200">
//           Save Job
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobPage;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaMoneyBillWave } from "react-icons/fa";
import RecommendedJobs from "./RecommendedJobs";

const BASE_URL = "http://localhost:8080";

const JobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${BASE_URL}/job/${id}`);
        if (!res.ok) throw new Error("Job not found");
        const data = await res.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
        Loading job details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <p>{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{job.jobTitle}</h1>
          <p className="text-indigo-600 font-medium mt-1">{job.company}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
        >
          ← Back to Jobs
        </button>
      </div>

      {/* Meta Tags */}
      <div className="flex flex-wrap gap-3 text-sm font-medium mb-6">
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800">
          <FaBriefcase /> {job.jobType}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-800">
          <FaClock /> {job.experience}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-800">
          <FaMapMarkerAlt /> {job.location}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
          <FaMoneyBillWave /> ₹{job.packageOffered?.toLocaleString()}
        </span>
      </div>

      {/* Description */}
      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="whitespace-pre-line">{job.about}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end gap-4">
       <button
  onClick={() => navigate(`/apply/${job.id}`)}
  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
>
  Apply Now
</button>

      </div>

      {/* Recommended Jobs */}
      <RecommendedJobs currentJobId={job.id} jobTitle={job.jobTitle} />
    </div>
  );
};

export default JobPage;
