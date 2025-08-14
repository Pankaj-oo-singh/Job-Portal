// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
// import { UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedMode);
//     document.documentElement.classList.toggle('dark', savedMode);
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.account-menu') && !event.target.closest('.account-button')) {
//         setIsAccountMenuOpen(false);
//       }
//       if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isLoggedIn = localStorage.getItem('accessToken');

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo and navigation */}
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">JobPortal</span>
//             </Link>

//             <div className="hidden md:ml-6 md:flex md:space-x-8">
//               <Link to="/jobs" className="text-gray-900 dark:text-white px-3 py-2 text-sm font-medium">Find Jobs</Link>
//               <Link to="/talent" className="text-gray-500 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Find Talent</Link>
//               <Link to="/post-job" className="text-gray-500 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Post Job</Link>
//               <Link to="/posted-jobs" className="text-gray-500 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Posted Jobs</Link>
//               <Link to="/job-history" className="text-gray-500 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Job History</Link>
//             </div>
//           </div>

//           {/* Right section */}
//           <div className="flex items-center space-x-4">
//             {/* Dark mode toggle */}
//             <button onClick={toggleDarkMode} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
//               {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
//             </button>

//             {/* Settings */}
//             {isLoggedIn && (
//               <button onClick={() => navigate('/settings')} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
//                 <Cog6ToothIcon className="h-6 w-6" />
//               </button>
//             )}

//             {/* Account / Auth */}
//             {isLoggedIn ? (
//               // Logged in: show profile dropdown
//               <div className="relative account-menu">
//                 <button
//                   className="account-button flex items-center text-sm focus:outline-none"
//                   onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
//                 >
//                   <UserCircleIcon className="h-8 w-8 text-gray-400" />
//                 </button>
//                 {isAccountMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-md rounded-md py-1 z-50 ring-1 ring-black ring-opacity-5">
//                     <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Your Profile</Link>
//                     <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</Link>
//                     <button
//                       onClick={() => {
//                         localStorage.clear();
//                         navigate('/login');
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               // Not logged in: show Login & Register buttons
//               <div className="flex space-x-2">
//                 <Link
//                   to="/login"
//                   className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
//                 >
//                   Register
//                 </Link>
//               </div>
//             )}

//             {/* Mobile menu toggle */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="menu-button p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
//               >
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu content */}
//       {isMenuOpen && (
//         <div className="mobile-menu md:hidden px-4 pt-2 pb-3 space-y-1">
//           <Link to="/jobs" className="block text-gray-800 dark:text-white">Find Jobs</Link>
//           <Link to="/talent" className="block text-gray-600 dark:text-gray-300">Find Talent</Link>
//           <Link to="/post-job" className="block text-gray-600 dark:text-gray-300">Post Job</Link>
//           <Link to="/posted-jobs" className="block text-gray-600 dark:text-gray-300">Posted Jobs</Link>
//           <Link to="/job-history" className="block text-gray-600 dark:text-gray-300">Job History</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// // export default Navbar;
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
// import { UserCircleIcon } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedMode);
//     document.documentElement.classList.toggle('dark', savedMode);
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.account-menu') && !event.target.closest('.account-button')) {
//         setIsAccountMenuOpen(false);
//       }
//       if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isLoggedIn = localStorage.getItem('authToken');

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo and Nav */}
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">JobPortal</Link>
//             <div className="hidden md:ml-6 md:flex md:space-x-8">
//               <Link to="/jobs" className="text-gray-900 dark:text-white px-3 py-2 text-sm font-medium">Find Jobs</Link>
//               <Link to="/talent" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Find Talent</Link>
//               <Link to="/post-job" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Post Job</Link>
//               <Link to="/posted-jobs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Posted Jobs</Link>
//               <Link to="/job-history" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Job History</Link>
//             </div>
//           </div>

//           {/* Right section */}
//           <div className="flex items-center space-x-4">
//             {/* Dark mode button */}
//             <button onClick={toggleDarkMode} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
//               {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
//             </button>

