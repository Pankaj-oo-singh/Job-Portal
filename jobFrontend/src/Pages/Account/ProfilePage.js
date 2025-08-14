// // import React, { useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { BASE_URL, getHeaders } from "../../Api/Constant";

// // const emptyExperience = {
// //   title: "",
// //   company: "",
// //   location: "",
// //   startDate: "",
// //   endDate: "",
// //   working: false,
// //   description: "",
// // };

// // const emptyCertification = {
// //   title: "",
// //   issuer: "",
// //   issueDate: "",
// //   certificateId: "",
// // };

// // export default function CreateProfilePage() {
// //   const [profile, setProfile] = useState({
// //     jobTitle: "",
// //     company: "",
// //     location: "",
// //     about: "",
// //     skills: [""],
// //     experiences: [emptyExperience],
// //     certifications: [emptyCertification],
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProfile({ ...profile, [name]: value });
// //   };

// //   const handleSkillChange = (i, value) => {
// //     const updated = [...profile.skills];
// //     updated[i] = value;
// //     setProfile({ ...profile, skills: updated });
// //   };

// //   const handleExperienceChange = (i, field, value) => {
// //     const updated = [...profile.experiences];
// //     updated[i][field] = value;
// //     setProfile({ ...profile, experiences: updated });
// //   };

// //   const handleCertificationChange = (i, field, value) => {
// //     const updated = [...profile.certifications];
// //     updated[i][field] = value;
// //     setProfile({ ...profile, certifications: updated });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post(`${BASE_URL}/profile/user`, profile, {
// //         headers: getHeaders(),
// //       });
// //       toast.success("Profile created successfully");
// //       console.log(res.data);
// //     } catch (err) {
// //       toast.error("Failed to create profile");
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h2 className="text-2xl font-bold mb-4">Create Profile</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input name="jobTitle" value={profile.jobTitle} onChange={handleChange} placeholder="Job Title" className="border p-2 w-full mb-2" />
// //         <input name="company" value={profile.company} onChange={handleChange} placeholder="Company" className="border p-2 w-full mb-2" />
// //         <input name="location" value={profile.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full mb-2" />
// //         <textarea name="about" value={profile.about} onChange={handleChange} placeholder="About you" className="border p-2 w-full mb-4" />

// //         <label className="font-semibold">Skills:</label>
// //         {profile.skills.map((skill, i) => (
// //           <input key={i} value={skill} onChange={(e) => handleSkillChange(i, e.target.value)} className="border p-2 w-full mb-2" placeholder={`Skill #${i + 1}`} />
// //         ))}
// //         <button type="button" onClick={() => setProfile((p) => ({ ...p, skills: [...p.skills, ""] }))} className="text-blue-600 mb-4 block">
// //           + Add Skill
// //         </button>

// //         <label className="font-semibold">Experiences:</label>
// //         {profile.experiences.map((exp, i) => (
// //           <div key={i} className="border p-3 mb-3 rounded">
// //             <input value={exp.title} onChange={(e) => handleExperienceChange(i, "title", e.target.value)} placeholder="Title" className="w-full p-1 mb-1 border" />
// //             <input value={exp.company} onChange={(e) => handleExperienceChange(i, "company", e.target.value)} placeholder="Company" className="w-full p-1 mb-1 border" />
// //             <input value={exp.location} onChange={(e) => handleExperienceChange(i, "location", e.target.value)} placeholder="Location" className="w-full p-1 mb-1 border" />
// //             <input type="date" value={exp.startDate} onChange={(e) => handleExperienceChange(i, "startDate", e.target.value)} className="w-full p-1 mb-1 border" />
// //             <input type="date" value={exp.endDate} onChange={(e) => handleExperienceChange(i, "endDate", e.target.value)} className="w-full p-1 mb-1 border" />
// //             <textarea value={exp.description} onChange={(e) => handleExperienceChange(i, "description", e.target.value)} placeholder="Description" className="w-full p-1 border" />
// //           </div>
// //         ))}
// //         <button type="button" onClick={() => setProfile((p) => ({ ...p, experiences: [...p.experiences, emptyExperience] }))} className="text-blue-600 mb-4 block">
// //           + Add Experience
// //         </button>

