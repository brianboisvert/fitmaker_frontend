import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../App.css'
import { connect } from 'react-redux'
import { authReducer } from '../reducers/AuthReducer'

const NavBar = (props) => {

  return (
    <div className="menu">
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            FitMaker <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_icon_-_Noun_Project_22889.svg/2000px-Running_icon_-_Noun_Project_22889.svg.png' alt='logo' />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <NavLink to="/login">Log In</NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  currentUser: state.auth.currentUser
}
}

export default connect(mapStateToProps, { authReducer })(NavBar)
