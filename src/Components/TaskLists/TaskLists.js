import React,{useContext,useState,useEffect} from 'react';
import TaskList from '../TaskList/TaskList'
import AddTaskList from '../AddTaskList/AddTaskList'
import {Lists,Header,Container,TasksTitle,AddDiv,AddList} from './styled'
import {FcTodoList} from 'react-icons/fc'
import {TaskListContext} from '../../Context/TaskListProvider'
import { TasksContext } from '../../Context/TaskProvider';
import {ACTIONS} from '../../Reducers/TaskActions'
import { fetchTaskListById,fetchTaskLists,deleteTaskList,addTaskList } from '../../Api/tasklist-api';
import { fetchTasks } from '../../Api/tasks-api';

const TaskLists = () => {
  const [addTasklist,setAddTaskList] = useState(false)
  const [taskList,setTaskList] = useState('')
  const {tasks,dispatchTasks} = useContext(TasksContext)
  const {tasklist,dispatchTaskList} = useContext(TaskListContext)

  const onChange = (e) => {
    setTaskList(e.target.value)
  }

  const onFetchTaskList = async () => {
    const all_tasklists = await fetchTaskLists()
    const all_tasks = await fetchTasks()
    console.log(all_tasklists,all_tasks)
    if(all_tasklists.success === true && all_tasks.success === true){
      console.log(all_tasklists.success)
      dispatchTaskList({type:ACTIONS.FETCH_TASK_LISTS,payload:{tasklists:all_tasklists.tasklists,tasks:all_tasks.tasks}})
    }
    else{
      alert(all_tasklists.message)
    }
  }
  const onAddTaskList = async (e) => {
      e.preventDefault()
      let task_list = await addTaskList({name:taskList})
      task_list = await fetchTaskListById(task_list.tasklist.id)
      if(task_list.success){
          dispatchTaskList({
            type: ACTIONS.ADD_TASK_LIST,
            payload: { tasklist:task_list.tasklist},
          });
      }
      else{
        alert(task_list.message)
      }
    setTaskList('')
    setAddTaskList(false)
  }

  const onDeleteTaskList = async (task_list_id) => {
    const deleted_tasklist = await deleteTaskList(task_list_id)
    if(deleted_tasklist.success === true){
      dispatchTaskList({type:ACTIONS.DELETE_TASK_LIST,payload:{tasklist_id:parseInt(task_list_id)}})
    }
    else{
      alert(deleted_tasklist.message)
    }
  }

  useEffect(()=>{
    onFetchTaskList()
  },[])
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
          !addTasklist ? 
          <AddDiv>
            <AddList onClick={()=>setAddTaskList(true)}>+</AddList>
            <span style={{'color':'grey','fontWeight':'500'}} onClick={()=>setAddTaskList(true)}>Add List</span>
          </AddDiv> :
          <AddTaskList setAddTaskList={setAddTaskList} onChange={onChange} onAddTaskList={onAddTaskList} taskList={taskList}/>
        }
        <Lists>
            { tasklist.length !== 0 &&
              tasklist.map(task=>{
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
