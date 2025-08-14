// src/pages/JobHistory/AppliedJobs.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../../components/JobCard'; // adjust path if needed
import { BASE_URL, getHeaders } from '../../Api/Constant';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/job/status/APPLIED`, {
          headers: getHeaders(),
        });
        setAppliedJobs(response.data);
      } catch (error) {
        console.error('Failed to fetch applied jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;

  if (appliedJobs.length === 0)
    return <div className="text-center p-4">No applied jobs found.</div>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {appliedJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
