import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Timer.module.scss'

const Editor = () => {
    const dispatch = useDispatch();
    const [timeInMinutes, setTimeInMinutes] = useState(
        useSelector((state) => state.timer.minutes)
    );

    const handleChange = (e) => {
        setTimeInMinutes(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_POMODORO',
            newTimeInMinutes: timeInMinutes
        })
    };

    return (
        <form className={classes.form}>
            <div>
                <label>Set Pomodoro time</label>
                <input
                    onChange={handleChange}
                    value={timeInMinutes}
                    placeholder="Set time in minutes here"
                />
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default Editor;
