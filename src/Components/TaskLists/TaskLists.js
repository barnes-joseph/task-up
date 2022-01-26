import React,{useContext,useState} from 'react';
import TaskList from '../TaskList/TaskList'
import AddTaskList from '../AddTaskList/AddTaskList'
import {Lists,Header,Container,TasksTitle,AddDiv,AddList} from './styled'
import {FcTodoList} from 'react-icons/fc'
import {TasksContext} from '../../Context/TaskProvider'
import {ACTIONS} from '../../Reducers/TaskActions'


const TaskLists = () => {
  const [addTaskList,setAddTaskList] = useState(false)
  const [taskList,setTaskList] = useState('')
  const {tasks,dispatch} = useContext(TasksContext)


  const onChange = (e) => {
    setTaskList(e.target.value)
  }

  const onAddTaskList = () => {
    dispatch({type:ACTIONS.ADD_TASK_LIST,payload:{name:taskList}})
    setTaskList('')
    setAddTaskList(false)
  }

  const onDeleteTaskList = (task_list_id) => {
    dispatch({type:ACTIONS.DELETE_TASK_LIST,payload:{task_list_id:parseInt(task_list_id)}})
  }
  return (
    <div style={{'width':'100vw','display':'flex','flexDirection':'column'}}>
      <Container>
        <Header><FcTodoList size={24}/></Header>
        <TasksTitle>
          <div style={{'width':'30%'}}><hr style={{'width':'100%'}}/></div>
          <h2 style={{'margin':'0px 10px'}}>Tasks <span style={{'color':'grey'}}>List</span></h2>
          <div style={{'width':'30%'}}><hr style={{'width':'100%'}}/></div>
        </TasksTitle>
        {
          !addTaskList ? 
          <AddDiv>
            <AddList onClick={()=>setAddTaskList(true)}>+</AddList>
            <span style={{'color':'grey','fontWeight':'500'}} onClick={()=>setAddTaskList(true)}>Add List</span>
          </AddDiv> :
          <AddTaskList setAddTaskList={setAddTaskList} onChange={onChange} onAddTaskList={onAddTaskList} taskList={taskList}/>
        }
        <Lists>
            { tasks.length !== 0 &&
              tasks.map(task=>{
                return (
                    <TaskList name={task.name} tasks={task.tasks} key={task.id} id={task.id} delete_task_list={onDeleteTaskList}/>
                  )
              })
            }
        </Lists>
      </Container>
    </div>
  );
};

export default TaskLists;
