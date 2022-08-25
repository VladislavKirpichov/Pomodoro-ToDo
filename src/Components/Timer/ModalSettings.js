import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ModalSettings = ({ active, setActive }) => {
    const dispatch = useDispatch();
    const [pomodoroMinutes, setPomodoroMinutes] = useState(
      useSelector((state) => state.timer.pomodoroMinutes)
    )
    const [breakMinutes, setBreakMinutes] = useState(
      useSelector((state) => state.timer.breakMinutes)
    )

    const handleForm = (e) => {
      e.preventDefault();

      dispatch({
        type: 'SET_POMODORO',
        newTimeInMinutes: pomodoroMinutes,
      })

      dispatch({
        type: 'SET_BREAK',
        newTimeInMinutes: breakMinutes,
      })

      dispatch({
        type: 'SET_STATUS__POMODORO'
      })
    }

    return (
        <div
            onClick={() => setActive(false)}
            className={
                active
                    ? 'scale-100 fixed bg-black w-screen p-20 bg-opacity-40  h-screen left-0 top-0 flex align-middle justify-center'
                    : 'scale-0 fixed bg-black w-screen p-20 bg-opacity-40  h-screen left-0 top-0 flex align-middle justify-cente'
            }
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="px-12 py-12 bg-slate-50 rounded-3xl"
            >
                <h3 className='mb-4 font-medium text-2xl'>Settings</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <form className="flex flex-col">
                        <label className='mb-2'>Pomodoro Timer</label>
                        <input className='px-4 py-2 rounded-md' onChange={(e) => {setPomodoroMinutes(e.target.value)}} placeholder={pomodoroMinutes}></input>
                    </form>
                    <form className="flex flex-col">
                        <label className='mb-2'>Break Timer</label>
                        <input className='px-4 py-2 rounded-md' onChange={(e) => {setBreakMinutes(e.target.value)}} placeholder={breakMinutes}></input>
                    </form>
                </div>
                <button className='bg-slate-300 px-4 py-3 rounded-xl font-medium' onClick={handleForm}>Ok</button>
            </div>
        </div>
    );
};

export default ModalSettings;
