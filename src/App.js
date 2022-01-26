import React from 'react'
import SingleTaskList from './Components/SingleTaskList/SingleTaskList'
import TaskLists from './Components/TaskLists/TaskLists'
import TaskProvider from './Context/TaskProvider'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route element={<TaskLists/>} path='/'/>
          <Route element={<SingleTaskList/>} path='/tasks/:id'/>
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
