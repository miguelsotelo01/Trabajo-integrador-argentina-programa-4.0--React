import React from 'react';
import TaskItem from './taskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete,onTaskEdit }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
          onTaskEdit={onTaskEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