// //         <label className="font-semibold">Certifications:</label>
// //         {profile.certifications.map((cert, i) => (
// //           <div key={i} className="border p-3 mb-3 rounded">
// //             <input value={cert.title} onChange={(e) => handleCertificationChange(i, "title", e.target.value)} placeholder="Title" className="w-full p-1 mb-1 border" />
// //             <input value={cert.issuer} onChange={(e) => handleCertificationChange(i, "issuer", e.target.value)} placeholder="Issuer" className="w-full p-1 mb-1 border" />
// //             <input type="datetime-local" value={cert.issueDate} onChange={(e) => handleCertificationChange(i, "issueDate", e.target.value)} className="w-full p-1 mb-1 border" />
// //             <input value={cert.certificateId} onChange={(e) => handleCertificationChange(i, "certificateId", e.target.value)} placeholder="Certificate ID" className="w-full p-1 border" />
// //           </div>
// //         ))}
// //         <button type="button" onClick={() => setProfile((p) => ({ ...p, certifications: [...p.certifications, emptyCertification] }))} className="text-blue-600 mb-4 block">
// //           + Add Certification
// //         </button>

// //         <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
// //           Create Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL, getHeaders } from "../../Api/Constant";

// const emptyExperience = {
//   title: "",
//   company: "",
//   location: "",
//   startDate: "",
//   endDate: "",
//   working: false,
//   description: "",
// };

// const emptyCertification = {
//   title: "",
//   issuer: "",
//   issueDate: "",
//   certificateId: "",
// };

// export default function ProfilePage() {
//   const [profile, setProfile] = useState({
//     jobTitle: "",
//     company: "",
//     location: "",
//     about: "",
//     skills: [""],
//     experiences: [emptyExperience],
//     certifications: [emptyCertification],
//   });

//   const [isEdit, setIsEdit] = useState(false);

