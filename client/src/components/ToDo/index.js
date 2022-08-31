import { isNull } from 'lodash';
import React, { useState } from 'react';
import Form from './Form';
import Task from './Task';

import classes from './ToDo.module.scss';

const ToDo = () => {
    // const tryGetDataFromDocument = () => {
    //     data = window.localStorage.getItem('todos')
    // }

    let data = window.localStorage?.getItem('todos');
    console.log(data);
    const [tasks, setTasks] = useState(isNull(data) ? [] : JSON.parse(data));
    console.log(tasks)

    // window.localStorage.removeItem('todos');

    const deleteTask = (deletedTaskId) => {
        const newTasks = tasks.filter((task) => task.id !== deletedTaskId);
        setTasks(newTasks);
        window.localStorage.setItem('todos', JSON.stringify(newTasks));
    };

    const saveTasksToBrowser = (tasks) => {
        console.log('Hello')
        window.localStorage.setItem('todos', JSON.stringify(tasks));
    };

    return (
        <div className={classes.todo}>
            <h1>ToDo</h1>
            {tasks?.map((task) => (
                <Task
                    key={task.id}
                    deleteTask={deleteTask}
                    task={task}
                />
            ))}
            <Form tasks={tasks} setTasks={setTasks} saveTasksToBrowser={saveTasksToBrowser} />
        </div>
    );
};

export default ToDo;
