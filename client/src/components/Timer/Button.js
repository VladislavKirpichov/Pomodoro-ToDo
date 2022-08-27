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
    <button style={isRunning
                    ? {color: '#DC2626', backgroundColor: '#FEE2E2', border: '2px solid #DC2626'}
                    : {color: '#0E7490', backgroundColor: '#CFFAFE', border: '2px solid #0E7490'}} className={classes.button} onClick={toggleTimer}>{isRunning ? "STOP" : "START"}</button>
  )
}

export default Button