//   // Optional: Load existing profile on mount (to support update)
//   useEffect(() => {
//     async function fetchProfile() {
//       try {
//         const res = await axios.get(`${BASE_URL}/profile/me`, { headers: getHeaders() });
//         const data = res.data;
//         setProfile({
//           ...data,
//           skills: data.skills?.length ? data.skills : [""],
//           experiences: data.experiences?.length ? data.experiences : [emptyExperience],
//           certifications: data.certifications?.length ? data.certifications : [emptyCertification],
//         });
//         setIsEdit(true);
//       } catch (err) {
//         // No profile exists yet, keep isEdit false
//       }
//     }
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSkillChange = (i, value) => {
//     const updated = [...profile.skills];
//     updated[i] = value;
//     setProfile({ ...profile, skills: updated });
//   };

//   const handleExperienceChange = (i, field, value) => {
//     const updated = [...profile.experiences];
//     updated[i][field] = value;
//     setProfile({ ...profile, experiences: updated });
//   };

//   const handleCertificationChange = (i, field, value) => {
//     const updated = [...profile.certifications];
//     updated[i][field] = value;
//     setProfile({ ...profile, certifications: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let res;
//       if (isEdit) {
//         res = await axios.put(`${BASE_URL}/profile`, profile, { headers: getHeaders() });
//         toast.success("Profile updated successfully");
//       } else {
//         res = await axios.post(`${BASE_URL}/profile/user`, profile, { headers: getHeaders() });
//         toast.success("Profile created successfully");
//         setIsEdit(true); // Switch to edit mode after creation
//       }
//       setProfile(res.data);
//     } catch (err) {
//       toast.error("Failed to save profile");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">{isEdit ? "Update" : "Create"} Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="jobTitle"
//           value={profile.jobTitle}
//           onChange={handleChange}
//           placeholder="Job Title"
//           className="border p-2 w-full mb-2"
//         />
//         <input
//           name="company"
//           value={profile.company}
//           onChange={handleChange}
//           placeholder="Company"
//           className="border p-2 w-full mb-2"
//         />
//         <input
//           name="location"
//           value={profile.location}
//           onChange={handleChange}
//           placeholder="Location"
//           className="border p-2 w-full mb-2"
//         />
//         <textarea
//           name="about"
//           value={profile.about}
//           onChange={handleChange}
//           placeholder="About you"
//           className="border p-2 w-full mb-4"
//         />

//         <label className="font-semibold">Skills:</label>
//         {profile.skills.map((skill, i) => (
//           <input
//             key={i}
//             value={skill}
//             onChange={(e) => handleSkillChange(i, e.target.value)}
//             className="border p-2 w-full mb-2"
//             placeholder={`Skill #${i + 1}`}
//           />
//         ))}
//         <button
//           type="button"
//           onClick={() => setProfile((p) => ({ ...p, skills: [...p.skills, ""] }))}
//           className="text-blue-600 mb-4 block"
//         >
//           + Add Skill
//         </button>

//         <label className="font-semibold">Experiences:</label>
//         {profile.experiences.map((exp, i) => (
//           <div key={i} className="border p-3 mb-3 rounded">
//             <input
//               value={exp.title}
//               onChange={(e) => handleExperienceChange(i, "title", e.target.value)}
//               placeholder="Title"
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               value={exp.company}
//               onChange={(e) => handleExperienceChange(i, "company", e.target.value)}
//               placeholder="Company"
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               value={exp.location}
//               onChange={(e) => handleExperienceChange(i, "location", e.target.value)}
//               placeholder="Location"
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               type="date"
//               value={exp.startDate}
//               onChange={(e) => handleExperienceChange(i, "startDate", e.target.value)}
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               type="date"
//               value={exp.endDate}
//               onChange={(e) => handleExperienceChange(i, "endDate", e.target.value)}
//               className="w-full p-1 mb-1 border"
//             />
//             <textarea
//               value={exp.description}
//               onChange={(e) => handleExperienceChange(i, "description", e.target.value)}
//               placeholder="Description"
//               className="w-full p-1 border"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => setProfile((p) => ({ ...p, experiences: [...p.experiences, emptyExperience] }))}
//           className="text-blue-600 mb-4 block"
//         >
//           + Add Experience
//         </button>

//         <label className="font-semibold">Certifications:</label>
//         {profile.certifications.map((cert, i) => (
//           <div key={i} className="border p-3 mb-3 rounded">
//             <input
//               value={cert.title}
//               onChange={(e) => handleCertificationChange(i, "title", e.target.value)}
//               placeholder="Title"
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               value={cert.issuer}
//               onChange={(e) => handleCertificationChange(i, "issuer", e.target.value)}
//               placeholder="Issuer"
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               type="datetime-local"
//               value={cert.issueDate}
//               onChange={(e) => handleCertificationChange(i, "issueDate", e.target.value)}
//               className="w-full p-1 mb-1 border"
//             />
//             <input
//               value={cert.certificateId}
//               onChange={(e) => handleCertificationChange(i, "certificateId", e.target.value)}
//               placeholder="Certificate ID"
//               className="w-full p-1 border"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => setProfile((p) => ({ ...p, certifications: [...p.certifications, emptyCertification] }))}
//           className="text-blue-600 mb-4 block"
//         >
//           + Add Certification
//         </button>

//         <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
//           {isEdit ? "Update" : "Create"} Profile
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL, getHeaders } from "../../Api/Constant";

const emptyExperience = {
  title: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  working: false,
  description: "",
};

