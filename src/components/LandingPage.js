import React from 'react';
import { NavLink } from 'react-router-dom'


const LandingPage = () => {

  return (
    <div className="landing-page">
      <h1>Welcome to FitMaker</h1>
      <h2>Time to get to work</h2>
      <button>
        <NavLink to="/login">Log In</NavLink>
      </button>
      <button>
        <NavLink to="/register">Register</NavLink>
      </button>
    </div>
  )
}

export default LandingPage;
