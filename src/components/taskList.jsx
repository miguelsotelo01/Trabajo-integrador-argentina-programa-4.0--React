import React from 'react';
import TaskItem from './taskItem';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskList = ({ tasks, onTaskComplete, onTaskDelete,onTaskEdit }) => {
  return (
    <ListContainer>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
          onTaskEdit={onTaskEdit}
        />
      ))}
    </ListContainer>
  );
};

export default TaskList;
