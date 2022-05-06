import React from "react";

const TextBox = ({ textChnage }) => {
    return (
        <div className="w-70">
            <input className="w-100 h2 br3 outline-0 white-80 textBox" type="search" placeholder="Enter a number" onChange={textChnage} />
        </div>
    );
}

export default TextBox;