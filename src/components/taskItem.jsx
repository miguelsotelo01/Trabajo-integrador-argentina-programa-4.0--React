import React, { useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  div {
    flex: 1;
  }

  span {
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  }

  button {
    margin-left: 8px;
    padding: 8px;
    cursor: pointer;
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
  };
  const handleCancel = () => {
    setEditedTaskName(task.name);
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={handleComplete}>{task.completed ? 'reabrir' : 'Completada'}</button>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </ListItem>
  );
};

export default TaskItem;
