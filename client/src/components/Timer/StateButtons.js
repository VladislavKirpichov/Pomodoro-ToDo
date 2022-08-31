import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import classes from './Timer.module.scss';

const StateButtons = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(
        useSelector((state) => state.timer.status)
    );

    const handlePomodoroClick = (e) => {
        e.preventDefault();

        setStatus('POMODORO')

        dispatch({
            type: 'SET_STATUS__POMODORO',
        });
    };

    const handleBreakClick = (e) => {
        e.preventDefault();

        setStatus('BREAK')

        dispatch({
            type: 'SET_STATUS__BREAK',
        });
    };

    return (
        <div className={classes.status}>
            <button
                className={classes.status_button}
                onClick={handlePomodoroClick}
            >
                <p
                    className={
                        status === 'POMODORO'
                            ? classes.active
                            : classes.inactive
                    }
                >
                    Pomodoro
                </p>
            </button>
            <button
                className={classes.status_button}
                onClick={handleBreakClick}
            >
                <p
                    className={
                        status === 'BREAK' ? classes.active : classes.inactive
                    }
                >
                    Break
                </p>
            </button>
        </div>
    );
};

export default StateButtons;
