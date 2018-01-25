import { combineReducers } from 'redux';
import { currentWorkout } from './WorkoutReducer';
import { authReducer } from './AuthReducer';
import { exercises, ExerciseSearch, currentExercise } from './ExerciseReducer';


export default combineReducers({
    auth: authReducer,
    currentWorkout,
    exercises,
    ExerciseSearch,
    currentExercise,
});
