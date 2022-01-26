import React,{useReducer} from 'react';
import {taskReducer} from '../Reducers/TaskReducer'

export const TasksContext = React.createContext()

const TaskProvider = ({children}) => {
    const [tasks,dispatch] = useReducer(taskReducer,[])
    return (
        <TasksContext.Provider value={{tasks,dispatch}}>
            {children}
        </TasksContext.Provider>
    )
};

export default TaskProvider;
