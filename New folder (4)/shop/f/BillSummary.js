import React from "react";
function BillSummary({ products }) {
    let grandSubtotal = 0;
    let grandDiscount = 0;
    products.forEach((p) => {
        const price = parseFloat(p.PRICE) || 0;
        const qty = parseInt(p.QUANTITY) || 0;
        const discPct = parseFloat(p.DISCOUNT) || 0;
        const sub = price * qty;
        const disc = (sub * discPct) / 100;
        grandSubtotal += sub;
        grandDiscount += disc;
    });
    const grandFinal = grandSubtotal - grandDiscount;
    return (
        <div
            className="mt-4 p-3 rounded"
            style={{ maxWidth: "260px", border: "1px solid #cbd5e1", backgroundColor: "#ffffff" }}
        >
            <h5 className="fw-bold mb-3">Bill Summary</h5>
            <div className="d-flex justify-content-between mb-1" style={{ fontSize: "14px" }}>
                <span>Subtotal:</span>
                <span className="fw-bold">Rs. {grandSubtotal.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
                <span>Total Discount:</span>
                <span className="fw-bold">Rs. {grandDiscount.toLocaleString()}</span>
            </div>
            <hr className="my-2" />
            <div className="d-flex justify-content-between" style={{ fontSize: "15px" }}>
                <span className="fw-bold">Final Amount:</span>
                <span className="fw-bold text-dark">Rs. {grandFinal.toLocaleString()}</span>
            </div>
        </div>
    );
}
export default BillSummary;