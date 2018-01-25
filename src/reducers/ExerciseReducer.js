export function exercises(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL_EXERCISES':
          return [action.payload];
        default:
          return state;
    }
}

export function ExerciseSearch(state=[], action) {
  switch(action.type) {
    case 'SET_EXERCISE_SEARCH':
      return [action.payload]
    default:
      return state;
  }
}

export function currentExercise(state={}, action) {
  switch(action.type) {
    case 'SET_CURRENT_EXERCISE':
     return action.payload
    default:
      return state;
  }
}
