import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, tasks, setTasks, editTasks, setEditTasks }) => {

    const updateTask = (title, id, completed) => {
        const newTask = tasks.map((task) => task.id === id ? { title, id, completed } : task
        )

        setTasks(newTask);
        setEditTasks("");
    };

    useEffect(() => {
        if (editTasks) {
            setInput(editTasks.title);
        } else {
            setInput("");
        }
    }, [setInput, editTasks])

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTasks) {
            setTasks([...tasks, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTask(input, editTasks.id, editTasks.completed)
        }

    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder="Write Task ..."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">{editTasks ? "OK" : "Add"}</button>
        </form>
    )
}

export default Form