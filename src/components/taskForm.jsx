import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 300px;
  }

  button {
    margin-left: 8px;
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const TaskForm = ({ onTaskAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onTaskAdd(newTask);
    setNewTask('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva Tarea"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button type="submit">Añadir Tarea</button>
    </FormContainer>
  );
};

export default TaskForm;
