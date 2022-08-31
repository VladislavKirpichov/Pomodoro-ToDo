import React from 'react'
import Button from './Button'
import Clock from './Clock'
import Editor from './Editor'
import StateButtons from './StateButtons'

import classes from './Timer.module.scss'

const Timer = () => {
  return (
    <div className={classes.timer}>
        <StateButtons />
        <Clock />
        <Button />
        <Editor />
    </div>
  )
}

export default Timer