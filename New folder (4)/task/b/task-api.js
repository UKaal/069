const express = require("express");
const router = express.Router();
const TaskModel = require("./TaskModel");
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task_db")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("MongoDB Connection Error: ", err));


// 1. සියලුම Tasks ලබාගැනීම (Read All)
router.get("/findall", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

// 2. අලුත් Task එකක් ඇතුළත් කිරීම (Create)
router.post("/save-task", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        const data = await newTask.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(500).send("Error saving task");
    }
});

// 3. පවතින Task එකක් Update කිරීම (Update)
router.post("/update", async (req, res) => {
    try {
        const updated = await TaskModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).send("Error updating task");
    }
});

// 4. Task එකක් මකාදැමීම (Delete by MongoDB _id)
router.post("/delete-by-id", async (req, res) => {
    try {
        await TaskModel.findByIdAndDelete(req.body._id);
        res.status(200).send("Task deleted successfully");
    } catch (err) {
        res.status(500).send("Error deleting task");
    }
});

module.exports = router;
