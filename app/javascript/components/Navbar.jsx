import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const location = useLocation();
  const isRoot = location.pathname === '/';

  return (
    <nav className={`navbar navbar-expand-lg fixed-top bg_primary-color mb-5 p-1 ${isRoot ? 'hide-nav' : ''}`}>
      <div className='container d-flex justify-content-between'>
        <a href='/' className="navbar-brand w-50">
          <img
            src="https://static.wixstatic.com/media/1fd4c8_149d95bff30f485d86ac5d672efbd738~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Aya%20Home%20Icon.png"
            alt="Your Alt Text"
            width="70"
            height="70"
          />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse w-100`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/blog-posts" className="nav-link m-3">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/profiles" className="nav-link m-3">Profiles</Link>
            </li>
            <li className="nav-item">
              <Link to="profiles/7" className="nav-link m-3">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
