import { applyMiddleware, combineReducers, createStore } from "redux";
import { timerReducer } from "./TimerReducer";
import { logger } from "./middleware/Logger";

const rootReducer = combineReducers({
    timer: timerReducer
});

export const store = createStore(rootReducer, applyMiddleware(logger));