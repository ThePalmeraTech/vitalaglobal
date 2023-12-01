import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Profiles from "../components/Profiles";
import Profile from "../components/Profile";
import NewProfile from "../components/NewProfile";
import BlogPosts from "../components/BlogPosts";
import BlogPost from "../components/BlogPost";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="profiles/:id" element={<Profile />} />
          <Route path="profiles/new" element={<NewProfile />} />
          <Route path="blog-posts" element={<BlogPosts />} />
          <Route path="blog-posts/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
