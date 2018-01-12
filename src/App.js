import React from 'react';
import WorkoutList from './containers/workoutList';
import WorkoutForm from './containers/WorkoutForm'
import Login from './components/Login'

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <WorkoutForm />
        <WorkoutList />
      </div>
    );
  }
}

export default App;
