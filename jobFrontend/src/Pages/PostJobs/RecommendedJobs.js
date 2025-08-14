import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";

const BASE_URL = "http://localhost:8080";

const RecommendedJobs = ({ currentJobId, jobTitle }) => {
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const response = await fetch(`${BASE_URL}/job/all`);
        const data = await response.json();

        const filtered = data.filter(
          (job) =>
            job.id !== currentJobId &&
            job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
        );

        setRecommendedJobs(filtered.slice(0, 3)); // Limit to 3
      } catch (error) {
        console.error("Error fetching recommended jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (jobTitle) {
      fetchRecommended();
    }
  }, [currentJobId, jobTitle]);

  if (loading) return <p className="text-sm text-gray-500">Loading recommendations...</p>;

  if (recommendedJobs.length === 0)
    return <p className="text-sm text-gray-500">No similar jobs found.</p>;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={{
              id: job.id,
              title: job.jobTitle,
              company: job.company,
              applicants: job.applicants?.length || 0,
              level: job.experience,
              type: job.jobType,
              mode: job.location,
              summary: job.about,
              package: job.packageOffered,
              date: job.postTime,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
