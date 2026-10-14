import React from "react";

function SearchBar({searchText, setSearchText }) {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Employee ID, First Name or Last Name..."
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchBar;