import React from 'react';
import { connect } from 'react-redux';

const ExerciseDetails = (props) => {

  return (
    <div>
      <h1>{props.currentExercise.name}</h1>
      <h3>{props.currentExercise.description}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentExercise: state.currentExercise
  }
}

export default connect(mapStateToProps)(ExerciseDetails)
