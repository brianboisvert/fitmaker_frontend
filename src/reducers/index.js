import { combineReducers } from 'redux';
import { workouts, workoutsHasErrored, workoutsIsLoading } from './WorkoutReducer';
export default combineReducers({
    workouts,
    workoutsHasErrored,
    workoutsIsLoading
});
