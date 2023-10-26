import React from "react";

const TasksLists = ({ tasks, setTasks, setEditTasks }) => {

    const handleEdit = ({ id }) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTasks(findTask);
    }

    const handleComplete = (task) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === task.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;

            }
            )
        )
    }

    const handleDelete = ({ id }) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    return (
        <div>
            {tasks.map((task) => (
                <li className="list-item" key={task.id}>
                    <input
                        type="text"
                        value={task.title}
                        className={`list ${task.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(task)}>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        </button>


                        <button className="button-edit task-button" onClick={() => handleEdit(task)}>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </button>


                        <button className="button-delete task-button" onClick={() => handleDelete(task)}>
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </button>

                    </div>
                </li>
            ))}
        </div>
    )
}

export default TasksLists