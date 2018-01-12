import React from 'react';
import WorkoutList from './containers/workoutList';
import WorkoutForm from './containers/WorkoutForm';
import Login from './containers/Login';
// import { router, route } from 'react-router';
import {connect} from 'react-redux'
import {fetchUser} from './actions/workouts'

class App extends React.Component {

  componentDidMount(){
    if (localStorage.getItem('token')) {
      this.props.fetchUser()
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Login />
        <WorkoutForm />
        <WorkoutList />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(App);
