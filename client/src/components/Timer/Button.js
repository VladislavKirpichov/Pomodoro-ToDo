import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './Timer.module.scss'

const Button = () => {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.timer.isRunning);

    const startTimer = () => {
        dispatch({
            type: 'START',
        });
    };

    const stopTimer = () => {
        dispatch({
            type: 'STOP',
        });
    };

    const toggleTimer = () => {
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    return (
    <button className={isRunning ? classes.timer_button_inactive : classes.timer_button_active} onClick={toggleTimer}>{isRunning ? "STOP" : "START"}</button>
  )
}

export default Button