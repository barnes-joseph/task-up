import {useReducer,createContext} from 'react'
import {taskListReducer} from '../Reducers/TaskListReducer'

export const TaskListContext = createContext()

const TaskListProvider = ({children}) => {
    const [tasklist,dispatchTaskList] = useReducer(taskListReducer,[])

    return(
        <TaskListContext.Provider value={{tasklist,dispatchTaskList}}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider;