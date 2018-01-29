import React from 'react';
import { connect } from 'react-redux'
import { setCurrentWorkout } from '../actions/workouts'

class WorkoutIndividual extends React.Component{

  handleClick = (event) => {
    this.props.setCurrentWorkout(this.props.workout)
  }

  render() {
    const title = this.props.workout.info !== undefined ? this.props.workout.info.title : 'UNDEFINED'
    return (
      <div>
        <div>
            <h4 onClick={this.handleClick}>{title}</h4><br/>
        </div>
        <div>
          <div>{this.handleClick}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentWorkout: (workout) => dispatch(setCurrentWorkout(workout))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndividual);
