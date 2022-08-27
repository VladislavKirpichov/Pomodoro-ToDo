import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './Timer.module.scss'

const Clock = () => {
    const isRunning = useSelector((state) => state.timer.isRunning);
    const timeFromStateInSeconds = useSelector((state) => state.timer.minutes) * 60;
    const [time, setTime] = useState(timeFromStateInSeconds);

    useEffect(() => {
        setTime(timeFromStateInSeconds);
    }, [timeFromStateInSeconds]);

    useEffect(() => {
        let timerId = 0;

        if (isRunning) {
            timerId = setInterval(() => {
                setTime(time - 1);
                if (time === 0) {
                    isRunning = false;
                }
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [isRunning, time]);

    return (
        <div className={classes.clock}>
            <h1>{Math.floor(time / 60)} : {' '}
                {time - Math.floor(time / 60) * 60 < 10
                    ? `${time - Math.floor(time / 60) * 60}0`
                    : time - Math.floor(time / 60) * 60}</h1>
         </div>
    );
};

export default Clock;
