export function workouts(state = [], action) {
    switch (action.type) {
        case 'WORKOUTS_FETCH_DATA_SUCCESS':
          return action.workouts;
        default:
          return state;
    }
}
