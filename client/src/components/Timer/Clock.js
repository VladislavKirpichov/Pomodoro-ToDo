import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import classes from './Timer.module.scss';

const Clock = () => {
    const dispatch = useDispatch();

    const isRunningFromState = useSelector((state) => state.timer.isRunning);
    const [isRunning, setIsRunning] = useState(isRunningFromState);

    const timeFromStateInSeconds =
        useSelector((state) => state.timer.minutes) * 60;
    const [time, setTime] = useState(timeFromStateInSeconds);

    // If state updated time
    useEffect(() => {
        setTime(timeFromStateInSeconds);
    }, [timeFromStateInSeconds]);

    // If state updated isRunning
    useEffect(() => {
        setIsRunning(isRunningFromState);
    }, [isRunningFromState]);

    const handleIsRunning = (isRunning) => {
        setIsRunning(isRunning);

        if (isRunning) {
            dispatch({
                type: 'START'
            })
        } else {
            dispatch({
                type: 'STOP'
            })
        }
    };

    const stopTimerWhenTimeIsZero = () => {
        
    }

    useEffect(() => {
        let timerId = 0;

        if (isRunning) {
            timerId = setInterval(() => {
                setTime(time => {
                    if (time - 1 < 0) {
                        handleIsRunning(false);
                        return 0;
                    }

                    return time - 1
                });
            }, 1000)
        }

        return () => {
            clearInterval(timerId);
        };
    }, [isRunning]);

    return (
        <div className={classes.clock}>
            <h1>
                {Math.floor(time / 60) < 10
                    ? `0${Math.floor(time / 60)}`
                    : Math.floor(time / 60)}{' '}
                {' : '}
                {time - Math.floor(time / 60) * 60 < 10
                    ? `0${time - Math.floor(time / 60) * 60}`
                    : time - Math.floor(time / 60) * 60}
            </h1>
        </div>
    );
};

export default Clock;
