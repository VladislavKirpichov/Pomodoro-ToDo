import React from 'react'

import classes from './Description.module.scss'

const Description = () => {
  return (
    <div className={classes.description}>
        <h3>What is Pomofocus?</h3>
        <p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</p>
    </div>
  )
}

export default Description