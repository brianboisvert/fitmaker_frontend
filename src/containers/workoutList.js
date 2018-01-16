import React from 'react';
import { connect } from 'react-redux';
import { workoutsFetchData } from '../actions/workouts'
import WorkoutIndividual from '../containers/WorkoutIndividual'
import EditWorkout from '../containers/EditWorkout'

class WorkoutList extends React.Component {

  // componentDidMount() {
  //     this.props.fetchData('http://localhost:3000/workouts');
  // }

  render() {
    // if (this.props.hasErrored) {1
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

    const myWorkouts = this.props.workouts ? this.props.workouts.map((el, i)=><WorkoutIndividual workout={el} key={i} store={this.props.store} />) : null

// console.log(this.props)
    return (
      <div>
        <div>
          <h2>My Workouts</h2>
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
