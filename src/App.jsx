import { useState } from 'react'
import './index.css';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if(newTask){
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-blue-600">
            ToDo List
          </h1>
          <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Actualizar el estado al escribir
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Añade una nueva tarea"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Agregar Tarea
        </button>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              {task}
            </li>
          ))}
        </ul>
          <p className="text-gray-700">
            Aquí añade tus tareas.</p>
        </div>
      </div>  
    </>
  )
}

export default App
