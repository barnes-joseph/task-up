import React from 'react';
import {Container,TaskInput,Button,Buttons} from './styled'

const AddTaskList = ({setAddTaskList,onChange,onAddTaskList,taskList}) => {
  return (
    <Container>
        <h3>Add Task List</h3>
        <form onSubmit={onAddTaskList}>
        <TaskInput type='text' onChange={onChange} value={taskList}/>
        <Buttons>
          <Button type='submit' color='#13a113' onClick={onAddTaskList}>Add</Button>
          <Button color='#f52424e0' onClick={()=>setAddTaskList(false)}>Cancel</Button>
        </Buttons>
        </form>
        
    </Container>
    );
};

export default AddTaskList;
