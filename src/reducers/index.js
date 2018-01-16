import { combineReducers } from 'redux';
import { allWorkouts, workouts, workoutsHasErrored, workoutsIsLoading} from './WorkoutReducer';
import { users } from './UserReducer'
import { authReducer } from './AuthReducer'
export default combineReducers({
    workouts,
    workoutsHasErrored,
    workoutsIsLoading,
    auth: authReducer
});
