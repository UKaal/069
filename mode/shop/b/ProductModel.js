const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
 PRODUCT_ID: { type: String, required: true },
 PRODUCT_NAME: { type: String, required: true },
 PRICE: { type: Number, required: true },
 QUANTITY: { type: Number, required: true },
 CATEGORY: { type: String, required: true },
 DISCOUNT: { type: Number, default: 0 } 
});

module.exports = mongoose.model("ProductModel", ProductSchema, "products");