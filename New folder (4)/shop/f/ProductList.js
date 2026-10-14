import React from "react";
function ProductList({ products, editProduct, deleteProduct }) {
    return (
        <div>
            <h5 className="fw-bold mb-3">Product List</h5>
            {products.length === 0 ? (
                <div className="alert alert-warning text-center">No products found.</div>
            ) : (
                <table className="table table-bordered table-hover align-middle">
                    <thead style={{ backgroundColor: "#e2e8f0" }}>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price (Rs.)</th>
                            <th>Quantity</th>
                            <th>Discount (%)</th>
                            <th>Subtotal (Rs.)</th>
                            <th>Discount (Rs.)</th>
                            <th>Final Total (Rs.)</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => {
                            // එක් එක් කේළියට අදාළ ගණනය කිරීම්
                            const price = parseFloat(p.PRICE) || 0;
                            const qty = parseInt(p.QUANTITY) || 0;
                            const discPct = parseFloat(p.DISCOUNT) || 0;
                            const subtotal = price * qty;
                            const discountRs = (subtotal * discPct) / 100;
                            const finalTotal = subtotal - discountRs;
                            return (
                                <tr key={p._id || p.PRODUCT_ID}>
                                    <td>{p.PRODUCT_ID}</td>
                                    <td>{p.PRODUCT_NAME}</td>
                                    <td>{p.CATEGORY}</td>
                                    <td>{price}</td>
                                    <td>{qty}</td>
                                    <td>{discPct}%</td>
                                    <td>{subtotal}</td>
                                    <td>{discountRs}</td>
                                    <td>{finalTotal}</td>
                                    <td className="text-center">
                                        {}
                                        <button
                                            className="btn btn-sm me-1 px-2 py-0"
                                            style={{
                                                backgroundColor: "#e0e7ff", border: "1px solid #c7d2fe",
                                                fontSize: "12px"
                                            }}
                                            onClick={() => editProduct(p)}
                                        >
                                            Edit
                                        </button>
                                        {}
                                        <button
                                            className="btn btn-sm px-2 py-0"
                                            style={{
                                                backgroundColor: "#fee2e2", border: "1px solid #fecaca",
                                                color: "#b91c1c", fontSize: "12px"
                                            }}
                                            onClick={() => deleteProduct(p._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default ProductList;