import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profiles = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(9);

  useEffect(() => {
    const url = `/api/v1/profiles?page=${currentPage}&limit=${profilesPerPage}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setProfiles(res))
      .catch(() => navigate("/"));
  }, [currentPage, profilesPerPage]);

    const noProfile = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No profiles yet. Why not <Link to="/new_profile">create one</Link>
        </h4>
      </div>
    );

     // Calculate the number of pages
  const pageCount = Math.ceil(profiles.length / profilesPerPage);
  // Get the profiles for the current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const allProfiles = currentProfiles.map((profile, index) => (
    // Your profile cards here...
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

  // Functions to handle page changes
  const handlePreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, pageCount));
  };

  // Render pagination controls
  const renderPaginationControls = () => {
    return (
      <div className="pagination-controls container text-center">
        <button className="btn btn-primary btn-sm m-2" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {pageCount}</span>
        <button className="btn btn-primary btn-sm m-2" onClick={handleNextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    );
  };

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

          </main>
          {renderPaginationControls()}
        </div>

      </>
    );
};


export default Profiles;
