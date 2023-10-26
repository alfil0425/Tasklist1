
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
    input,
    setInput,
    tasks,
    setTasks,
    editTasks,
    setEditTasks,
}) => {
  const [description, setDescription] = useState(""); // Agrega un estado para la descripción

    const updateTask = (title, description, id, completed) => {
    const newTask = tasks.map((task) =>
        task.id === id ? { title, description, id, completed } : task
    );

    setTasks(newTask);
    setEditTasks("");
};

    useEffect(() => {
    if (editTasks) {
    setInput(editTasks.title);
      setDescription(editTasks.description); // Actualiza la descripción
    } else {
    setInput("");
      setDescription(""); // Restablece la descripción
    }
}, [setInput, editTasks]);

const onInputChange = (event) => {
    setInput(event.target.value);
};

const onDescriptionChange = (event) => {
    setDescription(event.target.value);
};

const onFormSubmit = (event) => {
    event.preventDefault();
    if (input.length >= 3) {
    if (!editTasks) {
        setTasks([
        ...tasks,
        { id: uuidv4(), title: input, description, completed: false },
        ]);
        setInput("");
        setDescription(""); // Limpia la descripción
    } else {
        updateTask(input, description, editTasks.id, editTasks.completed);
    }
    }
};

return (
    <form onSubmit={onFormSubmit}>
    <input
        type="text"
        placeholder="Write Task ..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
    />
    <textarea
        placeholder="Task Description (optional)"
        className="task-description"
        value={description}
        onChange={onDescriptionChange}
    />
    <button className="button-add" type="submit">
        {editTasks ? "SAVE" : "Add"}
        </button>
    </form>
);
};

export default Form;
