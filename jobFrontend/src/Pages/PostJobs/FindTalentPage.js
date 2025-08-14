// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import TalentCard from './TalentCard';

// const FindTalentPage = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/profile/allProfile')
//       .then(response => setProfiles(response.data))
//       .catch(error => console.error("Error fetching profiles:", error));
//   }, []);

//   const handleViewProfile = (profileId) => {
//     console.log("View Profile ID:", profileId);
//     // Navigate to a profile detail page if needed
//   };

//   const handleMessage = (profileId) => {
//     console.log("Message Profile ID:", profileId);
//     // Trigger chat box or open message modal
//   };

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {profiles.map(profile => (
//         <TalentCard
//           key={profile.id}
//           profile={profile}
//           onViewProfile={handleViewProfile}
//           onMessage={handleMessage}
//         />
//       ))}
//     </div>
//   );
// };

// export default FindTalentPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TalentCard from './TalentCard';
import Footer from '../../components/Footer/Footer';

const FindTalentPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/profile/allProfile')
      .then(response => {
        setProfiles(response.data);
        setFilteredProfiles(response.data); // show all initially
      })
      .catch(error => {
        console.error("Error fetching profiles:", error);
      });
  }, []);

  const handleFilter = () => {
    let filtered = [...profiles];

    const hasSearch = searchText.trim() !== '';
    const hasLocation = locationFilter.trim() !== '';
    const hasExperience = experienceFilter !== '';

    // If no filter is applied, show all
    if (!hasSearch && !hasLocation && !hasExperience) {
      setFilteredProfiles(profiles);
      return;
    }

    if (hasSearch) {
      filtered = filtered.filter(p =>
        (p.jobTitle && p.jobTitle.toLowerCase().includes(searchText.toLowerCase())) ||
        (p.skills && p.skills.some(skill => skill.toLowerCase().includes(searchText.toLowerCase())))
      );
    }

    if (hasLocation) {
      filtered = filtered.filter(p =>
        p.location && p.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (hasExperience) {
      filtered = filtered.filter(p => {
        const expList = p.experiences || [];
        const totalYears = expList.reduce((sum, exp) => {
          const from = new Date(exp.startDate);
          const to = exp.endDate ? new Date(exp.endDate) : new Date();
          const years = (to - from) / (1000 * 60 * 60 * 24 * 365);
          return sum + years;
        }, 0);

        if (experienceFilter === '0-1') return totalYears <= 1;
        if (experienceFilter === '2-5') return totalYears > 1 && totalYears <= 5;
        if (experienceFilter === '5+') return totalYears > 5;
        return true;
      });
    }

    setFilteredProfiles(filtered);
  };

  const handleReset = () => {
    setSearchText('');
    setLocationFilter('');
    setExperienceFilter('');
    setFilteredProfiles(profiles); // reset to all
  };

  return (
    <div>
    <div className="p-6">
      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by skill or job title"
          className="border rounded px-4 py-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter by location"
          className="border rounded px-4 py-2"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />

        <select
          className="border rounded px-4 py-2"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          <option value="">All Experience</option>
          <option value="0-1">0-1 years</option>
          <option value="2-5">2-5 years</option>
          <option value="5+">5+ years</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={handleFilter}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Talent Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(filteredProfiles) && filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <TalentCard
              key={profile.id}
              profile={profile}
              onViewProfile={() => console.log("View", profile.id)}
              onMessage={() => console.log("Message", profile.id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No matching talent found.
          </p>
        )}
      </div>
     
    </div>
    <div>
        <Footer/>
      </div>

    </div>
  );
};

export default FindTalentPage;
