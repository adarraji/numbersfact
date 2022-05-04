import React from "react";

const SearchBox = ({ textChnage }) => {
    return (
        <div>
            <input className="w4 h2" type="search" placeholder="Enter a number" onChange={textChnage} />
        </div>
    );
}

export default SearchBox;