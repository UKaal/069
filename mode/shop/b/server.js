
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json()); 

mongoose.connect("mongodb://127.0.0.1:27017/cart_db")
 .then(() => console.log("MongoDB Connected Successfully"))
 .catch((err) => console.log("MongoDB Connection Error: ", err));

const productRoutes = require("./product-api");
app.use("/product-api", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});