import { combineReducers, createStore } from "redux";
import { timerReducer } from './timerReducer'
import { taskReducer } from "./taskReducer";
// import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    timer: timerReducer,
    task: taskReducer,
});

export const store = createStore(rootReducer);