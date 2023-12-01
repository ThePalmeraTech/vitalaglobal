// app/javascript/components/Profile.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);


  useEffect(() => {
    const url = `/api/v1/profiles/${id}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setProfile(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const renderProfileData = () => {
    return (
      <ul className="profile-list">
        {Object.entries(profile).map(([key, value]) => {
          if (typeof value === 'boolean') {
            value = value ? 'Yes' : 'No';
          }

          const formattedKey = key.replace(/_/g, ' ')
                                  .split(' ')
                                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join(' ');

          return (
            <li key={key}>
              <strong>{formattedKey}:</strong> <span>{value.toString()}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="profile-container">
      <h1 className="my_profile_title">Hi, {profile.name}</h1>
      <div className="profile-card mb-5">
        <h4>Your Personal Health Information:</h4>
        {renderProfileData()}
      </div>
    </div>
  );
};

export default Profile;
