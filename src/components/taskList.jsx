import React, { useEffect } from 'react';
import TaskItem from './taskItem';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskList = ({ tasks, onTaskComplete, onTaskDelete, onTaskEdit }) => {
  useEffect(() => {
    // Puedes realizar alguna acción cuando el componente se monta o cuando cambian ciertos valores
    console.log('TaskList se ha renderizado');
  }, [tasks]);

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

