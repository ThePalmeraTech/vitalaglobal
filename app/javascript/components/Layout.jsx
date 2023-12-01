import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the current route's component */}
    </>
  );
};

export default Layout;
