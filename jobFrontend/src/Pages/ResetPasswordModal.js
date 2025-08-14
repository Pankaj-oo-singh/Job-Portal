// src/components/ResetPasswordModal.js
// import React, { useState } from 'react';

// const ResetPasswordModal = ({ isOpen, onClose, onSubmit }) => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//     onSubmit(email);
//     setEmail('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//         <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>
//         <p className="text-sm text-gray-600 mb-4 text-center">
//           Enter your email to receive an OTP for resetting your password.
//         </p>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//           >
//             Send OTP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default ResetPasswordModal;
// import React, { useState } from "react";
// import { forgotPasswordAPI,verifyOtpAPI } from '../Api/Authentication';


// const ResetPasswordModal = ({ isOpen, onClose }) => {
//   const [step, setStep] = useState(1); // 1 = enter email, 2 = verify otp & reset
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     try {
//       await forgotPasswordAPI(email);
//       setSuccess("OTP sent to your email. Please check.");
//       setStep(2);
//     } catch (err) {
//       setError(err?.response?.data?.message || "Failed to send OTP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       await verifyOtpAPI({ email, otp, newPassword });
//       setSuccess("Password reset successfully!");
//       setTimeout(() => {
//         onClose();
//         // Optionally clear form or redirect user to login
//       }, 120000);
//     } catch (err) {
//       setError(err?.response?.data?.message || "OTP verification failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
//         <button
//           className="text-gray-500 hover:text-gray-700 float-right"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         {step === 1 && (
//           <>
//             <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
//             {error && <p className="text-red-600">{error}</p>}
//             {success && <p className="text-green-600">{success}</p>}
//             <form onSubmit={handleSendOtp}>
//               <label className="block mb-2 font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full border p-2 rounded mb-4"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
//               >
//                 {loading ? "Sending OTP..." : "Send OTP"}
//               </button>
//             </form>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="text-xl font-bold mb-4">Verify OTP & Reset Password</h2>
//             {error && <p className="text-red-600">{error}</p>}
//             {success && <p className="text-green-600">{success}</p>}
//             <form onSubmit={handleVerifyOtp}>
//               <label className="block mb-2 font-medium">OTP</label>
//               <input
//                 type="text"
//                 className="w-full border p-2 rounded mb-4"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required
//               />
//               <label className="block mb-2 font-medium">New Password</label>
//               <input
//                 type="password"
//                 className="w-full border p-2 rounded mb-4"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 required
//               />
//               <label className="block mb-2 font-medium">Confirm Password</label>
//               <input
//                 type="password"
//                 className="w-full border p-2 rounded mb-4"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
//               >
//                 {loading ? "Resetting Password..." : "Reset Password"}
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordModal;



import React, { useState } from "react";
import { forgotPasswordAPI, verifyOtpAPI } from "../Api/Authentication";

const ResetPasswordModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP + Reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await forgotPasswordAPI(email.trim());
      setSuccess("OTP sent to your email. Please check.");
      setStep(2);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await verifyOtpAPI({
        email: email.trim(),
        otp: otp.trim(),
        newPassword: newPassword,
      });
      setSuccess("Password reset successfully!");
      setTimeout(() => {
        onClose();
        setStep(1);
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
        setSuccess("");
        setError("");
      }, 2000); // 2 seconds delay after success
    } catch (err) {
      setError(err?.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          className="text-gray-500 hover:text-gray-700 absolute right-4 top-4"
          onClick={() => {
            onClose();
            setStep(1);
            setEmail("");
            setOtp("");
            setNewPassword("");
            setConfirmPassword("");
            setSuccess("");
            setError("");
          }}
        >
          ✕
        </button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
            <form onSubmit={handleSendOtp}>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Verify OTP & Reset Password</h2>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
            <form onSubmit={handleVerifyOtp}>
              <label className="block mb-2 font-medium">OTP</label>
              <input
                type="text"
                className="w-full border p-2 rounded mb-4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <label className="block mb-2 font-medium">New Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded mb-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label className="block mb-2 font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded mb-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordModal;
