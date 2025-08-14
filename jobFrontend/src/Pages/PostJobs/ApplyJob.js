// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const BASE_URL = "http://localhost:8080";

// const ApplyJob = () => {
//   const { id } = useParams(); // job id from route
//   const navigate = useNavigate();

//   const [job, setJob] = useState(null);
//   const [coverLetter, setCoverLetter] = useState("");
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/job/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch job");
//         const data = await res.json();
//         setJob(data);
//       } catch (err) {
//         toast.error("Error loading job");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       toast.error("You must be logged in to apply");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("jobId", id);
//     formData.append("coverLetter", coverLetter);
//     if (resume) formData.append("resume", resume);

//     try {
//       const res = await fetch(`${BASE_URL}/job/apply`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (res.ok) {
//         toast.success("Application submitted!");
//         navigate("/job-history");
//       } else {
//         toast.error("Application failed.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong.");
//     }
//   };

//   if (loading) {
//     return <div className="text-center mt-10 text-gray-600">Loading job details...</div>;
//   }

//   if (!job) {
//     return <div className="text-center mt-10 text-red-500">Job not found</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 mt-6 bg-white rounded-xl shadow">
//       <h1 className="text-2xl font-bold mb-4">Apply for: {job.jobTitle}</h1>
//       <p className="text-gray-600 mb-6">{job.company} • {job.location}</p>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block font-medium mb-1">Cover Letter</label>
//           <textarea
//             value={coverLetter}
//             onChange={(e) => setCoverLetter(e.target.value)}
//             rows={6}
//             className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Write a short cover letter..."
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Upload Resume (PDF)</label>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) => setResume(e.target.files[0])}
//             className="border border-gray-300 px-3 py-2 rounded-md w-full"
//           />
//         </div>

//         <div className="flex justify-end space-x-4">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Submit Application
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyJob;



// import React, { useState } from 'react';
// import ApplicationForm from './ApplicationForm'; // adjust path if needed

// const ApplyJob = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [website, setWebsite] = useState('');
//   const [coverLetter, setCoverLetter] = useState('');
//   const [resume, setResume] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume) {
//       alert("Please upload your resume.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("website", website);
//     formData.append("coverLetter", coverLetter);
//     formData.append("resume", resume);

//     try {
//       setIsSubmitting(true);
//       const response = await fetch("http://localhost:8080/job/apply", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Application submitted successfully!");
//         setName('');
//         setEmail('');
//         setPhone('');
//         setWebsite('');
//         setCoverLetter('');
//         setResume(null);
//       } else {
//         const errMsg = await response.text();
//         alert("Failed to apply: " + errMsg);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for Job</h1>
//       <ApplicationForm
//         name={name}
//         setName={setName}
//         email={email}
//         setEmail={setEmail}
//         phone={phone}
//         setPhone={setPhone}
//         website={website}
//         setWebsite={setWebsite}
//         coverLetter={coverLetter}
//         setCoverLetter={setCoverLetter}
//         resume={resume}
//         setResume={setResume}
//         handleSubmit={handleSubmit}
//         isSubmitting={isSubmitting}
//       />
//     </div>
//   );
// };

// export default ApplyJob;

// import React, { useState } from 'react';
// import ApplicationForm from './ApplicationForm'; // adjust path if needed

// const ApplyJob = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [website, setWebsite] = useState('');
//   const [coverLetter, setCoverLetter] = useState('');
//   const [resume, setResume] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
// const [coverLetterFile, setCoverLetterFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume) {
//       alert("Please upload your resume.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("website", website);
//     formData.append("coverLetter", coverLetter);
//     formData.append("resume", resume);

//     try {
//       setIsSubmitting(true);
//       const response = await fetch("http://localhost:8080/job/apply/${id}", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Application submitted successfully!");
//         setName('');
//         setEmail('');
//         setPhone('');
//         setWebsite('');
//         setCoverLetter('');
//         setResume(null);
//       } else {
//         const errMsg = await response.text();
//         alert("Failed to apply: " + errMsg);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for Job</h1>
//     <ApplicationForm
//   name={name}
//   setName={setName}
//   email={email}
//   setEmail={setEmail}
//   phone={phone}
//   setPhone={setPhone}
//   website={website}
//   setWebsite={setWebsite}
//   resume={resume}
//   setResume={setResume}
//   coverLetterFile={coverLetterFile}
//   setCoverLetterFile={setCoverLetterFile}
//   handleSubmit={handleSubmit}
//   isSubmitting={isSubmitting}
// />

//     </div>
//   );
// };

// export default ApplyJob;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ApplicationForm from './ApplicationForm'; // Adjust path if needed

// const ApplyJob = () => {
//   const { id } = useParams(); // Get job ID from URL param

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [website, setWebsite] = useState('');
//   const [coverLetter, setCoverLetter] = useState('');
//   const [resume, setResume] = useState(null);
//   const [coverLetterFile, setCoverLetterFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume) {
//       alert("Please upload your resume.");
//       return;
//     }

