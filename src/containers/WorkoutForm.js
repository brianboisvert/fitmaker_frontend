import React from 'react';
import { connect } from 'react-redux'
import { postWorkout } from '../actions/workouts'

class WorkoutForm extends React.Component {

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
    users: []
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      users: [
      this.props.workouts.auth.currentUser,
    ]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postWorkout(this.state);
    // this.props.dispatch({})
  }

  handleAddExercise = (event) => {
    this.setState({
      exercises: this.state.exercises.exercise.concat([{exercise: ''}])
    })
  }

  handleExerciseChange = (idx) => (evt) => {
    const newExercise = this.state.exercises.map((exercise, sidx) => {
      if (idx !== sidx) return exercise;
      return { ...exercise, exercise: evt.target.value };
    });
    this.setState({ exercises: newExercise });
  }

  handleAddSet = (event) => {
    this.setState({
      sets: this.state.sets.concat([{exercises: [{exercise: ''}]}])
    })
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Create a new workout</h1>< br/><br />
        <form onSubmit={this.handleSubmit}>
          <label>About</label><br />
          <input type='text' placeholder='title' name='title' onChange={this.handleChange} /><br />
          <input type='text' placeholder='intensity' name='intensity' onChange={this.handleChange} /><br />
          <input type='text' placeholder='category' name='category' onChange={this.handleChange} /><br />
          <input type='number' placeholder='duration in minutes' name='duration' onChange={this.handleChange} /><br />
          <textarea placeholder='description' name='description' onChange={this.handleChange} /><br /><br />

          <button onClick={this.handleAddSet}>Add Set</button><br />
          <label>Warm Up</label><br />
          <input type='number' placeholder='how many sets?' /><br />
          <input type="text" placeholder="set #1" name="excercise" onChange={this.handleChange} /><br /><br />
          {this.state.sets.map((input, i) => <div>
            <label>Set #{i + 1}</label><br />
            <input type='number' placeholder='how many sets?' /><br />
            <input type="text" placeholder="set #1" name="excercise" onChange={this.handleChange} /><br />
            <button onClick={this.handleAddExercise}>Add Exercise</button><br /><br />
          </div>)}

          <br /><br /><br /><button type='submit'>Submit Workout</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postWorkout: (wo) => {
      dispatch(postWorkout(wo))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
