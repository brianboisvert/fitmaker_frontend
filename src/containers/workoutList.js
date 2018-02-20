import React from 'react';
import { connect } from 'react-redux';
import WorkoutIndividual from '../containers/WorkoutIndividual'
import WorkoutDetails from '../components/WorkoutDetails'
import { deleteWorkout, setCurrentWorkout } from '../actions/workouts'


class WorkoutList extends React.Component {

  render() {
  const myWorkouts = this.props.workouts ? this.props.workouts.map( (workout, i) => {
    return (<WorkoutIndividual history={this.props.history} workout={workout} key={i} />)}) : null
  const welcomeMessage = this.props.workouts && this.props.workouts.length > 0 ? "Here are your workouts:" : "You don't have any saved workouts."
  const currentWorkout = this.props.currentWorkout && this.props.currentWorkout.info ? <WorkoutDetails workout={this.props.currentWorkout} history={this.props.history} /> : <div><h3 style={{"margin-top": "100px"}}>Click a Workout</h3></div>


    return (
      <div>
        <div className="workout-list-form">
          <div>
            <div>
              <h1>Hey, {this.props.user}!</h1>
              <h2>{welcomeMessage}</h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
              <div>
                <div>
                  <div className="ui raised very padded text container segment" style={{"height": "500px", "overflow": "scroll", "opacity" : 0.5, "margin-top": "20px", "width": "300px"}}>
                    {myWorkouts}
                  </div>
                </div>
              </div>
              <div style={{"margin-top": "20px"}}>
                {currentWorkout}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser.username,
    workouts: state.auth.currentUser.workouts,
    currentWorkout: state.currentWorkout,
    state: state
  };
};

export default connect(mapStateToProps)(WorkoutList)
