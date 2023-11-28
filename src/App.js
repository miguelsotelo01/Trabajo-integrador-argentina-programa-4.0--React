import React, { useState, useEffect } from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import TaskItem from './components/taskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Tasks updated:', tasks);
    // Puedes agregar aquí la lógica para la persistencia de datos en localStorage si lo deseas
  }, [tasks]);

  const handleTaskComplete = (taskId, isCompleted) => {
    // Actualizar el estado para marcar la tarea como completada
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: isCompleted } : task
      )
    );
  };

  const handleTaskDelete = taskId => {
    // Eliminar la tarea del estado
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleTaskAdd = taskName => {
    // Agregar una nueva tarea al estado
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };
  const handleTaskEdit = (taskId, editedTaskName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: editedTaskName } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
        onTaskEdit={handleTaskEdit}
      />
     
    </div>
  );
};

export default App;
