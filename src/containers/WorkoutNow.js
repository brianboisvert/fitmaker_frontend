import React from 'react';
import { connect } from 'react-redux'
import { setCurrentWorkout } from '../actions/workouts'

class WorkoutNow extends React.Component {

  componentWillReceiveProps(nextProps){
    if (nextProps.allWorkouts && !nextProps.currentWorkout.id) {
      let id = parseInt(this.props.match.params.id,10)
      let found = nextProps.allWorkouts.find(workout => workout.info.id === id)
      this.props.setCurrentWorkout(found)
    }

  }

workoutComplete = () => {
  this.props.setCurrentWorkout({})
  this.props.history.push('/home')
  alert("Nice job!")
}

  renderWorkout() {
    return <div className="workout-now">
      <div className="wo-container" style={{"margin": "30px"}}>
        <h1>{this.props.currentWorkout.info.title}</h1>
         {this.props.currentWorkout.super_sets.map((set, setI) => {
           return<div><div key={setI}>
             <h4>Set #{setI + 1} - {set.info.category} - {set.info.sets} times through</h4>
               {set.exercises.map((ex, exI) => {
                 return <div><div key={exI}>
                   <div>{ex.info.name} - {ex.duration} seconds</div><br />
                 </div>
                 </div>
              })}
           </div>
           </div>
         })}
         <br /><br/><button className="ui button" onClick={this.workoutComplete}>Workout Completed?</button>
      </div>
    </div>
  }

  render() {
    console.log('currentWorkout', this.props)
    return (
      this.props.currentWorkout.info ? this.renderWorkout() : <div>Loading...</div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    currentWorkout: state.currentWorkout,
    allWorkouts: state.auth.currentUser.workouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentWorkout: (workout) => dispatch(setCurrentWorkout(workout))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutNow);
