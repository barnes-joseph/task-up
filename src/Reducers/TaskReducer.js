import {ACTIONS} from './TaskActions'

let tasklist_id = 0
let task_id = 0

export const taskReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.ADD_TASK_LIST:
            tasklist_id += 1
            const new_task_list = {id:tasklist_id,name:action.payload.name,tasks:[],completed:0}
            return [...state,new_task_list]

        case ACTIONS.ADD_TASK:
            console.log(task_id)
            task_id += 1
            console.log(task_id)
            return state.map(task_list => {
                console.log(task_list)
                if(task_list.id === action.payload.task_list_id){
                    task_list.tasks = [...task_list.tasks,{id:task_id,name:action.payload.task,complete:false}]
                }
                return task_list
            })
            
            
        case ACTIONS.DELETE_TASK_LIST:
            return state.filter(tasklist=> tasklist.id !== action.payload.task_list_id)
        case ACTIONS.DELETE_TASK:
            return state.map(tasklist=>{
                if(tasklist.id === action.payload.task_list_id){
                    tasklist.tasks = [...tasklist.tasks.filter(task=>task.id !== action.payload.task_id)]
                }
                return tasklist
            })
        case ACTIONS.TOGGLE:
            return state.map(tasklist=>{
                 if(tasklist.id === action.payload.task_list_id){
                    tasklist.tasks = [...tasklist.tasks.filter(task=>task.id !== action.payload.task.id),action.payload.task].sort((firstTask,secondTask) => firstTask.id - secondTask.id)
                }    
                return tasklist
            })
        case ACTIONS.COMPLETED:
            return state.map(tasklist=>{
            if(tasklist.id === action.payload.task_list_id){
                tasklist.completed = tasklist.tasks.reduce((prevTask,currTask)=>{
                        if(currTask.complete === true){
                            return ++prevTask}
                           return prevTask },0)
            }
            return tasklist
        })
        default:
            return state
    }
}