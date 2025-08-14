// import React from "react";

// const ApplicationForm = ({
//   name,
//   setName,
//   email,
//   setEmail,
//   phone,
//   setPhone,
//   website,
//   setWebsite,
//   coverLetter,
//   setCoverLetter,
//   resume,
//   setResume,
//   handleSubmit,
//   isSubmitting,
// }) => {
//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 mt-6 bg-white p-6 rounded-xl shadow-md">
//       {/* Personal Info */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label className="block font-medium mb-1">Full Name</label>
//           <input
//             type="text"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="John Doe"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Email Address</label>
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="john@example.com"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Phone Number</label>
//           <input
//             type="tel"
//             required
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="+91 9876543210"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Website (optional)</label>
//           <input
//             type="url"
//             value={website}
//             onChange={(e) => setWebsite(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="https://yourportfolio.com"
//           />
//         </div>
//       </div>

//       {/* Resume Upload */}
//       <div>
//         <label className="block font-medium mb-1">Resume (PDF)</label>
//         <input
//           type="file"
//           accept=".pdf"
//           required
//           onChange={(e) => setResume(e.target.files[0])}
//           className="w-full border px-4 py-2 rounded-md"
//         />
//       </div>

//       {/* Cover Letter */}
//       <div>
//         <label className="block font-medium mb-1">Cover Letter</label>
//         <textarea
//           rows={6}
//           required
//           value={coverLetter}
//           onChange={(e) => setCoverLetter(e.target.value)}
//           className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Why do you want this job?..."
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-60"
//         >
//           {isSubmitting ? "Submitting..." : "Submit Application"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ApplicationForm;
import React from "react";

const ApplicationForm = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  website,
  setWebsite,
  resume,
  setResume,
  coverLetterFile,
  setCoverLetterFile,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 mt-6 bg-white p-6 rounded-xl shadow-md"
    >
      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Website (optional)</label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://yourportfolio.com"
          />
        </div>
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block font-medium mb-1">Resume (PDF/DOC)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setResume(e.target.files[0])}
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      {/* Cover Letter Upload */}
      <div>
        <label className="block font-medium mb-1">Cover Letter (PDF/DOC)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setCoverLetterFile(e.target.files[0])}
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
