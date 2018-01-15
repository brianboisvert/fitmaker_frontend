import React from 'react';

class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return(
      <div>
        <label>Create an Account</label>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={this.handleChange} /><br />
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} /><br />
          <input type="text" name="password" placeholder="password" onChange={this.handleChange} /><br />
          <input type="text" placeholder="confirm password" /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SignUp;
