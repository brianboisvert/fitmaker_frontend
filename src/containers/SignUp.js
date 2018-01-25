import React from 'react';
import { postUser } from '../actions/workouts';
import { connect } from 'react-redux';
import FormErrors from '../components/FormErrors';

class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    formErrors: {email: '', password: '', username: '', confirmPassword: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false,
    usernameValid: false,
    confirmPasswordValid: false
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    }, () => { this.validateField(name, value) })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postUser(this.state, this.props.history);
    this.props.history.push('/home');
  }

  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;
  let usernameValid = this.state.usernameValid
  let confirmPasswordValid = this.state.confirmPasswordValid

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    case 'username':
      usernameValid = value.length >= 3;
      fieldValidationErrors.username = usernameValid ? '': ' is too short';
    case 'confirmPassword':
      confirmPasswordValid = this.state.password === this.state.confirmPassword;
      fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' must match password'
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid,
                  usernameValid: usernameValid,
                  confirmPasswordValid: confirmPasswordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.usernameValid && this.state.confirmPasswordValid});
}


  render() {
    // console.log(this.props.history)
    return(
      <div style={{"text-align": "center"}}>
      <div className="login">
        <h1>Create an Account</h1>
        <div className="panel panel-default" style={{"background-color": "rgba(225, 225, 225, .3)"}}>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <form className="ui form loggin" onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={(event) => this.handleChange(event)} /><br />
          <input type="text" name="email" placeholder="email" onChange={(event) => this.handleChange(event)} /><br />
          <input type="password" name="password" placeholder="password" onChange={(event) => this.handleChange(event)} /><br />
          <input type="password" name="confirmPassword" placeholder="confirm password" onChange={(event) => this.handleChange(event)} /><br />
          <div style={{"text-align": "center", "padding-top": "15px"}}>
            <button className="ui button add" type="submit" disabled={!this.state.formValid}>Register</button><br /><br />
            <button style={{"color": "black"}} className="ui button mini" onClick={this.handleClick}>Login</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postUser: (user) => {
      dispatch(postUser(user))
    }
  };
};



export default connect(null, mapDispatchToProps)(SignUp);
