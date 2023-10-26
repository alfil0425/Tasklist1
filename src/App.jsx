import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import TasksLists from './Components/TasksList'
import Footer from './Components/Footer'
import './App.css'



function App() {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState(initialState)
  const [editTasks, setEditTasks] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='container'>
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
  )
}

export default App
