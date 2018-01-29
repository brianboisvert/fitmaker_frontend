import React from 'react';
import { updateWorkout } from '../actions/workouts'
import { connect } from 'react-redux'

class EditWorkout extends React.Component{

constructor(props) {

  console.log(props.currentWorkout)
  const id = props.currentWorkout ? props.currentWorkout.info.id : "";
  const title = props.currentWorkout ? props.currentWorkout.info.title : "";
  const intensity = props.currentWorkout ? props.currentWorkout.info.intensity : "";
  const category = props.currentWorkout ? props.currentWorkout.info.category : "";
  const description = props.currentWorkout ? props.currentWorkout.info.description : "";
  const sets = props.currentWorkout ? props.currentWorkout.super_sets.map((set, i) => {
    return {id: set.info.id, category: set.info.category, times: set.info.sets, exercises: set.exercises.map((ex, exI) => {
      return {id: ex.info.id, name: ex.info.name, description: ex.info.description, duration: ex.duration}
    })}
  }) : null

  super();
  this.state = {
    id: id,
    title: title,
    intensity: intensity,
    category: category,
    description: description,
    sets: sets,
  }
}

    handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.updateWorkout(this.state, this.props.history);
    }

    handleAddSet = (event) => {
      event.preventDefault()
      this.setState({
        sets: [...this.state.sets, {category: "", times: 0, exercises: [{name: "", description: "", duration: 0}]}]
      })
    }

    handleAddExercise = (event) => {
      event.preventDefault()
      let setIndex = parseInt(event.target.name.split("-")[1] , 10)

      let newSets = this.state.sets.slice()

      let newExercises = newSets[setIndex].exercises.slice()

      newExercises.push({name: "", description: ""})
      newSets[setIndex].exercises = newExercises

      this.setState({
        sets: newSets
      })
    }

    handleSetChange = (event) => {
      let inputName = event.target.name.split("-")
      let setType = inputName[0]
      let setIndex = inputName[1]
      let newSets = this.state.sets.slice()
      newSets[setIndex][setType] = event.target.value

      this.setState({
        sets: newSets
      })
    }

    handleExerciseChange = (event) => {
      let exerciseInputName = event.target.name.split("-")
      let exerciseType= exerciseInputName[0]
      let setIndex = exerciseInputName[1]
      let exerciseIndex = exerciseInputName[2]
      let newSets = this.state.sets.slice()
      let newExercises = newSets[setIndex].exercises.slice()
      newExercises[exerciseIndex][exerciseType] = event.target.value

      this.setState({
        sets: newSets
      })
    }

    renderForm() {
      return <div><div className="workout-form">
        <div className="create">
        <h1 className="form" style={{"background-color": "rgba(225, 225, 225, .3)"}}>Create a Workout</h1>
        <form  className="ui form">
          <input name = "title" className='ui field' type="text" defaultValue={this.props.currentWorkout.info.title} placeholder={this.props.currentWorkout.info.title ? this.props.currentWorkout.info.title : "title"} onChange={this.handleChange}/><br />
          <input name="category" type="text" defaultValue={this.props.currentWorkout.info.category} placeholder={this.props.currentWorkout.info.category ? this.props.currentWorkout.info.category : "category"} onChange={this.handleChange} /><br />
          <input name="intensity" type="text" defaultValue={this.props.currentWorkout.info.intensity} placeholder={this.props.currentWorkout.info.intensity ? this.props.currentWorkout.info.intensity : "intensity"} onChange={this.handleChange} /><br />
          <input name="description" defaultValue={this.props.currentWorkout.info.description} placeholder={this.props.currentWorkout.info.description ? this.props.currentWorkout.info.description : "description"} onChange={this.handleChange} /><br /><br/>

          {this.state.sets.map((set, setIndex) => {
            return <div><div key={setIndex}>
              <h4>Super Set #{setIndex + 1}</h4>
              <button className="ui button silver basic" onClick={this.handleAddExercise} name={`set-${setIndex}`}>Add Exercise</button><br /><br />
                <input type="text" name={`category-${setIndex}`} defaultValue={set.category} placeholder={set.category ? set.category : "category"} onChange={this.handleSetChange} />
                <input type="number" name={`times-${setIndex}`} defaultValue={set.sets} placeholder={set.sets ? set.sets : "times through"} onChange={this.handleSetChange} /><br /><br />

                {set.exercises.map((exercise, exerciseIndex) => {
                  return <div><div key={exerciseIndex}>
                    <input defaultValue={exercise.name} name={`name-${setIndex}-${exerciseIndex}`} onChange={this.handleExerciseChange} placeholder="exercise name" onChange={this.handleExerciseChange}/>
                    <input defaultValue={exercise.description} name={`description-${setIndex}-${exerciseIndex}`} onChange={this.handleExerciseChange} placeholder="exercise description" onChange={this.handleExerciseChange}/>
                    <input type="number" defaultValue={exercise.duration} name={`duration-${setIndex}-${exerciseIndex}`} onChange={this.handleExerciseChange} placeholder="duration" onChange={this.handleExerciseChange}/><br /><br />
                  </div>
                </div>
                })}
            </div></div>
        })}

          <button className="ui silver basic button" onClick={this.handleAddSet}>Add Set</button><br /><br />
          <button className="ui button" type='submit' onClick={this.handleSubmit}>Update Workout</button>
        </form>
        </div>
      </div>
    </div>
    }


  render(){
    return(
      this.props.currentWorkout ? this.renderForm() : <div>Loading...</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.auth.currentUser.workouts,
    currentWorkout: state.currentWorkout

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkout: (updatedWorkout, history) => {
      dispatch(updateWorkout(updatedWorkout, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout)
