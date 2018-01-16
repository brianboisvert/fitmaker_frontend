import React from 'react';
import { updateWorkout } from '../actions/workouts'
import { connect } from 'react-redux'

class EditWorkout extends React.Component{

  state = {
    title: '',
    intensity: '',
    category: '',
    duration: '',
    description: '',
    // exercises: [{exercise: ''}],
    sets: [
      {exercises:
        [{exercise: ''}]
      }
    ],
    id: '',
    // users: []
  }



    handleChange = (event) => {
      console.log(event.target.defaultValue)
      this.setState({
        [event.target.name]: event.target.value !== '' ? event.target.value : event.target.defaultValue,
        id: this.props.workout.id
      //   users: [
      //   this.state.currentUser,
      // ]
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.updateWorkout(this.state);
      // console.log('SUBMITTED', this.state);
    }

  renderForm(){
    return <div>
      <h1>Edit workout</h1>< br/><br />
      <form onSubmit={this.handleSubmit}>
        <label>About</label><br />
        <input defaultValue={this.props.workout.title} type='text' placeholder='title' name='title' onChange={this.handleChange} /><br />
        <input defaultValue={this.props.workout.intensity} type='text' placeholder='intensity' name='intensity' onChange={this.handleChange} /><br />
        <input defaultValue={this.props.workout.category} type='text' placeholder='category' name='category' onChange={this.handleChange} /><br />
        <input defaultValue={this.props.workout.duration} type='number' placeholder='duration in minutes' name='duration' onChange={this.handleChange} /><br />
        <textarea defaultValue={this.props.workout.description} placeholder='description' name='description' onChange={this.handleChange} /><br /><br />

        <button onClick={this.handleAddSet}>Add Set</button><br />
        <label>Warm Up</label><br />
        <input type='number' placeholder='how many sets?' /><br />
        <input type="text" placeholder="set #1" name="excercise" onChange={this.handleChange} /><br /><br />


        <br /><br /><br /><button type='submit'>Submit Workout</button>
      </form>
    </div>
  }

  render(){
    // console.log(this.props)
    // console.log('Edit props', this.props.currentUser);
    return(
      this.props.workout ? this.renderForm() :<div>Loading...</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkout: (updatedWorkout) => {
      dispatch(updateWorkout(updatedWorkout))
    }
  }
}

export default connect(null, mapDispatchToProps)(EditWorkout)

//   {this.state.sets.map((input, i) => <div>
  //   <label>Set #{i + 1}</label><br />
  //   <input type='number' placeholder='how many sets?' /><br />
  //   <input type="text" placeholder="set #1" name="excercise" onChange={this.handleChange} /><br />
  //   <button onClick={this.handleAddExercise}>Add Exercise</button><br /><br />
  // </div>)}
