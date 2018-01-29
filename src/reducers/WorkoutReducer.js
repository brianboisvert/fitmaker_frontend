export function workouts(state = [], action) {
    switch (action.type) {
        case 'WORKOUTS_FETCH_DATA_SUCCESS':
          return [...state, action.payload];
        default:
          return state;
    }
}

export function currentWorkout(state = {}, action) {
  console.log(action.payload)
  switch(action.type) {
    case 'SET_CURRENT_WORKOUT':
      return action.payload
    case 'CLEAR_CURRENT_WOKOUT':
      return {}
    default:
      return state;
  }
}
