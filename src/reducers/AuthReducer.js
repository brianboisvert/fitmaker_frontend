export const authReducer = (state = {currentUser: {}}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: {
        id: action.payload.id,
        username: action.payload.username,
        workouts: action.payload.workouts,
      }};
      //DO WE NEED BOTH LOGIN_USER AND SET_CURRENT_USER
    case 'LOGIN_USER':
      return {...state, currentUser: {
        id: action.payload.id,
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
        return workout.id === action.payload.id
      })

      let index = newWorkouts.indexOf(found)

      newWorkouts[index] = action.payload
      return {...state, currentUser: {...state.currentUser, workouts: newWorkouts}}
    case 'DELETE_WORKOUT':
      return {...state, currentUser: {...state.currentUser, workouts: action.payload}}
    default:
      return state;
  }
};
