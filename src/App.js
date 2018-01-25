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
import WorkoutNow from './containers/WorkoutNow'
import EditWorkout from './containers/EditWorkout'
import loggedOutNavBar from './containers/loggedOutNavBar'
import Exercises from './containers/Exercises'


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
          {this.props.currentUser !== {} ? <NavBar /> : <loggedOutNavBar />}
          <Route exact path="/login" component={Login} />
          <Route exact path="/create_workout" component={WorkoutForm} />
          <Route exact path="/home" component={WorkoutList} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/exercises" component={Exercises} />
          <Route exact path="/workouts/:id/edit" render={(routerProps) => {
              const id = parseInt(routerProps.match.params.id, 10)
              const workout = this.props.currentUser.id ? this.props.currentUser.workouts.find(workout => workout.id === id) : false
              const current_user = this.props.currentUser ? this.props.currentUser : null

              return <EditWorkout {...routerProps} workout={workout} currentUser={current_user}/>
            }} />
          <Route exact path="/on_demand/:id" render={(routerProps) => {
                const id = parseInt(routerProps.match.params.id, 10)
                const workout = this.props.currentUser.id ? this.props.currentUser.workouts.find(workout => workout.id === id) : false
                const current_user = this.props.currentUser ? this.props.currentUser : null


                return <WorkoutNow {...routerProps} workout={workout} currentUser={current_user} currentWorkout={this.props.currentWorkout}/>
              }} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser,
    currentWorkout: state.currentWorkout
  }
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(App);
