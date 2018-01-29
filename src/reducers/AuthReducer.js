export const authReducer = (state = {currentUser: {}}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: {
        username: action.payload.username,
        workouts: action.payload.workouts,
      }};
    case 'LOGIN_USER':
      return {...state, currentUser: {
        username: action.payload.username,
        workouts: action.payload.workouts,
      }}
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    case 'ADD_WORKOUTS':
      return {...state, currentUser: {...state.currentUser, workouts: [...state.currentUser.workouts, action.payload]}};
    case 'EDIT_WORKOUTS':
      let newWorkouts = state.currentUser.workouts.slice()
      let found = newWorkouts.find(workout => {
        return workout.info.id === action.payload.info.id
      })
      let index = newWorkouts.indexOf(found)
      newWorkouts[index] = action.payload

      newWorkouts.filter((el) => {
        el.info.id
      })

      return {...state, currentUser: {...state.currentUser, workouts: newWorkouts}}

    case 'DELETE_WORKOUT':
      let workoutsPostDelete = state.currentUser.workouts.slice()
      
      let foundWorkout = workoutsPostDelete.find(workout => {
        return workout.info.id === action.payload
      })

      let i = workoutsPostDelete.indexOf(foundWorkout)

      workoutsPostDelete = [...workoutsPostDelete.slice(0, i), ...workoutsPostDelete.slice(i+1)]
      return {...state, currentUser: {...state.currentUser, workouts: workoutsPostDelete}}
    default:
      return state;
  }
};
