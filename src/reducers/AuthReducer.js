export const authReducer = (state = {currentUser: {}}, action) => {
  // console.log(action)
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: {
        id: action.payload.id,
        username: action.payload.username,
        // email: action.payload.email,
        // password_digest: action.payload.password_digest,
        // created_at: action.payload.created_at,
        // updated_at: action.payload.updated_at,
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
      return {...state, currentUser: {workouts: [...state.currentUser.workouts, action.payload]}};
    case 'EDIT_WORKOUTS':
      return state
    default:
      return state;
  }
};
