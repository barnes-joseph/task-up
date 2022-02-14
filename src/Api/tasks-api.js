const API_URL = process.env.REACT_APP_API

export const fetchTasks = async () => {
    const tasks = await fetch(`${API_URL}/tasks`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const tasks_json = await tasks.json()
    return tasks_json
}

export const deleteTask = async (id) => {
    const deleted_task = await fetch(`${API_URL}/tasks/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })

    const deleted_task_json = await deleted_task.json()
    return deleted_task_json
}

export const addTask = async (id,data) => {
    const task = await fetch(`${API_URL}/tasks/${id}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

    const task_json = await task.json()
    return task_json
}

export const toggleTask = async (task_list_id,task_id,data) => {
    const task = await fetch(`${API_URL}/tasks/${task_id}/tasklist/${task_list_id}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

    const task_json = await task.json()
    return task_json
}