const emptyCertification = {
  title: "",
  issuer: "",
  issueDate: "",
  certificateId: "",
};

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    jobTitle: "",
    company: "",
    location: "",
    about: "",
    skills: [""],
    experiences: [emptyExperience],
    certifications: [emptyCertification],
  });

  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch existing profile on mount
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get(`${BASE_URL}/profile/me`, { headers: getHeaders() });
        const data = res.data;
        setProfile({
          ...data,
          skills: data.skills?.length ? data.skills : [""],
          experiences: data.experiences?.length ? data.experiences : [emptyExperience],
          certifications: data.certifications?.length ? data.certifications : [emptyCertification],
        });
        setIsEdit(true);
      } catch (err) {
        // No profile found, stay in create mode
        setIsEdit(false);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, value) => {
    const updated = [...profile.skills];
    updated[index] = value;
    setProfile((prev) => ({ ...prev, skills: updated }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...profile.experiences];
    updated[index][field] = value;
    setProfile((prev) => ({ ...prev, experiences: updated }));
  };

  const handleCertificationChange = (index, field, value) => {
    const updated = [...profile.certifications];
    updated[index][field] = value;
    setProfile((prev) => ({ ...prev, certifications: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (isEdit) {
        // Update existing profile
        res = await axios.put(`${BASE_URL}/profile`, profile, { headers: getHeaders() });
        toast.success("Profile updated successfully");
      } else {
        // Create new profile
        res = await axios.post(`${BASE_URL}/profile/user`, profile, { headers: getHeaders() });
        toast.success("Profile created successfully");
        setIsEdit(true);
      }
      setProfile(res.data);
    } catch (err) {
      toast.error("Failed to save profile");
      console.error(err);
    }
  };

  if (loading) return <div>Loading profile...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? "Update" : "Create"} Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="jobTitle"
          value={profile.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          className="border p-2 w-full mb-2"
        />
        <input
          name="company"
          value={profile.company}
          onChange={handleChange}
          placeholder="Company"
          className="border p-2 w-full mb-2"
        />
        <input
          name="location"
          value={profile.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 w-full mb-2"
        />
        <textarea
          name="about"
          value={profile.about}
          onChange={handleChange}
          placeholder="About you"
          className="border p-2 w-full mb-4"
        />

        <label className="font-semibold">Skills:</label>
        {profile.skills.map((skill, i) => (
          <input
            key={i}
            value={skill}
            onChange={(e) => handleSkillChange(i, e.target.value)}
            className="border p-2 w-full mb-2"
            placeholder={`Skill #${i + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() => setProfile((p) => ({ ...p, skills: [...p.skills, ""] }))}
          className="text-blue-600 mb-4 block"
        >
          + Add Skill
        </button>

        <label className="font-semibold">Experiences:</label>
        {profile.experiences.map((exp, i) => (
          <div key={i} className="border p-3 mb-3 rounded">
            <input
              value={exp.title}
              onChange={(e) => handleExperienceChange(i, "title", e.target.value)}
              placeholder="Title"
              className="w-full p-1 mb-1 border"
            />
            <input
              value={exp.company}
              onChange={(e) => handleExperienceChange(i, "company", e.target.value)}
              placeholder="Company"
              className="w-full p-1 mb-1 border"
            />
            <input
              value={exp.location}
              onChange={(e) => handleExperienceChange(i, "location", e.target.value)}
              placeholder="Location"
              className="w-full p-1 mb-1 border"
            />
            <input
              type="date"
              value={exp.startDate}
              onChange={(e) => handleExperienceChange(i, "startDate", e.target.value)}
              className="w-full p-1 mb-1 border"
            />
            <input
              type="date"
              value={exp.endDate}
              onChange={(e) => handleExperienceChange(i, "endDate", e.target.value)}
              className="w-full p-1 mb-1 border"
            />
            <textarea
              value={exp.description}
              onChange={(e) => handleExperienceChange(i, "description", e.target.value)}
              placeholder="Description"
              className="w-full p-1 border"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => setProfile((p) => ({ ...p, experiences: [...p.experiences, emptyExperience] }))}
          className="text-blue-600 mb-4 block"
        >
          + Add Experience
        </button>

        <label className="font-semibold">Certifications:</label>
        {profile.certifications.map((cert, i) => (
          <div key={i} className="border p-3 mb-3 rounded">
            <input
              value={cert.title}
              onChange={(e) => handleCertificationChange(i, "title", e.target.value)}
              placeholder="Title"
              className="w-full p-1 mb-1 border"
            />
            <input
              value={cert.issuer}
              onChange={(e) => handleCertificationChange(i, "issuer", e.target.value)}
              placeholder="Issuer"
              className="w-full p-1 mb-1 border"
            />
            <input
              type="datetime-local"
              value={cert.issueDate}
              onChange={(e) => handleCertificationChange(i, "issueDate", e.target.value)}
              className="w-full p-1 mb-1 border"
            />
            <input
              value={cert.certificateId}
              onChange={(e) => handleCertificationChange(i, "certificateId", e.target.value)}
              placeholder="Certificate ID"
              className="w-full p-1 border"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => setProfile((p) => ({ ...p, certifications: [...p.certifications, emptyCertification] }))}
          className="text-blue-600 mb-4 block"
        >
          + Add Certification
        </button>

        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
          {isEdit ? "Update" : "Create"} Profile
        </button>
      </form>
    </div>
  );
}
