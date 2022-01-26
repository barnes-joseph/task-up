import React from 'react';
import {Container,List,ListItem,CheckBox,TaskName,Delete} from './styled'
import {Link} from 'react-router-dom'

const TaskList = ({name,tasks,id,delete_task_list,color}) => {
  return (
      <Container>
        <Delete onClick={()=>delete_task_list(id)}>x</Delete>
        <Link to={`/tasks/${id}`} style={{'textDecoration':'none','color':'white'}}>
        <TaskName>{name}</TaskName>
        <hr style={{'width':'100%'}}/>
          <List>
          {tasks.slice(0,4).map(task=>{
            return (
            <ListItem key={task.id}>
              <CheckBox type='checkbox' checked={task.complete === true ? "checked" : null}/>
              <span>{task.name}</span>
            </ListItem>)
          })}
          </List>
          </Link>
      </Container>
  );
};

export default TaskList;
