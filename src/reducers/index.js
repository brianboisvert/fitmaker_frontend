import { combineReducers } from 'redux';
import { workouts, workoutsHasErrored, workoutsIsLoading} from './WorkoutReducer';
import { authReducer } from './AuthReducer'
export default combineReducers({
    workouts,
    workoutsHasErrored,
    workoutsIsLoading,
    auth: authReducer
});
