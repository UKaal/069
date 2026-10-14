import React from "react";
function SearchBar({ searchText, setSearchText }) {
    return (
        <div className="d-flex gap-2 align-items-center mb-3">
            {/* Controlled Search Input එක */}
            <input
                type="text"
                className="form-control"
                style={{ maxWidth: "200px" }}
                placeholder="Search tasks..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-outline-dark" type="button">
                Search
            </button>
        </div>
    );
}
export default SearchBar;
