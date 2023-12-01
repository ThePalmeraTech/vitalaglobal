import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current location is the root
  const isRoot = location.pathname === '/';

  return (
    <nav className={`fixed-top bg_primary-color mb-5 p-3 ${isRoot ? 'hide-nav' : ''}`}>
      <div className='container'>
        <div className='d-flex flex-direction-column'>
        <a href='/'>
          <img
            src="https://static.wixstatic.com/media/1fd4c8_149d95bff30f485d86ac5d672efbd738~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Aya%20Home%20Icon.png"
            alt="Your Alt Text"
            width="70"
            height="70"
          />
        </a>

        <div className='d-flex flex-direction-row'>
            <a href='#'>News</a>
            <a href='#'>My Profile</a>
        </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
