import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import Timer from './Components/Timer/Timer';
import './index.css'

function App() {

  return (
    <div className="App lg:px-40 text-slate-700 bg-slate-100 left-0 top-0 min-h-screen pt-32">
      <Header></Header>
      <p className='mb-16 text-center font-bold text-4xl text-slate-400'>🌀 An online Pomodoro Timer to<br/>boost your productivity</p>
      <Timer></Timer>
    </div>
  );
}

export default App;
