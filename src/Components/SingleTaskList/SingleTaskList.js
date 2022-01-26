import React,{useContext,useEffect,useState} from 'react';
import {FcTodoList} from 'react-icons/fc'
import {Container,Header,Close,TaskTitle,TaskList,ListItem,CheckBox,TaskInput,Add} from './styled'
import {TasksContext} from '../../Context/TaskProvider'
import {Link,useParams} from 'react-router-dom'
import {FiTrash} from 'react-icons/fi'
import {ACTIONS} from '../../Reducers/TaskActions'

const SingleTaskList = () => {
  const {id} = useParams()
  const {tasks,dispatch} = useContext(TasksContext)
  const [taskList,setTaskList] = useState({id:null,name:'',tasks:[],completed:0})
  const [newTask,setNewTask] = useState('')

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleKeyPress = (e) => {
    console.log('key pressed')
    if(e.key === "Enter"){
      console.log('Enter key detected')
      onAddTask()
    }
  }

  const onAddTask = () => {
    if(newTask !== ''){
    dispatch({type:ACTIONS.ADD_TASK,payload:{task_list_id:parseInt(id),task:newTask}})
    setNewTask('')
    }
  }

  const onDeleteTask = (task_id) => {
    dispatch({type:ACTIONS.DELETE_TASK,payload:{task_list_id:parseInt(id),task_id:task_id}})
    dispatch({
      type: ACTIONS.COMPLETED,
      payload: { task_list_id: parseInt(id) },
    });
  }

  const onCheck = (task) => {
    const new_task = {...task,complete:!task.complete}
    dispatch({type:ACTIONS.TOGGLE,payload:{task_list_id:parseInt(id),task:new_task}})
    dispatch({type:ACTIONS.COMPLETED,payload:{task_list_id:parseInt(id)}})
  }

  const fetchTaskList = () => {
    for (const task of tasks){
      if(task.id === parseInt(id)){
        setTaskList(task)
      }
    }
  }

  useEffect(()=>{
      fetchTaskList()
  },[])

  return (
    <div style={{'width':'100vw','display':'flex','flexDirection':'column'}}>
    <Container>
        <Header>
          <FcTodoList size={24}/>
          <Link to='/' style={{'textDecoration':'none','color':'black'}}>
            <Close>x</Close>
          </Link>
        </Header>
        <TaskTitle>
            <h2 style={{'marginBottom':'0.2rem'}}>{taskList.name}</h2>
            <span style={{'color':'grey'}}>{taskList.completed} of {taskList.tasks.length} tasks</span>
        </TaskTitle>
        <hr style={{'marginLeft':'3rem','width':'80%'}}/>
        <div style={{'alignSelf':'center','width':'60%','marginTop':'1.5rem','display':'flex'}}>
          <TaskInput type='text' value={newTask} onChange={handleChange} onKeyDown={handleKeyPress}/>
          <Add onClick={onAddTask}> + </Add>
        </div>
        
        <TaskList>
        {taskList.tasks.length !== 0 && taskList.tasks.map(task=>{
          console.log(task)
          return (
            <ListItem key={task.id}>
                    <CheckBox type='checkbox' checked={task.complete === true ? "checked" : null} onChange={()=>onCheck(task)}/>
                    <span>{task.name}</span>
                    <FiTrash style={{'marginLeft':'auto','alignSelf':'center'}} onClick={()=>onDeleteTask(task.id)}/>
            </ListItem>
          )}
        )}
        </TaskList>
        
    </Container>
    </div>
  );
};

export default SingleTaskList;