//             {/* If Logged In: Show Account Menu */}
//             {isLoggedIn ? (
//               <div className="relative account-menu">
//                 <button
//                   className="account-button flex items-center text-sm focus:outline-none"
//                   onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
//                 >
//                   <UserCircleIcon className="h-8 w-8 text-gray-400" />
//                 </button>
//                 {isAccountMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-700 shadow-md rounded-md py-1 z-50 ring-1 ring-black ring-opacity-5">
//                     <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">👤 Profile</Link>
//                     <Link to="/messages" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">💬 Messages</Link>
//                     <Link to="/resume" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">📄 Resume</Link>
//                     <button
//                       onClick={toggleDarkMode}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//                     >
//                       {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
//                     </button>
//                     <button
//                       onClick={() => {
//                         localStorage.clear();
//                         navigate('/login');
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
//                     >
//                       🚪 Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex space-x-2">
//                 <Link to="/login" className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Login</Link>
//                 <Link to="/signup" className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">Register</Link>
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="menu-button p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
//               >
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="mobile-menu md:hidden px-4 pt-2 pb-3 space-y-1">
//           <Link to="/jobs" className="block text-gray-800 dark:text-white">Find Jobs</Link>
//           <Link to="/talent" className="block text-gray-600 dark:text-gray-300">Find Talent</Link>
//           <Link to="/post-job" className="block text-gray-600 dark:text-gray-300">Post Job</Link>
//           <Link to="/posted-jobs" className="block text-gray-600 dark:text-gray-300">Posted Jobs</Link>
//           <Link to="/job-history" className="block text-gray-600 dark:text-gray-300">Job History</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// // export default Navbar;
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
// import { UserCircleIcon } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const navigate = useNavigate();

//   const BASE_URL = "http://localhost:8080"; // adjust if different

//   useEffect(() => {
//     const savedMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedMode);
//     document.documentElement.classList.toggle('dark', savedMode);
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   const isLoggedIn = localStorage.getItem('authToken');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) return;

//         const res = await fetch(`${BASE_URL}/profile/me`, {
//           headers: {
//             "Authorization": `Bearer ${token}`
//           },
//           credentials: "include"
//         });

//         if (res.ok) {
//           const data = await res.json();
//           setProfileImage(data.profileImage); // expects field name `profileImage`
//         } else {
//           console.error("Failed to fetch profile", res.status);
//         }
//       } catch (error) {
//         console.error("Failed to fetch profile", error);
//       }
//     };

//     if (isLoggedIn) {
//       fetchProfile();
//     }
//   }, [isLoggedIn]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.account-menu') && !event.target.closest('.account-button')) {
//         setIsAccountMenuOpen(false);
//       }
//       if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo and Nav */}
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">JobPortal</Link>
//             <div className="hidden md:ml-6 md:flex md:space-x-8">
//               <Link to="/jobs" className="text-gray-900 dark:text-white px-3 py-2 text-sm font-medium">Find Jobs</Link>
//               <Link to="/talent" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Find Talent</Link>
//               <Link to="/post-job" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Post Job</Link>
//               <Link to="/posted-jobs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Posted Jobs</Link>
//               <Link to="/job-history" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Job History</Link>
//             </div>
//           </div>

//           {/* Right section */}
//           <div className="flex items-center space-x-4">
//             {/* Dark mode button */}
//             <button onClick={toggleDarkMode} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
//               {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
//             </button>

