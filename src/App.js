import { useState } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState("")
  const [task, setTask] = useState([])
  const addTask = (e) =>{
    e.preventDefault()
    const newArr = [...task, {text:taskInput,status:false, id:Date.now()}]

    setTask(newArr)
    setTaskInput("")
  }

  const handleInputChange = (e) =>{
    setTaskInput(e.target.value)
  }
  const deleteHandler = (i) => {
    const newTask = task.filter((t) => i!== t.id);
    setTask(newTask);
  };

  const toggleTasks = (id) =>{
    const newTask = task.map((tasks)=>(
      tasks.id===id?{...tasks, status:!tasks.status}:tasks
    ))
    setTask(newTask)
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
    </form >
    <ul>
      {task.map((tasks) => (
        <li key={tasks.id}  >
          <div className={tasks.status?"complete":"tasks"} onClick={()=>toggleTasks(tasks.id)} >{tasks.text}</div>
          <button onClick={()=>deleteHandler(tasks.id)}>Remove</button>
        </li> 
      ))}
    </ul>
  </div>

  );
}

export default App;
