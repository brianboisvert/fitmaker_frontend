import React from 'react';
import { connect } from 'react-redux';
import { postWorkout, fetchAllExercises, setExerciseSearch } from '../actions/workouts';
import { withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component {

  state = {
    title: '',
    intensity: '',
    category: '',
    description: '',
    sets: [{category: "", times: "", exercises: [{name: "", description: "", duration: 0}]}]
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title !== '' && this.state.intensity !== '' && this.state.category !== '' && this.state.description !== '') {
      this.props.postWorkout(this.state);
      this.props.history.push('/home')
    } else {
      alert("Must provide workout details")
    }
  }

  handleAddSet = (event) => {
    event.preventDefault()
    this.setState({
      sets: [...this.state.sets, {category: "", times: "", exercises: [{name: "", description: "", duration: 0}]}]
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

  componentDidMount = () => {
    this.props.fetchAllExercises()
  }

  handleExerciseSearch = (event) => {
    const input = event.target.value.toLowerCase()
    const exerciseIncludes = this.props.exercises[0].map((ex, i) => { return (ex.name.includes(input) ? ex : undefined) })
    const exerciseArray = exerciseIncludes.filter(e => e !== undefined)

    const exerciseList = exerciseArray.map((ex, i) => {
        return ex
    })

  }

  render() {
    let setForms = this.state.sets.map((set,setIndex) => {
      return <div><div key={setIndex}>
        <h4>Super Set #{setIndex + 1}</h4>
        <button className="ui button silver basic" onClick={this.handleAddExercise} name={`set-${setIndex}`}>Add Exercise</button><br/><br/>
        <select className="ui dropdown" value={set.category} name={`category-${setIndex}`}  onChange={this.handleSetChange} placeholder="Name">
          <option value="">Type</option>
          <option value="warmup">Warm Up</option>
          <option value="build">Build</option>
          <option value="cooldown">Cool Down</option>
        </select>
        <input type="number" value={set.times} name={`times-${setIndex}`} onChange={this.handleSetChange} placeholder="How many times through?"/><br /><br />

      {set.exercises.map((exercise, exerciseIndex) => {
        return <div key={exerciseIndex}>
          <input className="ui form" value={set.exercises.name} name={`name-${setIndex}-${exerciseIndex}`} onChange={this.handleExerciseChange} placeholder="exercise name" />
          <input className="ui form" value={set.exercises.description} name={`description-${setIndex}-${exerciseIndex}`} onChange={this.handleExerciseChange} placeholder="exercise description"/>
          <input className="ui form" type="number" value={set.exercises.duration} name={`duration-${setIndex}-${exerciseIndex}`} onChange={this.handleExerciseChange} placeholder="duration (in seconds)" /><br /><br />
        </div>
      })}
    </div><br /></div>
    })

    const allExercises = this.props.exercises[0] ? this.props.exercises[0].map((ex, i) => {
      return <div id="ex-name">
        <p id="each-ex-name">{ex.name}</p>
      </div>
    }) : undefined
// console.log(this.props)
    return (
      <div>
        <div className="workout-form">
          <div className="create">
            <h1 className="form" style={{"background-color": "rgba(225, 225, 225, .3)"}}>Create a Workout</h1>
            <form className="ui form">
              <input type="text" name="title" className="field" placeholder="title" onChange={this.handleChange} />
              <input type="text" name="description" className="field" placeholder="description" onChange={this.handleChange} />
              <select type="text" name="intensity" className="ui dropdown" placeholder="intensity" onChange={this.handleChange} >
                <option value="">Intensity</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <select type="text" name="category" className="ui dropdown" placeholder="category" onChange={this.handleChange} >
                <option value="">Type</option>
                <option value="warmup">Cardio</option>
                <option value="build">Bodyweight</option>
                <option value="cooldown">Cardio/Bodyweight</option>
              </select><br /><br />
            <div>
              {setForms}
            </div>
            <div>
              <button className="ui silver basic button" onClick={this.handleAddSet}>Add Set</button><br /><br />
              <button type="submit" className="ui button" onClick={this.handleSubmit}>Submit Workout</button>
            </div>
          </form>
          </div>
        </div>
        <div>
          <button onClick={() => {this.props.history.push('exercises')}} className="ui button inverted silver tiny ex-inspo">exercise inspiration</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.auth.currentUser.workouts,
    exercises: state.exercises,
    searchResults: state.ExerciseSearch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postWorkout: (wo) => { dispatch(postWorkout(wo)) },
    fetchAllExercises: () =>  {dispatch(fetchAllExercises()) },
    setExerciseSearch: (wos) => { dispatch(setExerciseSearch(wos)) }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutForm));
