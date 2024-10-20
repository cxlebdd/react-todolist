import React, { useState } from 'react';
import TaskList from './components/TaskList.jsx'

function App() {
  const [tasks, setTasks] = useState([]); // Lista vacía
  const [newTask, setNewTask] = useState(''); // Valor del input para la nueva tarea

  const addTask = (e) => {
      e.preventDefault(); // Prevenir el refresco de la página
      if (newTask.trim()) { // Si la tarea no está vacía
          setTasks([...tasks, newTask]);
          setNewTask(''); // Limpiar el campo después de agregar
      }
  };

  const deleteTask = (taskToDelete) => {
      setTasks(tasks.filter(task => task !== taskToDelete));
  };

  const editTask = (oldTask, newTask) => {
      setTasks(tasks.map(task => (task === oldTask ? newTask : task)));
  };

  return (
      <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

          {/* Formulario para agregar tareas */}
          <form onSubmit={addTask} className="mb-4">
              <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="border p-2 mr-2"
                  placeholder="Nueva tarea"
              />
              <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-700">Agregar</button>
          </form>

          {/* Componente TaskList */}
          <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
  );
}

export default App;