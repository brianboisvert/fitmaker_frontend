import React from 'react';
import { connect } from 'react-redux';
import { workoutsFetchData } from '../actions/workouts'
import Workout from '../components/workout'

class WorkoutList extends React.Component {

  componentDidMount() {
      this.props.fetchData('http://localhost:3000/workouts');
  }

  render() {
    // if (this.props.hasErrored) {
    //   return <p>Sorry! There was an error loading the workout</p>;
    // }
    //
    // if (this.props.isLoading) {
    //   return <p>Loading...</p>;
    // }

    // const workouts = this.props.workouts.map( (workout, i) => {
    //   return (
    //     <Workout workout={workout} key={i} />
    //   )
    // })

    const workouts = this.props.workouts ? this.props.workouts.map((el, i)=><Workout title={el.title} key={i}/>) : null

    return (
      <ul>
        {workouts}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
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
