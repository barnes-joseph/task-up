import React,{useReducer} from 'react';
import {taskReducer} from '../Reducers/TaskReducer'

export const TasksContext = React.createContext({name:'',completed:0,tasks:[]})

const TaskProvider = ({children}) => {
    const [task,dispatchTasks] = useReducer(taskReducer,{name:'',completed:0,tasks:[]})
    return (
        <TasksContext.Provider value={{task,dispatchTasks}}>
            {children}
        </TasksContext.Provider>
    )
};

export default TaskProvider;
