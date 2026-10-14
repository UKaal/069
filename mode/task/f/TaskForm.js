import React, { useState, useEffect } from "react";

function TaskForm({ selectedTask, saveTask, clearSelection }) {
    
    const initialState={
       
            TASK_ID: "",
            TASK_NAME: "",
            ASSIGNED_PERSON: "",
            PRIORITY: "", // Low, Medium, High
            STATUS:""
    };

    const [task,settask]=useState(initialState);

    useEffect(()=>{
        if(selectedTask){
            settask(selectedTask);
        }else{
            settask(initialState);
        }
    },[selectedTask]);

    const handleChange = (event)=>{
        const {name,value}=event.target;
        settask((pre)=>({
            ...pre,
            [name]:value
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        saveTask(task);
        settask(initialState);
    }

    const handleReset = ()=>{
        settask(initialState);
        if(clearSelection) clearSelection();
    }



   
    return (
        <div className="mb-4">
            <h5 className="fw-bold mb-3">Add New Task</h5>
            <form onSubmit={handleSubmit} className="d-flex flex-wrap gap-2 align-items-center">
                <input
                    type="text"
                    className="form-control"
                    style={{ width: "130px" }}
                    name="TASK_ID"
                    placeholder="Task ID"
                    value={task.TASK_ID}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    style={{ width: "180px" }}
                    name="TASK_NAME"
                    placeholder="Task Name"
                    value={task.TASK_NAME}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    style={{ width: "160px" }}
                    name="ASSIGNED_PERSON"
                    placeholder="Assigned Person"
                    value={task.ASSIGNED_PERSON}
                    onChange={handleChange}
                    required
                />
                <select
                    className="form-select"
                    style={{ width: "150px" }}
                    name="PRIORITY"
                    value={task.PRIORITY}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select
                    className="form-select"
                    style={{ width: "150px" }}
                    name="STATUS"
                    value={task.STATUS}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type="submit" className="btn btn-outline-dark px-3">
                    {task._id ? "Update Task" : "Add Task"}
                </button>
                <button type="button" className="btn btn-outline-secondary px-3" onClick={handleReset}>
                    Reset
                </button>
            </form>
            <hr className="mt-4" />
        </div>
    );
}
export default TaskForm;
