import React from 'react';
import { connect } from 'react-redux';
import { workoutsFetchData } from '../actions/workouts'
import WorkoutIndividual from '../containers/WorkoutIndividual'
import EditWorkout from '../containers/EditWorkout'

class WorkoutList extends React.Component {


  render() {
  const completeWorkouts = this.props.workouts ? this.props.workouts.filter(workout => workout.title !== "") : null
  const myWorkouts = completeWorkouts ? completeWorkouts.map( (workout, i) => {
    return (<WorkoutIndividual workout={workout} key={i} />)}) : null

    return (
      <div>
        <div>
          <h1>Hey, {this.props.user}!</h1>
          <h2>Here are your workouts:</h2>
          <ul>
            {myWorkouts}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser.username,
    workouts: state.auth.currentUser.workouts,
    hasErrored: state.workoutsHasErrored,
    isLoading: state.workoutsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) =>dispatch(workoutsFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList)
