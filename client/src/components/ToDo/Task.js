import React from 'react'

import classes from './ToDo.module.scss'

const Task = ({task}) => {
  return (
    <div className={classes.task}>
      <h4>{task.header}</h4>
      <p>{task.content}</p>
    </div>
  )
}

export default Task