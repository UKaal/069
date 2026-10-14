import React from "react";
function TaskSummary({ tasks }) {
    // Tasks array එකකන් තත්ත්වයන් (Status) අනුව කාඩ්පත් 4 ගණනය කිරීම
    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter((t) => t.STATUS === "Pending").length;
    const inProgressTasks = tasks.filter((t) => t.STATUS === "In Progress").length;
    const completedTasks = tasks.filter((t) => t.STATUS === "Completed").length;
    const cards = [
        { label: "Total Tasks", count: totalTasks },
        { label: "Pending", count: pendingTasks },
        { label: "In Progress", count: inProgressTasks },
        { label: "Completed", count: completedTasks }
    ];
    return (
        <div className="mb-4">
            <h5 className="fw-bold mb-3">Task Summary</h5>
            <div className="row g-3">
                {cards.map((c, idx) => (
                    <div key={idx} className="col-md-3">
                        <div
                            className="p-3 text-center rounded"
                            style={{
                                backgroundColor: "#edf4fc",
                                border: "1px solid #dbeafe"
                            }}
                        >
                            <div className="fw-bold text-secondary mb-1" style={{ fontSize: "14px" }}>
                                {c.label}
                            </div>
                            <div className="fs-3 fw-bold text-dark">{c.count}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TaskSummary;
