
const API_URL = process.env.REACT_APP_API

export const fetchTaskLists = async () => {
    const tasklists = await fetch(`${API_URL}/tasklist/`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })

    const tasklist_json = await tasklists.json()
    return tasklist_json
}

export const addTaskList = async (data) => {
    const tasklist = await fetch(`${API_URL}/tasklist`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

    const tasklist_json = await tasklist.json()
    return tasklist_json
}

export const fetchTaskListById = async (id) => {
    const tasklist = await fetch(`${API_URL}/tasklist/${id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })

    const tasklist_json = await tasklist.json()
    return tasklist_json
}

export const deleteTaskList = async (id) => {
    const tasklist = await fetch(`${API_URL}/tasklist/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })

    const tasklist_json = await tasklist.json()
    return tasklist_json
}

