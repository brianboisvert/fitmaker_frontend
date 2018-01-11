import React from 'react';
import { connect } from 'react-redux'
import { postWorkout } from '../actions/workouts'
// import workouts from '../actions/workouts'

class WorkoutForm extends React.Component {

  state = {
    title: '',
    intensity: '',
    category: '',
    duration: '',
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log("submit hit")
    event.preventDefault()
    this.props.postWorkout(this.state)
  }

  render() {
    return (
      <div>
        <label>Create a new workout</label>< br/><br />
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='title' name='title' onChange={this.handleChange} /><br />
          <input type='text' placeholder='intensity' name='intensity' onChange={this.handleChange} /><br />
          <input type='text' placeholder='category' name='category' onChange={this.handleChange} /><br />
          <input type='number' placeholder='duration in minutes' name='duration' onChange={this.handleChange} /><br />
          <textarea placeholder='description' name='description' onChange={this.handleChange} /><br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postWorkout: (wo) => {
      dispatch(postWorkout(wo))
    }
  };
};

export default connect(null, mapDispatchToProps)(WorkoutForm);
