import React from 'react';
import WorkoutList from './containers/workoutList';
import WorkoutForm from './containers/WorkoutForm';
import Login from './containers/Login';
// import { router, route } from 'react-router';
import {connect} from 'react-redux'
import {fetchUser} from './actions/workouts'
import NavBar from './containers/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import SignUp from './containers/SignUp'


class App extends React.Component {

  componentDidMount(){
    if (localStorage.getItem('token')) {
      this.props.fetchUser()
    }
  }
  render() {
    // console.log(this.props)
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create_workout" component={WorkoutForm} />
          <Route exact path="/home" component={WorkoutList} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={SignUp} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(App);
