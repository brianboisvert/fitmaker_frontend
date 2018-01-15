import React from 'react';
import { connect } from 'react-redux'
import { postWorkout } from '../actions/workouts'
// import { postUserWorkout } from '../actions/workouts'
// import workouts from '../actions/workouts'

class WorkoutForm extends React.Component {

  state = {
    title: '',
    intensity: '',
    category: '',
    duration: '',
    description: '',
    user_id: ''
  }


  handleChange = (event) => {
    console.log(this.props)
    this.setState({
      [event.target.name]: event.target.value,
      user_id: this.props.workouts.auth.currentUser.id
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postWorkout(this.state);
    // this.props.postUserWorkout(this.state)
  }

  render() {
    // console.log(this.props.workouts.auth.currentUser.id)
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
