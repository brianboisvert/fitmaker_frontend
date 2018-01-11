import React from 'react';
import WorkoutList from './containers/workoutList';
import WorkoutForm from './containers/WorkoutForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <WorkoutForm />
        <WorkoutList />
      </div>
    );
  }
}

export default App;
