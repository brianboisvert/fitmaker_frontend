import { combineReducers } from 'redux';
import { workouts} from './WorkoutReducer';
import { users } from './UserReducer'
import { authReducer } from './AuthReducer'
export default combineReducers({
    workouts,
    auth: authReducer,
    users
});
