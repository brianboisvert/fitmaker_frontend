// .then(() => this.props.history.push(/goals))

import React from 'react';
import { updateWorkout } from '../actions/workouts'
import { connect } from 'react-redux'

class EditWorkout extends React.Component{

constructor(props) {
  super();
  this.state = {
    title: props.workout.title,
    intensity: props.workout.intensity,
    category: props.workout.category,
    duration: props.workout.duration,
    description: props.workout.description,
    id: props.workout.id
  }
}

    handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.updateWorkout(this.state, this.props.history);
    }

  renderForm(){
    return <div>
      <h1>Edit workout</h1>< br/><br />
      <form onSubmit={this.handleSubmit}>
        <label>About</label><br />
          <input defaultValue={this.props.workout.title} placeholder={this.props.workout.title ? this.props.workout.title : null} type='text' name='title' onChange={this.handleChange} /><br />
          <input defaultValue={this.props.workout.intensity} placeholder={this.props.workout.intensity ? this.props.workout.intensity : "Enter Intensity"} type='text' name='intensity' onChange={this.handleChange} /><br />
          <input defaultValue={this.props.workout.category} placeholder={this.props.workout.category ? this.props.workout.category : "Enter Category"} type='text'  name='category' onChange={this.handleChange} /><br />
          <input defaultValue={this.props.workout.duration} placeholder={this.props.workout.duration ? this.props.workout.duration : "Enter Duration"} type='number' name='duration' onChange={this.handleChange} /><br />
          <textarea defaultValue={this.props.workout.description} placeholder={this.props.workout.description ? this.props.workout.description : "Enter Description"} name='description' onChange={this.handleChange} /><br /><br />

            {this.props.workout.sets.map((set, index) => (
              <div key={index}>
              <div>
                <label>Set #{index + 1}</label><br/>
                  <input type='number' placeholder='how many sets?' value='3' /><br />
                  <input type="text" placeholder="set #1" name="excercise1" value="lunges"/><br />
                  <input type="text" placeholder="set #2" name="excercise2" value="pushups"/><br />
                  <input type="text" placeholder="set #3" name="excercise3" value="crunches"/><br />
              </div>
            </div>
            ))}

        <br /><br /><br /><button type='submit'>Submit Workout</button>
      </form>
      <button onClick={this.handleAddSet}>Add Set</button><br /><br />
    </div>
  }

  render(){
    return(
      this.props.workout ? this.renderForm() :<div>Loading...</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkout: (updatedWorkout, history) => {
      dispatch(updateWorkout(updatedWorkout, history))
    }
  }
}

export default connect(null, mapDispatchToProps)(EditWorkout)
