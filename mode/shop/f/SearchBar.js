import React from "react";
function SearchBar({ searchText, setSearchText, selectedCategory, setSelectedCategory }) {
    return (
        <div className="d-flex gap-2 align-items-center mb-3">
            {}
            <input
                type="text"
                className="form-control form-control-sm"
                style={{ maxWidth: "220px" }}
                placeholder="Search by product name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {}
            <select
                className="form-select form-select-sm"
                style={{ maxWidth: "180px" }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Stationery">Stationery</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothing">Clothing</option>
            </select>
            <button className="btn btn-outline-dark btn-sm" type="button">
                Search
            </button>
        </div>
    );
}
export default SearchBar;