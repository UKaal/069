const express = require("express");
const router = express.Router();
const ProductModel = require("./ProductModel");

router.get("/findall", async (req, res) => {
 try {
 const products = await ProductModel.find();
 res.status(200).json(products);
 } catch (err) {
 res.status(500).send("Internal Server Error");
 }
});

router.post("/save-product", async (req, res) => {
 try {
 const newProduct = new ProductModel(req.body);
 const data = await newProduct.save();
 res.status(201).json(data);
 } catch (err) {
 res.status(500).send("Error saving product");
 }
});

router.post("/update", async (req, res) => {
 try {
 const updated = await ProductModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
 res.status(200).json(updated);
 } catch (err) {
 res.status(500).send("Error updating product");
 }
});

router.post("/delete-by-id", async (req, res) => {
 try {
 await ProductModel.findByIdAndDelete(req.body._id);
 res.status(200).send("Product deleted successfully");
 } catch (err) {
 res.status(500).send("Error deleting product");
 }
});
module.exports = router;
