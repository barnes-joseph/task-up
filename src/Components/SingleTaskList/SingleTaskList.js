import React, { useContext, useEffect, useState } from "react";
import { FcTodoList } from "react-icons/fc";
import {
  Container,
  Header,
  Close,
  TaskTitle,
  TaskList,
  ListItem,
  CheckBox,
  TaskInput,
  Add,
} from "./styled";
import { TasksContext } from "../../Context/TaskProvider";
import { Link, useParams } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { ACTIONS } from "../../Reducers/TaskActions";
import { fetchTaskListById } from "../../Api/tasklist-api";
import { addTask, deleteTask, toggleTask } from "../../Api/tasks-api";

const SingleTaskList = () => {
  const { id } = useParams();
  const { task, dispatchTasks } = useContext(TasksContext);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log("key pressed");
    if (e.key === "Enter") {
      console.log("Enter key detected");
      onAddTask();
    }
  };

  const onAddTask = async () => {
    if (newTask !== "") {
      const task = await addTask(id,{name:newTask})
      if(task.success){
      dispatchTasks({
        type: ACTIONS.ADD_TASK,
        payload: { task: task.task },
      })}
      setNewTask("");
    }
  };

  const onDeleteTask = async (task_id) => {
    const deleted_task = await deleteTask(task_id)
    if(deleted_task.success){
      dispatchTasks({type:ACTIONS.DELETE_TASK,payload:{task_id:parseInt(task_id)}})
    }
    else{
      alert(deleted_task.message)
    }
  };

  const onCheck = async (task) => {
    const update_data = {complete: !task.complete };
    const update_task = await toggleTask(id,task.id,update_data)
    if(update_task.success){
      console.log(update_task.task)
      dispatchTasks({
        type: ACTIONS.TOGGLE,
        payload: { task: update_task.task,completed:update_task.completed_tasks },
      });
    }
    else{
      alert(update_task.message)
    }
  };

  const fetchTasks = async () => {
    const tasks = await fetchTaskListById(id);
    if (tasks.success) {
      dispatchTasks({
        type: ACTIONS.FETCH_TASK_LIST,
        payload: { tasks: tasks.tasklist },
      }); 
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ width: "100vw", display: "flex", flexDirection: "column" }}>
      <Container>
        <Header>
          <FcTodoList size={24} />
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Close>x</Close>
          </Link>
        </Header>
        <TaskTitle>
          <h2 style={{ marginBottom: "0.2rem" }}>{task.name}</h2>
          <span style={{ color: "grey" }}>
            {task.completed} of {task.tasks.length} tasks
          </span>
        </TaskTitle>
        <hr style={{ marginLeft: "3rem", width: "80%" }} />
        <div
          style={{
            alignSelf: "center",
            width: "60%",
            marginTop: "1.5rem",
            display: "flex",
          }}
        >
          <TaskInput
            type="text"
            value={newTask}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <Add onClick={onAddTask}> + </Add>
        </div>

        <TaskList>
          {task.tasks.length !== 0 &&
            task.tasks.map((task) => {
              return (
                <ListItem key={task.id}>
                  <CheckBox
                    type="checkbox"
                    checked={task.complete === true ? "checked" : null}
                    onChange={() => onCheck(task)}
                  />
                  <span>{task.name}</span>
                  <FiTrash
                    style={{ marginLeft: "auto", alignSelf: "center" }}
                    onClick={() => onDeleteTask(task.id)}
                  />
                </ListItem>
              );
            })}
        </TaskList>
      </Container>
    </div>
  );
};

export default SingleTaskList;
