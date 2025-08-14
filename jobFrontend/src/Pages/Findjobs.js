
// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import JobCard from './JobCard';

// const jobTypeOptions = ['Full-time', 'Part-time', 'Internship'];
// const experienceLevels = ['Fresher', '1-3 years', '3-5 years', '5+ years'];

// // Demo job data
// const demoJobs = [
//   {
//     id: 1,
//     title: 'Frontend Developer',
//     company: 'Google',
//     applicants: 45,
//     level: 'Entry Level',
//     type: 'Full-time',
//     mode: 'Remote',
//     summary: 'We are looking for a frontend developer to build responsive UIs using React.',
//     package: 80000,
//     date: '2025-07-06T12:00:00Z',
//   },
//   {
//     id: 2,
//     title: 'Backend Developer',
//     company: 'Microsoft',
//     applicants: 30,
//     level: '1-3 years',
//     type: 'Part-time',
//     mode: 'Remote',
//     summary: 'Join our backend team to create REST APIs and work on cloud deployment.',
//     package: 60000,
//     date: '2025-07-05T12:00:00Z',
//   },
//   {
//     id: 3,
//     title: 'UI/UX Designer',
//     company: 'Adobe',
//     applicants: 20,
//     level: 'Fresher',
//     type: 'Internship',
//     mode: 'Remote',
//     summary: 'Design mobile-first, accessible user interfaces for modern web apps.',
//     package: 15000,
//     date: '2025-07-04T12:00:00Z',
//   },
// ];

// const FindJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);

//   const [selectedTitles, setSelectedTitles] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [experience, setExperience] = useState('');
//   const [salaryRange, setSalaryRange] = useState([0, 100000]);

//   const [allJobTitles, setAllJobTitles] = useState([]);

//   useEffect(() => {
//     // Simulate fetching jobs
//     setJobs(demoJobs);
//     setFilteredJobs(demoJobs);

//     const uniqueTitles = [...new Set(demoJobs.map(job => job.title))];
//     setAllJobTitles(uniqueTitles.map(title => ({ label: title, value: title })));
//   }, []);

//   const handleFilter = () => {
//     const filtered = jobs.filter(job => {
//       const titleMatch =
//         selectedTitles.length === 0 ||
//         selectedTitles.some(sel => job.title.toLowerCase().includes(sel.value.toLowerCase()));

//       const typeMatch =
//         selectedTypes.length === 0 || selectedTypes.includes(job.type);

//       const experienceMatch =
//         !experience || job.level.toLowerCase().includes(experience.toLowerCase());

//       const salaryMatch =
//         job.package >= salaryRange[0] && job.package <= salaryRange[1];

//       return titleMatch && typeMatch && experienceMatch && salaryMatch;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>

//         {/* Filters */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {/* Job Titles */}
//           <div>
//             <label className="block mb-1 font-medium">Job Titles</label>
//             <Select
//               options={allJobTitles}
//               isMulti
//               value={selectedTitles}
//               onChange={setSelectedTitles}
//               placeholder="Select job titles"
//             />
//           </div>

