// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL, getHeaders } from "../../Api/Constant";

// export default function GetMyProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/profile/me`, {
//           headers: getHeaders(),
//         });
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Error fetching profile", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (loading) return <div className="p-6 text-gray-500">Loading profile...</div>;

//   if (!profile) return <div className="p-6 text-red-600">No profile found.</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">My Profile</h2>

//       <div className="mb-4">
//         <strong>Job Title:</strong> {profile.jobTitle}
//       </div>
//       <div className="mb-4">
//         <strong>Company:</strong> {profile.company}
//       </div>
//       <div className="mb-4">
//         <strong>Location:</strong> {profile.location}
//       </div>
//       <div className="mb-4">
//         <strong>About:</strong> {profile.about}
//       </div>

//       <div className="mb-4">
//         <strong>Skills:</strong>
//         <ul className="list-disc list-inside">
//           {profile.skills.map((skill, i) => (
//             <li key={i}>{skill}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="mb-6">
//         <strong>Experiences:</strong>
//         {profile.experiences.map((exp, i) => (
//           <div key={i} className="border p-3 mb-3 rounded bg-gray-100">
//             <div><strong>Title:</strong> {exp.title}</div>
//             <div><strong>Company:</strong> {exp.company}</div>
//             <div><strong>Location:</strong> {exp.location}</div>
//             <div><strong>Duration:</strong> {exp.startDate} to {exp.endDate}</div>
//             <div><strong>Description:</strong> {exp.description}</div>
//           </div>
//         ))}
//       </div>

//       <div className="mb-6">
//         <strong>Certifications:</strong>
//         {profile.certifications.map((cert, i) => (
//           <div key={i} className="border p-3 mb-3 rounded bg-gray-100">
//             <div><strong>Title:</strong> {cert.title}</div>
//             <div><strong>Issuer:</strong> {cert.issuer}</div>
//             <div><strong>Issue Date:</strong> {cert.issueDate}</div>
//             <div><strong>Certificate ID:</strong> {cert.certificateId}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// // }
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL, getHeaders } from "../../Api/Constant";

// const formatDate = (dateString) => {
//   if (!dateString) return "-";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// };

// export default function GetMyProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/profile/me`, {
//           headers: getHeaders(),
//         });
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Error fetching profile", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (loading)
//     return <div className="p-6 text-gray-500 text-center">Loading profile...</div>;

//   if (!profile)
//     return <div className="p-6 text-red-600 text-center">No profile found.</div>;

//   const getInitials = (name = "") => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .substring(0, 2);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Header */}
//       <div className="flex items-center space-x-4 mb-6">
//         <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
//           {getInitials(profile.jobTitle || "User")}
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold">{profile.jobTitle}</h2>
//           <p className="text-gray-600">{profile.company} — {profile.location}</p>
//         </div>
//       </div>

//       {/* About */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">About</h3>
//         <p className="text-gray-700 mt-1">{profile.about}</p>
//       </div>

//       {/* Skills */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Skills</h3>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {profile.skills.map((skill, i) => (
//             <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Experience</h3>
//         {profile.experiences.map((exp, i) => (
//           <div key={i} className="border p-4 mb-3 rounded-md bg-white shadow-sm">
//             <h4 className="text-md font-bold">{exp.title}</h4>
//             <p className="text-sm text-gray-600">{exp.company} • {exp.location}</p>
//             <p className="text-sm text-gray-500 mb-1">
//               {formatDate(exp.startDate)} – {exp.working ? "Present" : formatDate(exp.endDate)}
//             </p>
//             <p className="text-sm text-gray-700">{exp.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Certifications */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Certifications</h3>
//         {profile.certifications.map((cert, i) => (
//           <div key={i} className="border p-4 mb-3 rounded-md bg-white shadow-sm">
//             <h4 className="text-md font-bold">{cert.title}</h4>
//             <p className="text-sm text-gray-600">{cert.issuer}</p>
//             <p className="text-sm text-gray-500">Issued on: {formatDate(cert.issueDate)}</p>
//             <p className="text-sm text-gray-700">Certificate ID: {cert.certificateId}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL, getHeaders } from "../../Api/Constant";

