import React from "react";
function TaskList({ tasks, editTask, deleteTask }) {
    return (
        <div>
            <h5 className="fw-bold mb-3">Task List</h5>
            {tasks.length === 0 ? (
                // දත්ත කනාමැති විට කපන්වන Alert එක
                <div className="alert alert-warning text-center">No tasks found.</div>
            ) : (
                // දත්ත කපන්වන Table එක
                <table className="table table-bordered table-hover align-middle">
                    <thead style={{ backgroundColor: "#e2e8f0" }}>
                        <tr>
                            <th style={{ width: "12%" }}>Task ID</th>
                            <th style={{ width: "28%" }}>Task Name</th>
                            <th style={{ width: "20%" }}>Assigned Person</th>
                            <th style={{ width: "15%" }}>Priority</th>
                            <th style={{ width: "15%" }}>Status</th>
                            <th style={{ width: "10%" }} className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task._id || task.TASK_ID}>
                                <td>{task.TASK_ID}</td>
                                <td>{task.TASK_NAME}</td>
                                <td>{task.ASSIGNED_PERSON}</td>
                                <td>{task.PRIORITY}</td>
                                <td>{task.STATUS}</td>
                                <td className="text-center">
                                    {/* Edit කබාත්තම - සම්ූර්ණ task object එක Form එකට යවයි */}
                                    <button
                                        className="btn btn-sm me-1 px-2 py-0"
                                        style={{
                                            backgroundColor: "#e0e7ff", border: "1px solid #c7d2fe",
                                            fontSize: "12px"
                                        }}
                                        onClick={() => editTask(task)}
                                    >
                                        Edit
                                    </button>
                                    {/* Delete කබාත්තම - MongoDB _id එක මගින් delete කරයි */}
                                    <button
                                        className="btn btn-sm px-2 py-0"
                                        style={{
                                            backgroundColor: "#fee2e2", border: "1px solid #fecaca", color:
                                                "#b91c1c", fontSize: "12px"
                                        }}
                                        onClick={() => deleteTask(task._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default TaskList;