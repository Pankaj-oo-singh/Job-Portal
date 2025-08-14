import React, { useState } from 'react';

const InvitedApplicantCard = ({ applicant, onStatusChange }) => {
  const [loading, setLoading] = useState(false);

  const handleStatusUpdate = async (status) => {
    setLoading(true);
    try {
      await onStatusChange(applicant.applicantId, status);
    } catch (error) {
      // You can handle error here if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded p-4 shadow hover:shadow-md">
      <h3 className="font-semibold text-lg mb-2">{applicant.name}</h3>
      <p><strong>Email:</strong> {applicant.email}</p>
      <p><strong>Scheduled Interview:</strong> {new Date(applicant.scheduledInterviewTime).toLocaleString()}</p>

      <div className="flex gap-3 mt-4">
        <button
          disabled={loading}
          onClick={() => handleStatusUpdate('ACCEPTED')}
          className={`flex-1 py-2 rounded text-white ${
            loading ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          Accept
        </button>
        <button
          disabled={loading}
          onClick={() => handleStatusUpdate('REJECTED')}
          className={`flex-1 py-2 rounded text-white ${
            loading ? 'bg-red-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default InvitedApplicantCard;
