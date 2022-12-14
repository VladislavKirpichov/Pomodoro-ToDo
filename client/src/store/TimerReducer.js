const defaultState = {
    minutes: 25,
    pomodoroMinutes: 25,
    breakMinutes: 0.1,
    isRunning: false,
    status: 'POMODORO',
}

export const timerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_POMODORO':
            return { ...state, isRunning: false, pomodoroMinutes: action.newTimeInMinutes, minutes: action.newTimeInMinutes };
        case 'SET_BREAK':
            return { ...state, isRunning: false, breakMinutes: action.newTimeInMinutes, minutes: action.newTimeInMinutes };
        case 'START':
            return  {...state, isRunning: true};
        case 'STOP':
            return {...state, isRunning: false};
        case 'SET_STATUS__POMODORO':
            return {...state, minutes: state.pomodoroMinutes, status: 'POMODORO'}
        case 'SET_STATUS__BREAK':
            return {...state, minutes: state.breakMinutes, status: 'BREAK'}
        default:
            return state;
    }
};