// const formatDate = (dateString) => {
//   if (!dateString) return "-";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// };

// export default function GetMyProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/profile/me`, {
//           headers: getHeaders(),
//         });
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Error fetching profile", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !file.type.startsWith("image/")) {
//       toast.error("Please select a valid image file (jpg, jpeg, png)");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     setUploading(true);
//     try {
//       const res = await axios.post(`${BASE_URL}/profile/upload-image`, formData, {
//         headers: {
//           ...getHeaders(),
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       const updatedProfile = { ...profile, profileImage: res.data };
//       setProfile(updatedProfile);
//       toast.success("Profile photo uploaded");
//     } catch (err) {
//       console.error(err);
//       toast.error("Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (loading)
//     return <div className="p-6 text-gray-500 text-center">Loading profile...</div>;

//   if (!profile)
//     return <div className="p-6 text-red-600 text-center">No profile found.</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Header */}
//       <div className="flex items-center space-x-4 mb-6">
//         {profile.profileImage ? (
//           <img
//             src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
//             alt="Profile"
//             className="w-16 h-16 rounded-full object-cover border"
//           />
//         ) : (
//           <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
//             {profile.jobTitle?.slice(0, 2).toUpperCase() || "U"}
//           </div>
//         )}

//         <div>
//           <h2 className="text-2xl font-bold">{profile.jobTitle}</h2>
//           <p className="text-gray-600">{profile.company} — {profile.location}</p>

//           <label className="block mt-2 text-sm text-blue-600 cursor-pointer">
//             <span className="underline">Upload Profile Photo</span>
//             <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
//           </label>
//         </div>
//       </div>

//       {/* About */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">About</h3>
//         <p className="text-gray-700 mt-1">{profile.about}</p>
//       </div>

//       {/* Skills */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Skills</h3>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {profile.skills.map((skill, i) => (
//             <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Experience</h3>
//         {profile.experiences.map((exp, i) => (
//           <div key={i} className="border p-4 mb-3 rounded-md bg-white shadow-sm">
//             <h4 className="text-md font-bold">{exp.title}</h4>
//             <p className="text-sm text-gray-600">{exp.company} • {exp.location}</p>
//             <p className="text-sm text-gray-500 mb-1">
//               {formatDate(exp.startDate)} – {exp.working ? "Present" : formatDate(exp.endDate)}
//             </p>
//             <p className="text-sm text-gray-700">{exp.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Certifications */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Certifications</h3>
//         {profile.certifications.map((cert, i) => (
//           <div key={i} className="border p-4 mb-3 rounded-md bg-white shadow-sm">
//             <h4 className="text-md font-bold">{cert.title}</h4>
//             <p className="text-sm text-gray-600">{cert.issuer}</p>
//             <p className="text-sm text-gray-500">Issued on: {formatDate(cert.issueDate)}</p>
//             <p className="text-sm text-gray-700">Certificate ID: {cert.certificateId}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL, getHeaders } from "../../Api/Constant";

// const formatDate = (dateString) => {
//   if (!dateString) return "-";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// };

