import React, { useState, useEffect } from "react";
function ProductForm({ selectedProduct, saveProduct, clearSelection }) {
    
    const initialState = {
        PRODUCT_ID: "",
        PRODUCT_NAME: "",
        PRICE: "",
        QUANTITY: "",
        CATEGORY: "",
        DISCOUNT: ""
    };
    const [product, setProduct] = useState(initialState);
    
    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            setProduct(initialState);
        }
    }, [selectedProduct]);
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        saveProduct(product);
        setProduct(initialState);
    };
  
    const handleReset = () => {
        setProduct(initialState);
        if (clearSelection) clearSelection();
    };
    return (
        <div className="mb-4">
            <h5 className="fw-bold mb-3">Add / Update Product</h5>
            <form onSubmit={handleSubmit}>
                {}
                <div className="row g-2 mb-2">
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="PRODUCT_ID"
                            placeholder="Product ID"
                            value={product.PRODUCT_ID}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="PRODUCT_NAME"
                            placeholder="Product Name"
                            value={product.PRODUCT_NAME}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            name="PRICE"
                            placeholder="Price (Rs.)"
                            value={product.PRICE}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                {}
                <div className="row g-2 mb-3">
                    <div className="col-md-3">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            name="QUANTITY"
                            placeholder="Quantity"
                            value={product.QUANTITY}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select form-select-sm"
                            name="CATEGORY"
                            value={product.CATEGORY}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Stationery">Stationery</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Clothing">Clothing</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            name="DISCOUNT"
                            placeholder="Discount (%)"
                            value={product.DISCOUNT}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {}
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-outline-dark btn-sm px-3" disabled={!!product._id}>
                        Add Product
                    </button>
                    <button type="submit" className="btn btn-outline-dark btn-sm px-3" disabled={!product._id}>
                        Update Product
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-sm px-3"
                        onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
            <hr className="mt-4" />
        </div>
    );
}
export default ProductForm;