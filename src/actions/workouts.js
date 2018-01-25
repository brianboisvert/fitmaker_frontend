export function workoutsFetchDataSuccess(workouts) {
  return (dispatch) => {
    fetch('http://localhost:3000/workouts', {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token'),
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({type: "WORKOUTS_FETCH_DATA_SUCCESS", payload: data})
      })
  }
}

export function setCurrentExercise(exercise) {
  return {
    type: 'SET_CURRENT_EXERCISE',
    payload: exercise
  }
}

export function fetchAllExercises() {
  return (dispatch) => {
    fetch('http://localhost:3000/exercises')
      .then(res => res.json())
      .then(data => {
        dispatch({type: "FETCH_ALL_EXERCISES", payload: data})
      })
  }
}

export function postWorkout(newWorkout){
    return (dispatch) =>
    {
       return fetch('http://localhost:3000/workouts', {
        method: 'POST',
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newWorkout.title,
          intensity: newWorkout.intensity,
          category: newWorkout.category,
          duration: newWorkout.duration,
          description: newWorkout.description,
          sets: newWorkout.sets
        })
      }).then(res => res.json())
      .then(workout => {
        dispatch({type: "ADD_WORKOUTS", payload: workout})
        // return
      })
    }
}

export function postUser(user) {
  return (dispatch) => {
    return fetch('http://localhost:3000/signup/', {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
        username: user.username,
        password: user.password,
        email: user.email
      }
    )
    }).then(res => res.json())
    .then(user =>  {
      localStorage.setItem('token', user.jwt)
      dispatch({type: "LOGIN_USER", payload: user})
    })
  }
}

export function loginUser(username, password, history) {
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({username: username, password: password})
    })
    .then(data => data.json())
    .then(data=> {
      // console.log('ACTION:', data)
      localStorage.setItem('token', data.jwt)
      dispatch({type: "LOGIN_USER", payload: data})
      history.push('/home')
    })
  }
}

export function fetchUser() {
  return (dispatch) => {
    fetch('http://localhost:3000/current_user', {
      method: 'GET',
      headers: {
          'Authorization': localStorage.getItem('token')
        }
    })
    .then(data => data.json())
    .then(data=> {
      dispatch({type: "SET_CURRENT_USER", payload: data})
    })
  }
}

export function deleteWorkout(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/workouts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(data=>{
    // console.log("DELETED Data:", data)
    dispatch({type: 'DELETE_WORKOUT', payload: id})
   // .then(workouts => dispatch({type: 'DELETE_WORKOUT', payload: workouts}))
})}
}

export function updateWorkout(editedWorkout, history) {
  console.log('ENTERED DATA', editedWorkout)
  return (dispatch) => {
    fetch(`http://localhost:3000/workouts/${editedWorkout.id}`, {
    method: 'PATCH',
    body: JSON.stringify(editedWorkout),
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
   .then(workouts => {
     console.log('RETURN DATA', workouts)
     dispatch({type: "EDIT_WORKOUTS", payload: workouts})
     dispatch({type: "SET_CURRENT_WORKOUT", payload: undefined})
     history.push('/home')
   })
}
}

export function setCurrentWorkout(workout) {
  console.log(workout)
  return {
    type: 'SET_CURRENT_WORKOUT',
    payload: workout,
  }
}

export function logOutUser() {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};

export function setExerciseSearch(workouts){
  return {
    type: 'SET_EXERCISE_SEARCH',
    payload: workouts
  }
}
