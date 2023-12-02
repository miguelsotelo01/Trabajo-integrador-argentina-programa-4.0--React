import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const TaskForm = ({ onTaskAdd }) => {
  const [newTask, setNewTask] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Validación para no permitir tareas vacías
    if (newTask.trim() !== '') {
      onTaskAdd(newTask);
      setNewTask('');
      setIsInvalid(false); // Restablece el estado de la validación
    } else {
      setIsInvalid(true);
      setWarningMessage('Por favor, ingresa algo antes de agregar la tarea.');
    }
  };

  useEffect(() => {
    // Función de limpieza
    return () => {
      setNewTask('');
      setIsInvalid(false);
      setWarningMessage('');
    };
  }, []);

  useEffect(() => {
    // Muestra el mensaje de advertencia cuando isInvalid es verdadero
    if (isInvalid) {
      const timeoutId = setTimeout(() => {
        setWarningMessage('');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInvalid]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nueva Tarea"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        style={{ borderColor: isInvalid ? 'red' : '' }}
      />
      <Button type="submit">Añadir Tarea</Button>
      {isInvalid && <p style={{ color: 'red' }}>{warningMessage}</p>}
    </FormContainer>
  );
};

export default TaskForm;
