import React from 'react'
import Button from './Button'
import Clock from './Clock'
import Editor from './Editor'

import classes from './Timer.module.scss'

const Timer = () => {
  return (
    <div className={classes.timer}>
        <Clock />
        <Button />
        <Editor />
    </div>
  )
}

export default Timer