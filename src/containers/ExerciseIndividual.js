import React from 'react';
import { connect } from 'react-redux'
import { setCurrentExercise } from '../actions/workouts'
import ExerciseDetails from '../components/ExerciseDetails'

class ExerciseIndividual extends React.Component{

  handleClick = (event) => {
    this.props.setCurrentExercise(this.props.exercise)
  }

  render() {

    const exerciseName = this.props.exercise.name !== "" ? this.props.exercise.name : null
    const currentEx = this.props.currentExercise.id ? <ExerciseDetails /> : null

    return(
      <div>
        <div onClick={this.handleClick}>{exerciseName}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises[0],
    currentExercise: state.currentExercise
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentExercise: (exercise) => dispatch(setCurrentExercise(exercise))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExerciseIndividual)
