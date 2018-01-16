import React from 'react';
import { NavLink } from 'react-router-dom';
import WorkoutDetails from '../components/WorkoutDetails'
import { connect } from 'react-redux'
import { deleteWorkout } from '../actions/workouts'

class WorkoutIndividual extends React.Component{

  state = {
    showDetails: false,
    currentWorkout: []
  }

  handleClick = (event) => {
    this.setState({
      showDetails: !this.state.showDetails,
      currentWorkout: this.props.workout
    })
  }

  handleOnClickDelete = (event) => {
    this.props.deleteWorkout(this.props.workout.id)
  }

  render() {
    const workoutDetails = this.state.showDetails? <div>{this.state.currentWorkout.description} <div><NavLink to={`/workouts/${this.state.currentWorkout.id}/edit`}>Edit</NavLink> <button onClick={this.handleOnClickDelete}>Delete</button></div></div>: null
    return (
      <div>
        <div>
          <li>
            <h4 onClick={this.handleClick}>{this.props.workout.title}</h4>
          </li>
        </div>
        <div>
          <div>{workoutDetails}</div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWorkout: (wo) => dispatch(deleteWorkout(wo))
  }
}

export default connect(null, mapDispatchToProps)(WorkoutIndividual);
