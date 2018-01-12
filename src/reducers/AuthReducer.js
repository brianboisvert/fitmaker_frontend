export const authReducer = (state = {currentUser: {}}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      debugger
      return { ...state, currentUser: {id: action.payload.id, username: action.payload.username, workouts: action.payload.workouts}};
    case 'LOGIN_USER':
      return {...state, currentUser: {id: action.payload.id, username: action.payload.username, workouts: action.payload.workouts}}
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};
