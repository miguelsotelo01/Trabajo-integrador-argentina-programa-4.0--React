import React, { useState } from 'react';

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
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={handleComplete}>{task.completed ? 'Reopen' : 'Complete'}</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
