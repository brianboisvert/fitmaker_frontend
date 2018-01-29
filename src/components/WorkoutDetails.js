import React from 'react';
import { deleteWorkout, setCurrentWorkout } from '../actions/workouts'
import { connect } from 'react-redux'


const WorkoutDetails = (props) => {
console.log(props)
  const handleSelect = (event) => {
    props.setCurrentWorkout(props.workout)
    props.history.push(`/on_demand/${props.workout.info.id}`)
  }

  const handleOnClickDelete = (event) => {
    props.deleteWorkout(props.workout.info.id)
  }

  const handleEdit = (event) => {
    event.preventDefault()
    props.setCurrentWorkout(props.workout)
    props.history.push(`/workouts/${props.workout.info.id}/edit`)
  }

  const allDetails = <div>
        <h1>{props.workout.info.title}</h1>
        <h2>{props.workout.info.description}</h2>
        <h3>Intensity: {props.workout.info.intensity}</h3>
        <div>
          <div>
            <button className="ui mini button" onClick={handleSelect}>Select</button>
            <button className="ui mini button" onClick={handleEdit}>Edit</button>
            <button className="ui mini button" onClick={handleOnClickDelete}>Delete</button>
          </div>
        </div>
      </div>


    const noDetails = <h2>Click on a workout to see details and select</h2>

    const container_fill = props.workout ? allDetails : noDetails

  return(
    <div>
      {container_fill}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWorkout: (id) => dispatch(deleteWorkout(id)),
    setCurrentWorkout: () => dispatch(setCurrentWorkout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetails)
