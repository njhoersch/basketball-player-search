import "./SearchInput.css";

import React, { useState } from "react";

function SearchInput(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const firstNameOnChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameOnChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const buttonHandler = (event) => {
        props.searchPressed(firstName, lastName);
    };

    return (
        <div className="search-container">
            <div className="search-title">NBA Player Search</div>
            <label className="label">First Name</label>
            <input
                className="text-box"
                type="text"
                onChange={firstNameOnChangeHandler}
            ></input>
            <label className="label">Last Name</label>
            <input
                className="text-box"
                type="text"
                onChange={lastNameOnChangeHandler}
            ></input>
            <button className="search-button" onClick={buttonHandler}>
                Search
            </button>
        </div>
    );
}

export default SearchInput;
