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
    sets: [],
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
  }

  handleAddSet = (event) => {
    this.setState({
      sets: this.state.sets.concat({exercise1: 'lunges', exercise2: 'pushups', exercise3: 'crunches'})
    })
  }

  render() {
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

          {this.state.sets.map((set, index) => (
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
          <button type='submit'>Submit Workout</button>
        </form>
        <button onClick={this.handleAddSet}>Add Set</button><br /><br />
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
