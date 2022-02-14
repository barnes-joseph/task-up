import { ACTIONS } from "./TaskActions"

export const taskListReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.FETCH_TASK_LISTS:
            const new_tasklist = action.payload.tasklists.map(tasklist=>{
                tasklist.tasks = action.payload.tasks.filter(task=>task.tasklistId === tasklist.id)
                return tasklist
            })
            return new_tasklist
        case ACTIONS.ADD_TASK_LIST:
            console.log(action.payload.tasklist)
            return [...state,action.payload.tasklist]
        case ACTIONS.DELETE_TASK_LIST:
            return state.filter(tasklist=>tasklist.id !== action.payload.tasklist_id)
        default:
            return state
            }
    }
