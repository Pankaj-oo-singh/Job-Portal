import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, getHeaders } from '../../Api/Constant';

const ScheduleInterviewModal = ({
  showModal,
  setShowModal,
  selectedApplicant,
  fetchApplicants,
  setActiveTab,
}) => {
  const [scheduleTime, setScheduleTime] = useState('');

  const handleSchedule = async () => {
    if (!scheduleTime || !selectedApplicant) return;

    try {
      await axios.put(
        `${BASE_URL}/job/applicant/${selectedApplicant.applicantId}/status`,
        {
          status: 'INTERVIEWING',
          scheduledInterviewTime: scheduleTime,
        },
        {
          headers: getHeaders(),
        }
      );

      setShowModal(false);
      setScheduleTime('');
      setActiveTab('Invited');
      fetchApplicants(); // refresh updated data
    } catch (error) {
      console.error('Error scheduling interview:', error);
      alert('Failed to schedule interview');
    }
  };

  if (!showModal || !selectedApplicant) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          Schedule Interview for {selectedApplicant.name}
        </h2>

        <label className="block mb-2 text-sm text-gray-700">Select Date & Time:</label>
        <input
          type="datetime-local"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => {
              setShowModal(false);
              setScheduleTime('');
            }}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSchedule}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleInterviewModal;