// export default function GetMyProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const fileInputRef = useRef(null);

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/profile/me`, {
//         headers: getHeaders(),
//       });
//       setProfile(res.data);
//     } catch (err) {
//       console.error("Error fetching profile", err);
//       toast.error("Failed to load profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !file.type.startsWith("image/")) {
//       toast.error("Please select a valid image file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     setUploading(true);
//     try {
//       const res = await axios.post(`${BASE_URL}/profile/upload-photo`, formData, {
//         headers: {
//           ...getHeaders(),
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast.success("Profile photo uploaded");
//       fetchProfile(); // Refresh profile after upload
//     } catch (err) {
//       console.error(err);
//       toast.error("Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (loading)
//     return <div className="p-6 text-gray-500 text-center">Loading profile...</div>;

//   if (!profile)
//     return <div className="p-6 text-red-600 text-center">No profile found.</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Header */}
//       <div className="flex items-center space-x-4 mb-6">
//         {profile.profileImageUrl ? (
//           <img
//             src={`${BASE_URL}/uploads/${profile.profileImageUrl}`}
//             alt="Profile"
//             className="w-16 h-16 rounded-full object-cover border"
//           />
//         ) : (
//           <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
//             {profile.jobTitle?.slice(0, 2).toUpperCase() || "U"}
//           </div>
//         )}

//         <div>
//           <h2 className="text-2xl font-bold">{profile.jobTitle}</h2>
//           <p className="text-gray-600">
//             {profile.company} — {profile.location}
//           </p>

//           <label className="block mt-2 text-sm text-blue-600 cursor-pointer">
//             <span className="underline">
//               {uploading ? "Uploading..." : "Upload Profile Photo"}
//             </span>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//               disabled={uploading}
//             />
//           </label>
//         </div>
//       </div>

//       {/* About */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">About</h3>
//         <p className="text-gray-700 mt-1">{profile.about}</p>
//       </div>

//       {/* Skills */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Skills</h3>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {profile.skills.map((skill, i) => (
//             <span
//               key={i}
//               className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Experience</h3>
//         {profile.experiences.map((exp, i) => (
//           <div
//             key={i}
//             className="border p-4 mb-3 rounded-md bg-white shadow-sm"
//           >
//             <h4 className="text-md font-bold">{exp.title}</h4>
//             <p className="text-sm text-gray-600">
//               {exp.company} • {exp.location}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               {formatDate(exp.startDate)} –{" "}
//               {exp.working ? "Present" : formatDate(exp.endDate)}
//             </p>
//             <p className="text-sm text-gray-700">{exp.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Certifications */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Certifications</h3>
//         {profile.certifications.map((cert, i) => (
//           <div
//             key={i}
//             className="border p-4 mb-3 rounded-md bg-white shadow-sm"
//           >
//             <h4 className="text-md font-bold">{cert.title}</h4>
//             <p className="text-sm text-gray-600">{cert.issuer}</p>
//             <p className="text-sm text-gray-500">
//               Issued on: {formatDate(cert.issueDate)}
//             </p>
//             <p className="text-sm text-gray-700">
//               Certificate ID: {cert.certificateId}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// // }
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL, getHeaders } from "../../Api/Constant";

// const formatDate = (dateString) => {
//   if (!dateString) return "-";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// };

// export default function GetMyProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const fileInputRef = useRef(null);

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/profile/me`, {
//         headers: getHeaders(),
//       });
//       setProfile(res.data);
//     } catch (err) {
//       console.error("Error fetching profile", err);
//       toast.error("Failed to load profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !file.type.startsWith("image/")) {
//       toast.error("Please select a valid image file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     setUploading(true);
//     try {
//       const res = await axios.post(`${BASE_URL}/profile/upload-photo`, formData, {
//         headers: {
//           ...getHeaders(),
//           "Content-Type": "multipart/form-data",
//         },
//       });

    

//       toast.success("Profile photo uploaded");
//       fetchProfile(); // Refresh profile after upload
//     } catch (err) {
//       console.error(err);
//       toast.error("Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (loading)
//     return <div className="p-6 text-gray-500 text-center">Loading profile...</div>;

//   if (!profile)
//     return <div className="p-6 text-red-600 text-center">No profile found.</div>;
//  console.log("Profile image filename:", profile.profileImage);
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Large Profile Image Display */}
//       <div className="flex justify-center mb-8">
//         {profile.profileImage ? (
          
//           <img
//             src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}

//             alt="Profile"
//             // className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg"
//           />
//         ) : (
//           <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
//             {profile.jobTitle?.slice(0, 2).toUpperCase() || "U"}
//           </div>
//         )}
//       </div>

//       {/* Header with smaller avatar and details */}
//       <div className="flex items-center space-x-4 mb-6">
//         <div className="hidden sm:block">
//           {profile.profileImage ? (
//             <img
//                src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
//               alt="Profile"
//               className="w-16 h-16 rounded-full object-cover border"
//             />
//           )
          
//           : (
//             <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
//               {profile.jobTitle?.slice(0, 2).toUpperCase() || "U"}
//             </div>
//           )}
//         </div>

//         <div>
//           <h2 className="text-2xl font-bold">{profile.jobTitle}</h2>
//           <p className="text-gray-600">
//             {profile.company} — {profile.location}
//           </p>

