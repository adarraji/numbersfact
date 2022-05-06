import React from "react";

const Button = ({ onSubmit }) => {
    return (
        <div>
            <button className="ml3 w4 h2 br3 white-80 button" type="submit" onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default Button;