import {ACTIONS} from './TaskActions'



export const taskReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.FETCH_TASK_LIST:
            return action.payload.tasks
        case ACTIONS.ADD_TASK:
            return {...state,tasks:[...state.tasks,action.payload.task]}
        case ACTIONS.DELETE_TASK_LIST:
            return {...state,tasks:state.tasks.filter(task=>task.id !== action.payload.task_id)}
        case ACTIONS.DELETE_TASK:
            return {...state,tasks: state.tasks.filter((task) => task.id !== action.payload.task_id)}
        case ACTIONS.TOGGLE:
            console.log(action.payload.task)
            return {...state,completed:action.payload.completed,tasks:[...state.tasks.filter(task=>task.id !== action.payload.task.id),action.payload.task].sort((prevTask,currTask)=>prevTask.id - currTask.id)}
        default:
            return state
    }
}