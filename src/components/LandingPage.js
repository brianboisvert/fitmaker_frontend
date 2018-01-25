import React from 'react';
import { NavLink } from 'react-router-dom';


const LandingPage = () => {

  return (
    <div className="landing-page">
      <div className="loggin-or-register">
        <div className="welcome">
          <h1>Welcome to FitMaker</h1>
          <button className="ui button">
            <NavLink style={{"color": "black"}} to="/login">Log In</NavLink>
          </button>
          <button className="ui button">
            <NavLink style={{"color": "black"}} to="/register">Register</NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
