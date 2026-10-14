const mongoose = require("mongoose");

// Task දත්ත ගබඩා කිරීම සඳහා වන Database Schema එක
const TaskSchema = new mongoose.Schema({
    TASK_ID: { type: String, required: true },
    TASK_NAME: { type: String, required: true },
    ASSIGNED_PERSON: { type: String, required: true },
    PRIORITY: { type: String, required: true }, // Low, Medium, High
    STATUS: { type: String, required: true }    // Pending, In Progress, Completed
});

// 'tasks' collection එක සඳහා Model එක Export කිරීම
module.exports = mongoose.model("TaskModel", TaskSchema, "tasks");