//           {/* Job Types */}
//           <div>
//             <label className="block mb-1 font-medium">Job Types</label>
//             <div className="space-y-1">
//               {jobTypeOptions.map(type => (
//                 <label key={type} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     value={type}
//                     checked={selectedTypes.includes(type)}
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       setSelectedTypes(prev =>
//                         checked ? [...prev, type] : prev.filter(t => t !== type)
//                       );
//                     }}
//                     className="mr-2"
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block mb-1 font-medium">Experience</label>
//             <select
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="w-full border px-4 py-2 rounded-md"
//             >
//               <option value="">All</option>
//               {experienceLevels.map((level) => (
//                 <option key={level} value={level}>
//                   {level}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Salary Filter */}
//           <div className="col-span-2">
//             <label className="block mb-1 font-medium">Salary Range (₹)</label>
//             <div className="px-2">
//               <Slider
//                 range
//                 min={0}
//                 max={100000}
//                 step={1000}
//                 defaultValue={salaryRange}
//                 onChange={setSalaryRange}
//               />
//               <div className="flex justify-between text-sm text-gray-600 mt-2">
//                 <span>₹{salaryRange[0]}</span>
//                 <span>₹{salaryRange[1]}</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Button */}
//           <div className="col-span-3 text-right">
//             <button
//               onClick={handleFilter}
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
//             >
//               Search Jobs
//             </button>
//           </div>
//         </div>

//         {/* Job Listings in Rows & Columns */}
//         {filteredJobs.length === 0 ? (
//           <p className="text-gray-500">No jobs found.</p>
//         ) : (
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredJobs.map((job) => (
//               <JobCard key={job.id} job={job} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FindJobs;



// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import JobCard from './JobCard';

// const jobTypeOptions = ['Full-time', 'Part-time', 'Internship'];
// const experienceLevels = ['Fresher', '1-3 years', '3-5 years', '5+ years'];

// const BASE_URL = "http://localhost:8080";

// const FindJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);

//   const [selectedTitles, setSelectedTitles] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [experience, setExperience] = useState('');
//   const [salaryRange, setSalaryRange] = useState([0, 100000]);

//   const [allJobTitles, setAllJobTitles] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/job/all`);
//         const data = await response.json();
//         setJobs(data);
//         setFilteredJobs(data);

//         const uniqueTitles = [...new Set(data.map(job => job.jobTitle))];
//         setAllJobTitles(uniqueTitles.map(title => ({ label: title, value: title })));
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleFilter = () => {
//     const filtered = jobs.filter(job => {
//       const titleMatch =
//         selectedTitles.length === 0 ||
//         selectedTitles.some(sel => job.jobTitle.toLowerCase().includes(sel.value.toLowerCase()));

//       const typeMatch =
//         selectedTypes.length === 0 || selectedTypes.includes(job.jobType);

//       const experienceMatch =
//         !experience || job.experience.toLowerCase().includes(experience.toLowerCase());

//       const salaryMatch =
//         job.packageOffered >= salaryRange[0] && job.packageOffered <= salaryRange[1];

//       return titleMatch && typeMatch && experienceMatch && salaryMatch;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>

//         {/* Filters */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {/* Job Titles */}
//           <div>
//             <label className="block mb-1 font-medium">Job Titles</label>
//             <Select
//               options={allJobTitles}
//               isMulti
//               value={selectedTitles}
//               onChange={setSelectedTitles}
//               placeholder="Select job titles"
//             />
//           </div>

//           {/* Job Types */}
//           <div>
//             <label className="block mb-1 font-medium">Job Types</label>
//             <div className="space-y-1">
//               {jobTypeOptions.map(type => (
//                 <label key={type} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     value={type}
//                     checked={selectedTypes.includes(type)}
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       setSelectedTypes(prev =>
//                         checked ? [...prev, type] : prev.filter(t => t !== type)
//                       );
//                     }}
//                     className="mr-2"
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block mb-1 font-medium">Experience</label>
//             <select
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="w-full border px-4 py-2 rounded-md"
//             >
//               <option value="">All</option>
//               {experienceLevels.map((level) => (
//                 <option key={level} value={level}>
//                   {level}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Salary Filter */}
//           <div className="col-span-2">
//             <label className="block mb-1 font-medium">Salary Range (₹)</label>
//             <div className="px-2">
//               <Slider
//                 range
//                 min={0}
//                 max={200000}
//                 step={1000}
//                 defaultValue={salaryRange}
//                 onChange={setSalaryRange}
//               />
//               <div className="flex justify-between text-sm text-gray-600 mt-2">
//                 <span>₹{salaryRange[0]}</span>
//                 <span>₹{salaryRange[1]}</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Button */}
//           <div className="col-span-3 text-right">
//             <button
//               onClick={handleFilter}
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
//             >
//               Search Jobs
//             </button>
//           </div>
//         </div>

//         {/* Job Listings */}
//         {filteredJobs.length === 0 ? (
//           <p className="text-gray-500">No jobs found.</p>
//         ) : (
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredJobs.map((job) => (
//               <JobCard
//                 key={job.id}
//                 job={{
//                   id: job.id,
//                   title: job.jobTitle,
//                   company: job.company,
//                   applicants: job.applicants?.length || 0,
//                   level: job.experience,
//                   type: job.jobType,
//                   mode: job.location,
//                   summary: job.about,
//                   package: job.packageOffered,
//                   date: job.postTime,
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default FindJobs;
// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import JobCard from './JobCard';

// const jobTypeOptions = ['Full-time', 'Part-time', 'Internship'];
// const experienceLevels = ['Fresher', '1-3 years', '3-5 years', '5+ years'];

// const BASE_URL = "http://localhost:8080";

// const FindJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);

//   const [selectedTitles, setSelectedTitles] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [experience, setExperience] = useState('');
//   const [salaryRange, setSalaryRange] = useState([0, 100000]);

//   const [allJobTitles, setAllJobTitles] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/job/all`);
//         const data = await response.json();
//         setJobs(data);
//         setFilteredJobs(data);

//         const uniqueTitles = [...new Set(data.map(job => job.jobTitle))];
//         setAllJobTitles(uniqueTitles.map(title => ({ label: title, value: title })));
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleFilter = () => {
//     const filtered = jobs.filter(job => {
//       const titleMatch =
//         selectedTitles.length === 0 ||
//         selectedTitles.some(sel => job.jobTitle.toLowerCase().includes(sel.value.toLowerCase()));

//       const typeMatch =
//         selectedTypes.length === 0 || selectedTypes.includes(job.jobType);

//       const experienceMatch =
//         !experience || job.experience.toLowerCase().includes(experience.toLowerCase());

//       const salaryMatch =
//         job.packageOffered >= salaryRange[0] && job.packageOffered <= salaryRange[1];

//       return titleMatch && typeMatch && experienceMatch && salaryMatch;
//     });

//     setFilteredJobs(filtered);
//   };

//   const onSaveJob = (savedJob) => {
//     console.log("Job saved to backend:", savedJob);
//     // Optionally update UI, or notify user here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>

//         {/* Filters */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {/* Job Titles */}
//           <div>
//             <label className="block mb-1 font-medium">Job Titles</label>
//             <Select
//               options={allJobTitles}
//               isMulti
//               value={selectedTitles}
//               onChange={setSelectedTitles}
//               placeholder="Select job titles"
//             />
//           </div>

//           {/* Job Types */}
//           <div>
//             <label className="block mb-1 font-medium">Job Types</label>
//             <div className="space-y-1">
//               {jobTypeOptions.map(type => (
//                 <label key={type} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     value={type}
//                     checked={selectedTypes.includes(type)}
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       setSelectedTypes(prev =>
//                         checked ? [...prev, type] : prev.filter(t => t !== type)
//                       );
//                     }}
//                     className="mr-2"
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block mb-1 font-medium">Experience</label>
//             <select
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="w-full border px-4 py-2 rounded-md"
//             >
//               <option value="">All</option>
//               {experienceLevels.map((level) => (
//                 <option key={level} value={level}>
//                   {level}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Salary Filter */}
//           <div className="col-span-2">
//             <label className="block mb-1 font-medium">Salary Range (₹)</label>
//             <div className="px-2">
//               <Slider
//                 range
//                 min={0}
//                 max={200000}
//                 step={1000}
//                 defaultValue={salaryRange}
//                 onChange={setSalaryRange}
//               />
//               <div className="flex justify-between text-sm text-gray-600 mt-2">
//                 <span>₹{salaryRange[0]}</span>
//                 <span>₹{salaryRange[1]}</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Button */}
//           <div className="col-span-3 text-right">
//             <button
//               onClick={handleFilter}
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
//             >
//               Search Jobs
//             </button>
//           </div>
//         </div>

//         {/* Job Listings */}
//         {filteredJobs.length === 0 ? (
//           <p className="text-gray-500">No jobs found.</p>
//         ) : (
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredJobs.map((job) => (
//               <JobCard
//                 key={job.id}
//                 job={{
//                   id: job.id,
//                   title: job.jobTitle,
//                   company: job.company,
//                   applicants: job.applicants?.length || 0,
//                   level: job.experience,
//                   type: job.jobType,
//                   mode: job.location,
//                   summary: job.about,
//                   package: job.packageOffered,
//                   date: job.postTime,
//                 }}
//                 onSave={onSaveJob}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FindJobs;







import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import JobCard from './JobCard';

const jobTypeOptions = ['Full-time', 'Part-time', 'Internship'];
const experienceLevels = ['Fresher', '1-3 years', '3-5 years', '5+ years'];
const jobStatusOptions = ['OPEN', 'CLOSED'];

const BASE_URL = "http://localhost:8080";

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [experience, setExperience] = useState('');
  const [salaryRange, setSalaryRange] = useState([0, 100000]);

  const [allJobTitles, setAllJobTitles] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/job/all`);
        const data = await response.json();
        setJobs(data);
        setFilteredJobs(data);

        const uniqueTitles = [...new Set(data.map(job => job.jobTitle))];
        setAllJobTitles(uniqueTitles.map(title => ({ label: title, value: title })));
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleFilter = () => {
    const filtered = jobs.filter(job => {
      const titleMatch =
        selectedTitles.length === 0 ||
        selectedTitles.some(sel => job.jobTitle.toLowerCase().includes(sel.value.toLowerCase()));

      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(job.jobType);

      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(job.jobStatus);

      const experienceMatch =
        !experience || job.experience.toLowerCase().includes(experience.toLowerCase());

      const salaryMatch =
        job.packageOffered >= salaryRange[0] && job.packageOffered <= salaryRange[1];

      return titleMatch && typeMatch && statusMatch && experienceMatch && salaryMatch;
    });

    setFilteredJobs(filtered);
  };

  const onSaveJob = (savedJob) => {
    console.log("Job saved to backend:", savedJob);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>

        {/* Filters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Job Titles */}
          <div>
            <label className="block mb-1 font-medium">Job Titles</label>
            <Select
              options={allJobTitles}
              isMulti
              value={selectedTitles}
              onChange={setSelectedTitles}
              placeholder="Select job titles"
            />
          </div>

          {/* Job Types */}
          <div>
            <label className="block mb-1 font-medium">Job Types</label>
            <div className="space-y-1">
              {jobTypeOptions.map(type => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSelectedTypes(prev =>
                        checked ? [...prev, type] : prev.filter(t => t !== type)
                      );
                    }}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-1 font-medium">Experience</label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            >
              <option value="">All</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Job Status */}
          <div>
            <label className="block mb-1 font-medium">Job Status</label>
            <div className="space-y-1">
              {jobStatusOptions.map(status => (
                <label key={status} className="flex items-center">
                  <input
                    type="checkbox"
                    value={status}
                    checked={selectedStatus.includes(status)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSelectedStatus(prev =>
                        checked ? [...prev, status] : prev.filter(s => s !== status)
                      );
                    }}
                    className="mr-2"
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          {/* Salary Filter */}
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Salary Range (₹)</label>
            <div className="px-2">
              <Slider
                range
                min={0}
                max={200000}
                step={1000}
                defaultValue={salaryRange}
                onChange={setSalaryRange}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>₹{salaryRange[0]}</span>
                <span>₹{salaryRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-3 text-right">
            <button
              onClick={handleFilter}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Search Jobs
            </button>
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length === 0 ? (
          <p className="text-gray-500">No jobs found.</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
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
                  status: job.jobStatus,
                }}
                onSave={onSaveJob}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindJobs;
