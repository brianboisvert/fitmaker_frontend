import React from 'react';
import { connect } from 'react-redux';
import { fetchAllExercises } from '../actions/workouts'
import ExerciseIndividual from './ExerciseIndividual'
import ExerciseDetails from '../components/ExerciseDetails'

class Exercises extends React.Component {

  componentDidMount() {
    this.props.fetchAllExercises()
  }

  backToCreate = () => {
    this.props.history.push('/create_workout')
  }

  backToHome = () => {
    this.props.history.push('/home')
  }

  render(){
    console.log(this.props)

    const exercises = this.props.exercises ? this.props.exercises.map((ex, i) => {
       return (<ExerciseIndividual exercise={ex} history={this.props.history} />)
     }) : undefined

    const currentEx = this.props.currentExercise.id ? <ExerciseDetails /> :
      <div>
        <h1>Browse Exersises</h1>
        <h3 style={{"margin-bottom": "25px"}}>Click an exercise to view details</h3>
      </div>

    return(
      <div className="exercise">
        <div className="ui raised very padded text container segment" style={{"height": "250px", "overflow": "scroll", "opacity" : 0.8, "margin-top": "20px", "width": "800px", "text-align": "center"}}>
          {currentEx}
        </div>
        <div className="ui raised very padded text container segment" style={{"height": "300px", "overflow": "scroll", "opacity" : 0.8, "margin-top": "20px", "width": "800px", "text-align": "center"}}>
         {exercises}
        </div>
        <div style={{"text-align": "center"}}>
          <button onClick={this.backToCreate} className="ui button">Create Workout</button>
          <button onClick={this.backToHome} className="ui button">Home</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises[0],
    currentExercise: state.currentExercise
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllExercises: () => dispatch(fetchAllExercises())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Exercises)
