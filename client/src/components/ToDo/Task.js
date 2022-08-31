import React from 'react'

import classes from './ToDo.module.scss'

const Task = ({task, deleteTask}) => {
  return (
    <div className={classes.task}>
      <button className={classes.buttonDone} onClick={() => deleteTask(task.id)}>✓</button>
      <div className={classes.taskContent}>
        <h4>{task.header}</h4>
        <p>{task.description}</p>
      </div>
    </div>
  )
}

export default Task