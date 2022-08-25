import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        console.log('Button toggler');
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    return (
        <button
            className="px-8 py-4 text-lg uppercase font-bold bg-teal-100 text-teal-800 rounded-xl" 
            onClick={toggleTimer}>
            {isRunning ? 'STOP' : 'START'}
        </button>
    );
};

export default Button;
