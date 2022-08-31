import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Timer.module.scss'

const Editor = () => {
    const dispatch = useDispatch();
    const [pomodoroTimeInMinutes, setPomodoroTimeInMinutes] =
        useState(useSelector((state) => state.timer.pomodoroMinutes));

    const [breakTimeInMinuts, setBreakTimeInMinuts] =
        useState(useSelector((state) => state.timer.breakMinutes));

    const handlePomodoroChange = (e) => {
        setPomodoroTimeInMinutes(e.target.value);
    };

    const handleBreakChange = (e) => {
        setBreakTimeInMinuts(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'STOP'
        })

        dispatch({
            type: 'SET_BREAK',
            newTimeInMinutes: breakTimeInMinuts
        })

        dispatch({
            type: 'SET_POMODORO',
            newTimeInMinutes: pomodoroTimeInMinutes
        })
    };

    return (
        <form className={classes.form}>
            <div>
                <div>
                    <label>Set pomodoro time</label>
                    <input
                        onChange={handlePomodoroChange}
                        value={pomodoroTimeInMinutes}
                        placeholder="Set time in minutes here"
                    />
                </div>
                <div>
                <label>Set break time</label>
                    <input
                        onChange={handleBreakChange}
                        value={breakTimeInMinuts}
                        placeholder="Set time in minutes here"
                    />
                </div>
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default Editor;
