// Express, Mongoose සහ CORS ආනයනය කිරීම
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware සැකසීම
app.use(cors()); // Frontend එක සමඟ සම්බන්ධ වීමට CORS සක්‍රීය කිරීම
app.use(express.json()); // JSON Request body භාරගැනීම

// MongoDB Database එකට සම්බන්ධ වීම

// Task API Routes සම්බන්ධ කිරීම (Prefix: /task-api)
const taskRoutes = require("./task-api");
app.use("/task-api", taskRoutes);

// Server එක Port 5000 හි ආරම්භ කිරීම
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
