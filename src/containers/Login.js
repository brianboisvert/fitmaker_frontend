import React from 'react';
import { connect} from 'react-redux'
import {loginUser} from '../actions/workouts'


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      // error: false,
      fields: {
        username: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state.fields.username, this.state.fields.password)
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}


export default connect(null, {loginUser: loginUser})(Login)