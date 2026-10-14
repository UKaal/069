import axios from "axios";
const BASE_URL = "http://localhost:5000/task-api";

export const getAllTasks=async()=>{
    return await axios.get(`${BASE_URL}/findall`);
}

export const addTask=async(task)=>{
    return await axios.post(`${BASE_URL}/save-task`,task);
}

export const updateTask=async(task)=>{
    return await axios.post(`${BASE_URL}/update`,task);
}

export const deleteTask=async(id)=>{
    return await axios.post(`${BASE_URL}/delete-by-id`,{
        _id:id
    });
}