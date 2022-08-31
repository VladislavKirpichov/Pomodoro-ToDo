import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classes from './ToDo.module.scss'

const Form = ({ tasks, setTasks, saveTasksToBrowser }) => {
    const [task, setTask] = useState({
        header: null,
        description: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        task.id = uuidv4();

        if (!tasks) {
            setTasks([task])
        } else {
            setTasks([...tasks, task]);
        }

        setTask({
            header: null,
            description: null,
        });

        saveTasksToBrowser([...tasks, task]);
    };

    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <label>Task header
                <input
                    onChange={(e) =>
                        setTask((state) => ({
                            header: e.target.value,
                            description: state.content,
                        }))
                    }
                    required
                    placeholder="Hello world!"
                />
                </label>
                <label>Task description
                <input
                    onChange={(e) =>
                        setTask((state) => ({
                            header: state.header,
                            description: e.target.value,
                        }))
                    }
                    placeholder="Hello world!"
                />
                </label>
                <button type="submit">Add new task</button>
            </form>
        </>
    );
};

export default Form;
