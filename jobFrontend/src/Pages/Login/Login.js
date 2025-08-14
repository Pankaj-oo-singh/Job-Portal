// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
// import { loginAPI } from '../../Api/Authentication';
// import { jwtDecode } from 'jwt-decode';
// import { saveToken } from '../../Utils/Jwt-Utils';
// import GoogleSignIn from '../../components/Button/GoogleSignIn';

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await loginAPI(formData);

//       const { accessToken, refreshToken, roles, id } = res;

//       // Save access & refresh tokens
//       saveToken(accessToken);
//       localStorage.setItem('refreshToken', refreshToken);

//       // Save roles & user ID
//       localStorage.setItem('roles', JSON.stringify(roles));
//       localStorage.setItem('userId', id);

//       // Decode token & set auto-logout
//       const decoded = jwtDecode(accessToken);
//       const expiryTime = decoded.exp * 1000;
//       const timeout = expiryTime - Date.now();

//       if (timeout <= 0) {
//         localStorage.removeItem('authToken');
//         alert("Token expired. Please login again.");
//         return navigate('/login');
//       }

//       setTimeout(() => {
//         localStorage.removeItem('authToken');
//         alert("Session expired. Please login again.");
//         navigate('/login');
//       }, timeout);

//       // Navigate based on roles (customize as needed)
//       if (roles.includes('ADMIN')) {
//         navigate('/admin/dashboard');
//       } else if (roles.includes('EMPLOYEE')) {
//         navigate('/employee/dashboard');
//       } else if (roles.includes('APPLICANT')) {
//         navigate('/applicant/home');
//       } else {
//         navigate('/');
//       }

//     } catch (error) {
//       console.error('Login failed:', error.message);
//       setErrors({ general: 'Invalid email or password' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{' '}
//           <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
//             create a new account
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiMail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`py-2 pl-10 block w-full border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//                 />
//               </div>
//               {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiLock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`py-2 pl-10 block w-full border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//                 />
//               </div>
//               {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {errors.general && (
//               <div className="text-red-600 text-sm text-center">{errors.general}</div>
//             )}

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
//               >
//                 {isLoading ? 'Signing in...' : (
//                   <>
//                     Sign in <FiArrowRight className="ml-2" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <GoogleSignIn />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Login;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
// import { loginAPI, forgotPasswordAPI } from '../../Api/Authentication';
// import { jwtDecode } from 'jwt-decode';
// import { saveToken } from '../../Utils/Jwt-Utils';
// import ResetPasswordModal from '../../Pages/ResetPasswordModal'; // ✅ Modal Component
// import GoogleSignIn from '../../components/Button/GoogleSignIn'; // Optional

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Modal state

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const res = await loginAPI(formData);
//       const { accessToken, refreshToken, roles, id } = res;

//       saveToken(accessToken); // ✅ Store token in localStorage

//       const decoded = jwtDecode(accessToken);
//       const expiryTime = decoded.exp * 1000;
//       const timeout = expiryTime - Date.now();

//       if (timeout <= 0) {
//         localStorage.removeItem('authToken');
//         alert("Session expired. Please login again.");
//         return navigate('/login');
//       }

//       // Auto-logout timer
//       setTimeout(() => {
//         localStorage.removeItem('authToken');
//         alert("Session expired. Please login again.");
//         navigate('/login');
//       }, timeout);

//       // Save roles if needed
//       localStorage.setItem("userRoles", JSON.stringify(roles));
//       localStorage.setItem("userId", id);
//       console.log(localStorage.setItem("userRoles", JSON.stringify(roles)))
      

//       // Navigate based on role
//       if (roles.includes("ADMIN")) {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setErrors({ general: "Invalid email or password" });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleForgotPassword = async (email) => {
//     try {
//       await forgotPasswordAPI(email);
//       alert("OTP sent to your email.");
//     } catch (err) {
//       console.error("OTP send error:", err);
//       alert("Failed to send OTP. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{' '}
//           <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
//             create a new account
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email address</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiMail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`py-2 pl-10 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
//                 />
//               </div>
//               {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiLock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`py-2 pl-10 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
//                 />
//               </div>
//               {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="text-sm">
//                 <button
//                   type="button"
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                   onClick={() => setIsModalOpen(true)}
//                 >
//                   Forgot your password?
//                 </button>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 {isLoading ? "Signing in..." : <>Sign in <FiArrowRight className="ml-2" /></>}
//               </button>
//             </div>

//             {errors.general && <p className="text-center text-sm text-red-600">{errors.general}</p>}
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <GoogleSignIn />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Modal component */}
//       <ResetPasswordModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleForgotPassword}
//       />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { loginAPI, forgotPasswordAPI } from '../../Api/Authentication';
import { jwtDecode } from 'jwt-decode';
import { saveToken } from '../../Utils/Jwt-Utils';
import ResetPasswordModal from '../../Pages/ResetPasswordModal';
import GoogleSignIn from '../../components/Button/GoogleSignIn';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const res = await loginAPI(formData);

      // ✅ Print the entire response to console
      console.log("Login API Response:", res);

      const { accessToken, refreshToken, roles, id } = res;
      saveToken(accessToken);

      const decoded = jwtDecode(accessToken);
      const expiryTime = decoded.exp * 1000;
      const timeout = expiryTime - Date.now();

      if (timeout <= 0) {
        localStorage.removeItem('authToken');
        alert("Session expired. Please login again.");
        return navigate('/login');
      }

      setTimeout(() => {
        localStorage.removeItem('authToken');
        alert("Session expired. Please login again.");
        navigate('/login');
      }, timeout);

      localStorage.setItem("userRoles", JSON.stringify(roles));
      localStorage.setItem("userId", id);

      if (roles.includes("ADMIN")) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrors({ general: "Invalid email or password" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      await forgotPasswordAPI(email);
      alert("OTP sent to your email.");
    } catch (err) {
      console.error("OTP send error:", err);
      alert("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`py-2 pl-10 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                />
              </div>
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`py-2 pl-10 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                />
              </div>
              {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setIsModalOpen(true)}
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? "Signing in..." : <>Sign in <FiArrowRight className="ml-2" /></>}
              </button>
            </div>

            {errors.general && <p className="text-center text-sm text-red-600">{errors.general}</p>}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <GoogleSignIn />
            </div>
          </div>
        </div>
      </div>

      <ResetPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleForgotPassword}
      />
    </div>
  );
};

export default Login;
