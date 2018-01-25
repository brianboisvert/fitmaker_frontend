import React from 'react';
import { connect} from 'react-redux'
import {loginUser} from '../actions/workouts'


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      fields: {
        username: '',
        password: ''
      },
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state.fields.username, this.state.fields.password, this.props.history);
  }

  logOutUser = () => {
    if (this.props.currentUser === {}) {
      const { fields } = this.state;
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
    } else {
      return (<div>
      <h4>You have successfully logged out</h4>
      </div>)
    }
  }

  handleClick = () => {
    this.props.history.push('/register')
  }


  render() {
    const { fields } = this.state;
    return (
      <div className="login">
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form loggin">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <div className="ui field">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
            </div>
            </div>
            <div style={{"text-align": "center", "padding-top": "15px"}}>
              <button style={{"color": "black"}} type="submit" className="ui button" >
              Login
              </button><br /><br />
              <button style={{"color": "black"}} className="ui button mini" onClick={this.handleClick}>Register
              </button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  }
}


export default connect(mapStateToProps, {loginUser: loginUser})(Login)
