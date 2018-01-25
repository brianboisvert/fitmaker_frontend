import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../App.css';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/workouts';

class NavBar extends React.Component {

  logOut = () => {
    this.props.logOutUser()
  }

render() {


const loggedOut = <div className="menu">
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            FitMaker
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <NavLink to="/login">Log In</NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>


  const loggedIn = <div className="menu">
      <Menu className="ui charcoal inverted">
        <Menu.Menu>
          <Menu.Item>
            FitMaker
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
            <NavLink to="/" onClick={this.logOut}>Log Out</NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>

    const logInStatus = this.props.currentUser ? loggedIn : loggedOut

  return (
    <div>
      {logInStatus}
    </div>
  );
};
}

const mapStateToProps = (state) => {
  return {
  currentUser: !!state.auth.currentUser.username,
  state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
