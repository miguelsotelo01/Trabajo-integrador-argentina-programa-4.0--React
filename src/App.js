import React, { useState, useEffect } from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import TaskItem from './components/taskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  const handleTaskComplete = (taskId, isCompleted) => {
    // Actualizar el estado de completado o no de la tarea
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: isCompleted } : task
      )
    );
  };

  const handleTaskDelete = taskId => {
    // Eliminar la tarea
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleTaskAdd = taskName => {
    // Agregar una nueva tarea
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleTaskEdit = (taskId, editedTaskName) => {
    //actualiza la tarea de ser modificada
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: editedTaskName } : task
      )
    );
  };

  return (
    <div>
      <h1 className='titulo'>Lista de Tareas</h1>
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
