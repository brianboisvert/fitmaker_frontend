import React from 'react';
import { connect } from 'react-redux';
import { workoutsFetchData } from '../actions/workouts'
import Workout from '../components/workout'

class WorkoutList extends React.Component {

  componentDidMount() {
      this.props.fetchData('http://localhost:3000/workouts');
  }

  render() {
    // console.log(this.props.workouts)
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the workout</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    const workouts = this.props.workouts.map( (workout, i) => {
      return (
        <Workout workout={workout} key={i} />
      )
    })
    return (
      <ul>
        {workouts}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    workouts: state.workouts,
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
