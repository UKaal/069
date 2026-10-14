import React from "react";
function CartSummary({ products }) {
   
    const totalProducts = products.length;
    
    const totalQuantity = products.reduce((acc, curr) => acc + (parseInt(curr.QUANTITY) || 0), 0);
    return (
        <div className="mb-4">
            <h5 className="fw-bold mb-3">Shopping Cart Summary</h5>
            <div className="row g-3">
                {}
                <div className="col-md-6">
                    <div
                        className="p-3 text-center rounded"
                        style={{ backgroundColor: "#edf4fc", border: "1px solid #dbeafe" }}
                    >
                        <div className="fw-bold text-secondary mb-1" style={{ fontSize: "14px" }}>
                            Total Products
                        </div>
                        <div className="fs-3 fw-bold text-dark">{totalProducts}</div>
                    </div>
                </div>
                {}
                <div className="col-md-6">
                    <div
                        className="p-3 text-center rounded"
                        style={{ backgroundColor: "#edf4fc", border: "1px solid #dbeafe" }}
                    >
                        <div className="fw-bold text-secondary mb-1" style={{ fontSize: "14px" }}>
                            Total Quantity
                        </div>
                        <div className="fs-3 fw-bold text-dark">{totalQuantity}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartSummary;