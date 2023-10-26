
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TasksLists from "./Components/TasksList";
import Footer from "./Components/Footer";
import "./App.css";

function useTasks(initialState) {
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, setTasks];
}

function App() {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useTasks(initialState); 
  const [editTasks, setEditTasks] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
            editTasks={editTasks}
            setEditTasks={setEditTasks}
          />
        </div>
        <div>
          <TasksLists
            tasks={tasks}
            setTasks={setTasks}
            setEditTasks={setEditTasks}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
