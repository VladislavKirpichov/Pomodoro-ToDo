import React, { useState } from 'react'
import Button from './Button';
import Task from './Task'

import classes from './ToDo.module.scss'

let data = [
    {
        id: 1,
        header: 'Hello world',
        content: 'Some content in task...'
    },
    {
        id: 2,
        header: 'Hello world',
        content: 'Some content in task...'
    }
]

const ToDo = () => {
    const [tasks, setTasks] = useState(data);

  return (
    <div className={classes.todo}>
        <h1>ToDo</h1>
        {tasks.map((task) => <Task key={task.id} task={task} />)}
        <Button tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default ToDo