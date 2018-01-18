import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../App.css'
import { connect } from 'react-redux'
import { authReducer } from '../reducers/AuthReducer'

const NavBar = (props) => {
  //   if (this.props.currentUser) {
  //        <NavLink to="/login">Log Out</NavLink>
  //   } else {
  //      <NavLink to="/login">Log In</NavLink>
  //   }
  // }
  return (
    <Menu>
      <Menu.Menu>
        <Menu.Item>
          FitMaker <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_icon_-_Noun_Project_22889.svg/2000px-Running_icon_-_Noun_Project_22889.svg.png' alt='logo' />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/create_workout">Create Workout</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">Log in</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/on_demand">Workout Now</NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
}
}

export default connect(mapStateToProps, { authReducer })(NavBar)
// export default NavBar;
