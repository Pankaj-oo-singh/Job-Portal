import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8080";

const PostJob = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    about: "",
    experience: "",
    jobType: "Full-Time",
    location: "",
    packageOffered: "",
    description: "",
    skillsRequired: "",
    jobStatus: "OPEN"
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...jobData,
      packageOffered: parseInt(jobData.packageOffered),
      skillsRequired: jobData.skillsRequired
        .split(",")
        .map((skill) => skill.trim()),
    };

    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${BASE_URL}/job/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Job creation failed");

      const data = await response.json();
      toast.success("Job posted successfully!");
      navigate("/posted-jobs");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while posting the job.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-6 rounded-lg">

        <input
          type="text"
          name="jobTitle"
          value={jobData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="company"
          value={jobData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="location"
          value={jobData.location}
          onChange={handleChange}
          placeholder="Job Location"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="experience"
          value={jobData.experience}
          onChange={handleChange}
          placeholder="Experience (e.g. 1-3 years)"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="packageOffered"
          value={jobData.packageOffered}
          onChange={handleChange}
          placeholder="Package Offered (e.g. 1000000)"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="skillsRequired"
          value={jobData.skillsRequired}
          onChange={handleChange}
          placeholder="Skills Required (comma separated)"
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="about"
          value={jobData.about}
          onChange={handleChange}
          placeholder="About Company"
          rows="3"
          className="w-full p-2 border rounded"
        ></textarea>

        <textarea
          name="description"
          value={jobData.description}
          onChange={handleChange}
          placeholder="Job Description"
          rows="4"
          className="w-full p-2 border rounded"
        ></textarea>

        <div className="flex gap-4">
          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>

          <select
            name="jobStatus"
            value={jobData.jobStatus}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="OPEN">Open</option>
            <option value="CLOSED">Closed</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded w-full"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
