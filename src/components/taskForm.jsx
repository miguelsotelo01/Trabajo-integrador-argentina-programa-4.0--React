import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onTaskAdd(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
