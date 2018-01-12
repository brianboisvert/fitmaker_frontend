export function workoutsHasErrored(state = false, action) {
    switch (action.type) {
        case 'WORKOUTS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function workoutsIsLoading(state = false, action) {
    switch (action.type) {
        case 'WORKOUTS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function workouts(state = [], action) {
    switch (action.type) {
        case 'WORKOUTS_FETCH_DATA_SUCCESS':
          return action.workouts;
        case 'ADD_WORKOUT':
          return [...state, action.payload]
        default:
            return state;
    }
}
