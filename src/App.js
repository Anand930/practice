import { useState } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState("")
  const [status, setStatus] = useState(false)
  const [task, setTask] = useState([])
  const addTask = (e) =>{
    e.preventDefault()
    const newArr = [...task, taskInput]
    setTask(newArr)
    setTaskInput("")
  }

  const handleInputChange = (e) =>{
    setTaskInput(e.target.value)
  }
  
  return (
    <div className="App">
    <h1>Todo List</h1>
    <form onSubmit={addTask}>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      {task.map((tasks, index) => (
        <li key={index} className="">
          <span >{tasks}</span>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default App;
