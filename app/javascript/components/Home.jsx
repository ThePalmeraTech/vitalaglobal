import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 bg_blue d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container font-white text-center">
          <img
            src="https://static.wixstatic.com/media/1fd4c8_1acf3a60a2694542acbeca770fe1b5f9~mv2.png/v1/fill/w_296,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%2520Aya_Pink-01-01_edited.png"
            alt="Your Alt Text"
            />
          <h1 className="display-4">Empowering Women's Health</h1>
          <p className="lead">
          Your Trusted Companion for Wellness and Knowledge
          </p>
          <hr className="my-4" />
          <Link to="/profiles/new" className="btn custom-button m-1">Start Profile</Link>

          <Link to="blog-posts" className="btn custom-button m-1">View Blog Posts</Link>


        </div>
      </div>
      <img className="intro-img-right" src="https://static.wixstatic.com/media/1fd4c8_b7c5f90e918144f5a860b829ef50086a~mv2.png/v1/crop/x_5102,y_6,w_2764,h_1971/fill/w_436,h_311,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HOME%20PAGE%20NEW.png"/>
      <img className="intro-img-left" src="https://static.wixstatic.com/media/1fd4c8_b7c5f90e918144f5a860b829ef50086a~mv2.png/v1/crop/x_71,y_0,w_2746,h_1977/fill/w_433,h_311,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HOME%20PAGE%20NEW.png"/>
    </div>
);
