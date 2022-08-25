import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import Clock from './Clock';
import Settings from './Settings';
import Status from './Status';

const Timer = () => {
    return (
        <div className='p-4 m-10 bg-slate-50 rounded-2xl flex flex-col align-middle '>
            <div className='flex flex-row justify-between'>
                <Status />
                <Settings />
            </div>
            <Clock />
            <Button />
        </div>
    );
};

export default Timer;
