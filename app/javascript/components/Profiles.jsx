import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profiles = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const url = "/api/v1/profiles";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setProfiles(res))
      .catch(() => navigate("/"));
  }, []);

    const allProfiles = profiles.map((profile, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
          <h5 className="card-title">{profile.name}</h5>
          <h5 className="card-title">Age: {profile.age}</h5>
            <Link to={`/profiles/${profile.id}`} className="btn custom-button">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    ));
    const noProfile = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No profiles yet. Why not <Link to="/new_profile">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Profiles</h1>
            <p className="lead text-muted">
              Profiles created by our community
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-end mb-3">
              <Link to="/profiles/new" className="btn custom-button">
                Create New Profile
              </Link>
            </div>
            <div className="row">
              {profiles.length > 0 ? allProfiles : noProfile}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>

      </>
    );
};


export default Profiles;