//     if (!coverLetterFile) {
//       alert("Please upload your cover letter file.");
//       return;
//     }

//     const formData = new FormData();

//     // Append applicant data as JSON blob
//     formData.append(
//       "applicant",
//       new Blob(
//         [JSON.stringify({ name, email, phone, website })],
//         { type: "application/json" }
//       )
//     );

//     formData.append("resume", resume);
//     formData.append("coverLetterFile", coverLetterFile);

//     try {
//       setIsSubmitting(true);
//       const response = await fetch(`http://localhost:8080/job/apply/${id}`, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Application submitted successfully!");
//         setName('');
//         setEmail('');
//         setPhone('');
//         setWebsite('');
//         setCoverLetter('');
//         setResume(null);
//         setCoverLetterFile(null);
//       } else {
//         const errMsg = await response.text();
//         alert("Failed to apply: " + errMsg);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for Job</h1>
//       <ApplicationForm
//         name={name}
//         setName={setName}
//         email={email}
//         setEmail={setEmail}
//         phone={phone}
//         setPhone={setPhone}
//         website={website}
//         setWebsite={setWebsite}
//         coverLetter={coverLetter}
//         setCoverLetter={setCoverLetter}
//         resume={resume}
//         setResume={setResume}
//         coverLetterFile={coverLetterFile}
//         setCoverLetterFile={setCoverLetterFile}
//         handleSubmit={handleSubmit}
//         isSubmitting={isSubmitting}
//       />
//     </div>
//   );
// };

// // export default ApplyJob;
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ApplicationForm from './ApplicationForm'; // Adjust path if needed

// const ApplyJob = () => {
//   const { id } = useParams(); // Get job ID from URL param
//   const navigate = useNavigate(); // For navigation after success

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [website, setWebsite] = useState('');
//   const [coverLetter, setCoverLetter] = useState('');
//   const [resume, setResume] = useState(null);
//   const [coverLetterFile, setCoverLetterFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume) {
//       toast.error("Please upload your resume.");
//       return;
//     }

//     if (!coverLetterFile) {
//       toast.error("Please upload your cover letter file.");
//       return;
//     }

//     const formData = new FormData();

//     formData.append(
//       "applicant",
//       new Blob(
//         [JSON.stringify({ name, email, phone, website })],
//         { type: "application/json" }
//       )
//     );

//     formData.append("resume", resume);
//     formData.append("coverLetterFile", coverLetterFile);

//     try {
//       setIsSubmitting(true);
//       const response = await fetch(`http://localhost:8080/job/apply/${id}`, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         toast.success("Application submitted successfully!");
//         // Reset form fields
//         setName('');
//         setEmail('');
//         setPhone('');
//         setWebsite('');
//         setCoverLetter('');
//         setResume(null);
//         setCoverLetterFile(null);

//         // Navigate to thank you page after short delay (1.5 seconds)
//         setTimeout(() => {
//           navigate('/jobs');
//         }, 1500);
//       } else {
//         const errMsg = await response.text();
//         toast.error("Failed to apply: " + errMsg);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for Job</h1>
//       <ApplicationForm
//         name={name}
//         setName={setName}
//         email={email}
//         setEmail={setEmail}
//         phone={phone}
//         setPhone={setPhone}
//         website={website}
//         setWebsite={setWebsite}
//         coverLetter={coverLetter}
//         setCoverLetter={setCoverLetter}
//         resume={resume}
//         setResume={setResume}
//         coverLetterFile={coverLetterFile}
//         setCoverLetterFile={setCoverLetterFile}
//         handleSubmit={handleSubmit}
//         isSubmitting={isSubmitting}
//       />
//     </div>
//   );
// };

// export default ApplyJob;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApplicationForm from './ApplicationForm'; // Adjust path if needed

const ApplyJob = () => {
  const { id } = useParams(); // get job id from URL
  const navigate = useNavigate();

  // Define all states that ApplicationForm needs:
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      toast.error("Please upload your resume.");
      return;
    }

    if (!coverLetterFile) {
      toast.error("Please upload your cover letter file.");
      return;
    }

    const formData = new FormData();

    formData.append(
      "applicant",
      new Blob(
        [JSON.stringify({ name, email, phone, website })],
        { type: "application/json" }
      )
    );
    formData.append("resume", resume);
    formData.append("coverLetterFile", coverLetterFile);

    try {
      setIsSubmitting(true);
      const response = await fetch(`http://localhost:8080/job/apply/${id}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        // reset form
        setName('');
        setEmail('');
        setPhone('');
        setWebsite('');
        setResume(null);
        setCoverLetterFile(null);

        setTimeout(() => navigate('/jobs'), 1500);
      } else {
        const errMsg = await response.text();
        toast.error("Failed to apply: " + errMsg);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for Job</h1>
      <ApplicationForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        website={website}
        setWebsite={setWebsite}
        resume={resume}
        setResume={setResume}
        coverLetterFile={coverLetterFile}
        setCoverLetterFile={setCoverLetterFile}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default ApplyJob;
