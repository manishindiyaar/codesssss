import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [infoSubmitted, setInfoSubmitted] = useState(false);
  const [interest, setInterest] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const handleLinkedInSubmit = (profile) => {
    setLinkedinProfile(profile);
    setInfoSubmitted(true);
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of all collected information
    console.log('LinkedIn Profile:', linkedinProfile);
    console.log('Interest:', interest);
    console.log('Age:', age);
    console.log('Location:', location);
    setInterest('');
    setAge('');
    setLocation('');
  };

  return (
    <div>
      {!infoSubmitted ? (
        <form onSubmit={(e) => {e.preventDefault(); setInfoSubmitted(true);}}>
          <label>
            <p className='linkp'>Put Your LinkdIn Here</p>
            <input
              type="text"
              placeholder='Paste your LinkedIn profile link'
              value={linkedinProfile}
              onChange={(e) => setLinkedinProfile(e.target.value)}
            />
          </label>
          
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleInfoSubmit}>
          <label>
            Interest:
            <select value={interest} onChange={(e) => setInterest(e.target.value)}>
              <option value="">Select Interest</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Art">Art</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Age:
            <select value={age} onChange={(e) => setAge(e.target.value)}>
              <option value="">Select Age</option>
              <option value="Under 18">Under 18</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Location:
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Tokyo">Tokyo</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