//             {/* Account / Auth */}
//             {isLoggedIn ? (
//               <div className="relative account-menu">
//                 <button
//                   className="account-button flex items-center text-sm focus:outline-none"
//                   onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
//                 >
//                   {profileImage ? (
//                     <img
//                       src={`${BASE_URL}/uploads/profile-photos/${profileImage}`}
//                       alt="Profile"
//                       className="h-8 w-8 rounded-full object-cover border"
//                     />
//                   ) : (
//                     <UserCircleIcon className="h-8 w-8 text-gray-400" />
//                   )}
//                 </button>
//                 {isAccountMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-700 shadow-md rounded-md py-1 z-50 ring-1 ring-black ring-opacity-5">
//                     <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">👤 Profile</Link>
//                     <Link to="/messages" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">💬 Messages</Link>
//                     <Link to="/resume" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">📄 Resume</Link>
//                     <button
//                       onClick={toggleDarkMode}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//                     >
//                       {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
//                     </button>
//                     <button
//                       onClick={() => {
//                         localStorage.clear();
//                         navigate('/login');
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
//                     >
//                       🚪 Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex space-x-2">
//                 <Link to="/login" className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Login</Link>
//                 <Link to="/signup" className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">Register</Link>
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="menu-button p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
//               >
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="mobile-menu md:hidden px-4 pt-2 pb-3 space-y-1">
//           <Link to="/jobs" className="block text-gray-800 dark:text-white">Find Jobs</Link>
//           <Link to="/talent" className="block text-gray-600 dark:text-gray-300">Find Talent</Link>
//           <Link to="/post-job" className="block text-gray-600 dark:text-gray-300">Post Job</Link>
//           <Link to="/posted-jobs" className="block text-gray-600 dark:text-gray-300">Posted Jobs</Link>
//           <Link to="/job-history" className="block text-gray-600 dark:text-gray-300">Job History</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const isLoggedIn = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) return;

        const res = await fetch(`${BASE_URL}/profile/me`, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          credentials: "include"
        });

        if (res.ok) {
          const data = await res.json();
         
          setProfile(data);
        } else {
          console.error("Failed to fetch profile", res.status);
        }
      } catch (error) {
        console.error("Failed to fetch profile", error);
      }
    };

    if (isLoggedIn) {
      fetchProfile();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.account-menu') && !event.target.closest('.account-button')) {
        setIsAccountMenuOpen(false);
      }
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Nav */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">JobPortal</Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/jobs" className="text-gray-900 dark:text-white px-3 py-2 text-sm font-medium">Find Jobs</Link>
              <Link to="/talent" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Find Talent</Link>
              <Link to="/post-job" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Post Job</Link>
              <Link to="/posted-jobs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Posted Jobs</Link>
              <Link to="/job-history" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Job History</Link>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Dark mode button */}
            <button onClick={toggleDarkMode} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
              {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>

            {/* Account Button */}
            {isLoggedIn ? (
              <div className="relative account-menu">
                <button
                  className="account-button flex items-center space-x-2 text-sm focus:outline-none"
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                >
                  {profile?.profileImage ? (
                    <img
                      src={`${BASE_URL}/uploads/profile-photos/${profile.profileImage}`}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover border"
                    />
                  ) : (
                    <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  )}
                  {profile?.jobTitle && (
                    <span className="hidden sm:block font-medium text-gray-800 dark:text-gray-200">
                      {profile.jobTitle}
                    </span>
                  )}
                </button>

                {isAccountMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-700 shadow-md rounded-md py-1 z-50 ring-1 ring-black ring-opacity-5">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">👤 Profile</Link>
                    <Link to="/messages" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">💬 Messages</Link>
                    <Link to="/resume" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">📄 Resume</Link>
                    <button
                      onClick={toggleDarkMode}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </button>
                    <button
                      onClick={() => {
                        localStorage.clear();
                        navigate('/login');
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Login</Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">Register</Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden px-4 pt-2 pb-3 space-y-1">
          <Link to="/jobs" className="block text-gray-800 dark:text-white">Find Jobs</Link>
          <Link to="/talent" className="block text-gray-600 dark:text-gray-300">Find Talent</Link>
          <Link to="/post-job" className="block text-gray-600 dark:text-gray-300">Post Job</Link>
          <Link to="/posted-jobs" className="block text-gray-600 dark:text-gray-300">Posted Jobs</Link>
          <Link to="/job-history" className="block text-gray-600 dark:text-gray-300">Job History</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
