import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Card = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => (props.completed ? '#4CAF50' : '#f8f8f8')};
  opacity: 0.85;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  margin-bottom: 8px;
  text-align: center;
`;

const StyledText = styled.span`
  font-weight: ${(props) => (props.completed ? 'bold' : 'normal')};
  color: ${(props) => (props.completed ? '#fff' : '#000')};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: grey;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transition: transform 0.05s ease-in-out;
    transform: scale(1);
  }
`;

const TaskItem = ({ task, onTaskComplete, onTaskDelete, onTaskEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleComplete = () => {
    onTaskComplete(task.id, !task.completed);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onTaskEdit(task.id, editedTaskName);
    setIsEditing(false);
    alert('Tarea modificada con éxito');
  };

  const handleCancel = () => {
    setEditedTaskName(task.name);
    setIsEditing(false);
  };

  useEffect(() => {
    let timeoutId;

    if (!isEditing && editedTaskName !== '') {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // Eliminado el alerta para una nueva tarea
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [isEditing, editedTaskName]);

  return (
    <ListItem completed={task.completed}>
      <Card completed={task.completed}>
        <TextContainer>
          <StyledText completed={task.completed}>{task.name}</StyledText>
        </TextContainer>
        {isEditing ? (
          <EditContainer>
            <input
              type="text"
              value={editedTaskName}
              onChange={(e) => setEditedTaskName(e.target.value)}
            />
            <ButtonsContainer>
              <Button onClick={handleSave}>Guardar</Button>
              <Button onClick={handleCancel}>Cancelar</Button>
            </ButtonsContainer>
          </EditContainer>
        ) : (
          <ButtonsContainer>
            <Button onClick={handleComplete}>
              {task.completed ? 'Deshacer' : 'Completada'}
            </Button>
            <Button onClick={handleDelete}>Eliminar</Button>
            <Button onClick={handleEdit}>Editar</Button>
          </ButtonsContainer>
        )}
      </Card>
    </ListItem>
  );
};

export default TaskItem;