import React, { useState } from 'react';

const Button = ({ tasks, setTasks }) => {
    const [task, setTask] = useState({
        header: null,
        content: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        task.id = tasks.length + 1;

        setTasks([...tasks, task]);
        setTask({
            header: null,
            content: null,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Task header</label>
                <input
                    onChange={(e) =>
                        setTask((state) => ({
                            header: e.target.value,
                            content: state.content,
                        }))
                    }
                    placeholder="Hello world!"
                />
                <label>Task content</label>
                <input
                    onChange={(e) =>
                        setTask((state) => ({
                            header: state.header,
                            content: e.target.value,
                        }))
                    }
                    placeholder="Hello world!"
                />
                <button type="submit">Add new task</button>
            </form>
        </>
    );
};

export default Button;
