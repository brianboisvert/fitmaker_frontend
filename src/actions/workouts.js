export function workoutsHasErrored(bool) {
    return {
        type: 'WORKOUTS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function workoutsIsLoading(bool) {
    return {
        type: 'WORKOUTS_IS_LOADING',
        isLoading: bool
    };
}

export function workoutsFetchDataSuccess(workouts) {
    return {
        type: 'WORKOUTS_FETCH_DATA_SUCCESS',
        workouts
    };
}


export function workoutsFetchData(url) {
    return (dispatch) => {
        dispatch(workoutsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(workoutsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(workoutsFetchDataSuccess(items)))
            .catch(() => dispatch(workoutsHasErrored(true)));
    };
}

export function postWorkout (newWorkout){
  console.log(newWorkout.user_id)
    return (dispatch) =>
    {
      fetch('http://localhost:3000/workouts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newWorkout.title,
          intensity: newWorkout.intensity,
          category: newWorkout.category,
          duration: newWorkout.duration,
          description: newWorkout.description,
          user_id: newWorkout.user_id
        })
      }).then(res => res.json())
      .then(workout => dispatch({type: "ADD_WORKOUT", payload: workout}))
    }
}

export function postUser(user) {
  return (dispatch) => {
    fetch('http://localhost:3000/workouts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      })
    }).then(res => res.json())
    .then(workout => dispatch({type: "ADD_WORKOUT", payload: workout}))
  }
}

export function loginUser(username, password) {
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
      localStorage.setItem('token', data.jwt)
      dispatch({type: "LOGIN_USER", payload: data})
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
