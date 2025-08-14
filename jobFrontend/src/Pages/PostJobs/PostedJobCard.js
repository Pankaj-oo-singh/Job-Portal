import React from "react";

const PostedJobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
      <h2 className="text-lg font-semibold">{job.jobTitle}</h2>
      <p className="text-sm text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500 mt-1">{job.location}</p>
      <p className="text-sm text-gray-500 mt-1">{job.jobType}</p>
       <p className="text-sm text-gray-500 mt-1">Posted Time:{job.postTime}</p>
        <p className="text-sm text-gray-500 mt-1">{job.description}</p>
        <p className="text-sm text-gray-500 mt-1">{}</p>
      <p className="text-xs text-gray-400 mt-2">
        {new Date(job.createdAt).toLocaleDateString("en-IN")}
      </p>
    </div>
  );
};

export default PostedJobCard;