//           <label className="block mt-2 text-sm text-blue-600 cursor-pointer">
//             <span className="underline">
//               {uploading ? "Uploading..." : "Upload Profile Photo"}
//             </span>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//               disabled={uploading}
//             />
//           </label>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">About</h3>
//         <p className="text-gray-700 mt-1">{profile.about}</p>
//       </div>

//       {/* Skills Section */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Skills</h3>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {profile.skills.map((skill, i) => (
//             <span
//               key={i}
//               className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Experience Section */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Experience</h3>
//         {profile.experiences.map((exp, i) => (
//           <div
//             key={i}
//             className="border p-4 mb-3 rounded-md bg-white shadow-sm"
//           >
//             <h4 className="text-md font-bold">{exp.title}</h4>
//             <p className="text-sm text-gray-600">
//               {exp.company} • {exp.location}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               {formatDate(exp.startDate)} –{" "}
//               {exp.working ? "Present" : formatDate(exp.endDate)}
//             </p>
//             <p className="text-sm text-gray-700">{exp.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Certifications Section */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Certifications</h3>
//         {profile.certifications.map((cert, i) => (
//           <div
//             key={i}
//             className="border p-4 mb-3 rounded-md bg-white shadow-sm"
//           >
//             <h4 className="text-md font-bold">{cert.title}</h4>
//             <p className="text-sm text-gray-600">{cert.issuer}</p>
//             <p className="text-sm text-gray-500">
//               Issued on: {formatDate(cert.issueDate)}
//             </p>
//             <p className="text-sm text-gray-700">
//               Certificate ID: {cert.certificateId}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL, getHeaders } from "../../Api/Constant";

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function GetMyProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/profile/me`, {
        headers: getHeaders(),
      });
      setProfile(res.data);
    } catch (err) {
      console.error("Error fetching profile", err);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      await axios.post(`${BASE_URL}/profile/upload-photo`, formData, {
        headers: {
          ...getHeaders(),
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Profile photo uploaded");
      fetchProfile(); // Refresh profile after upload
    } catch (err) {
      console.error("Upload failed:", err);
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  if (loading)
    return <div className="p-6 text-gray-500 text-center">Loading profile...</div>;

  if (!profile)
    return <div className="p-6 text-red-600 text-center">No profile found.</div>;

  // Log profile image filename on each render
  console.log("Profile image filename:", profile.profileImage);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Large Profile Image Display */}
      <div className="flex justify-center mb-8">
        {profile.profileImage ? (
          <img
            src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
            {profile.jobTitle?.slice(0, 2).toUpperCase() || "U"}
          </div>
        )}
      </div>

      {/* Header with smaller avatar and details */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="hidden sm:block">
          {profile.profileImage ? (
            <img
              src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              {profile.jobTitle?.slice(0, 2).toUpperCase() || "U"}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold">{profile.jobTitle}</h2>
          <p className="text-gray-600">
            {profile.company} — {profile.location}
          </p>

          <label className="block mt-2 text-sm text-blue-600 cursor-pointer">
            <span className="underline">
              {uploading ? "Uploading..." : "Upload Profile Photo"}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">About</h3>
        <p className="text-gray-700 mt-1">{profile.about}</p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Experience</h3>
        {profile.experiences.map((exp, i) => (
          <div
            key={i}
            className="border p-4 mb-3 rounded-md bg-white shadow-sm"
          >
            <h4 className="text-md font-bold">{exp.title}</h4>
            <p className="text-sm text-gray-600">
              {exp.company} • {exp.location}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              {formatDate(exp.startDate)} –{" "}
              {exp.working ? "Present" : formatDate(exp.endDate)}
            </p>
            <p className="text-sm text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Certifications</h3>
        {profile.certifications.map((cert, i) => (
          <div
            key={i}
            className="border p-4 mb-3 rounded-md bg-white shadow-sm"
          >
            <h4 className="text-md font-bold">{cert.title}</h4>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500">
              Issued on: {formatDate(cert.issueDate)}
            </p>
            <p className="text-sm text-gray-700">
              Certificate ID: {cert.certificateId}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
