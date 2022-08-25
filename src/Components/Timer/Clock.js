import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// TODO: добавить изменение таймера
const Clock = () => {
    const isRunning = useSelector((state) => state.timer.isRunning);
    const [time, setTime] = useState(
        useSelector((state) => state.timer.minutes) * 1000 * 60
    );

    if (isRunning) {
        setInterval(() => {
            setTime(time - 1000);
        }, 1000);
    }

    useEffect(() => {
        let timerId = 0;

        if (isRunning) {
            timerId = setInterval(() => {
                setTime(time - 1000);
            }, 1000);
        } else {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [isRunning]);

    const getTime = () => {
        const minutes = Math.floor(Number(time) / 1000 / 60);
        const seconds = Math.floor(Number(time) / 1000 - minutes * 60);

        if (seconds < 10) {
            return `${minutes} : ${seconds}0`;
        } else {
            return `${minutes} : ${seconds}`;
        }
    };

    return (
        <div className="my-10 text-center font-bold text-8xl">
            {Math.floor(Number(time) / 1000 / 60)} :{' '}
            {Number(time) / 1000 - Math.floor(Number(time) / 1000 / 60) * 60 <
            10
                ? `${
                      Number(time) / 1000 -
                      Math.floor(Number(time) / 1000 / 60) * 60
                  }0`
                : `${
                      Number(time) / 1000 -
                      Math.floor(Number(time) / 1000 / 60) * 60
                  }`}
        </div>
    );
};

export default Clock;
