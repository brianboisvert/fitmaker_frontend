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
  console.log("fetch hit")
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
    return (dispatch) =>
    {
      console.log("action hit", newWorkout)
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
          description: newWorkout.description
        })
      }).then(res => res.json())
      .then(workout => dispatch({type: "ADD_WORKOUT", payload: workout}))
    }
}
