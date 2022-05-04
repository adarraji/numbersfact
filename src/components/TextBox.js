import React from "react";

const TextBox = ({ textChnage }) => {
    return (
        <div>
            <input className="w4 h2" type="search" placeholder="Enter a number" onChange={textChnage} />
        </div>
    );
}

export default TextBox;