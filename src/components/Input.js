import React from "react";
import TextBox from "./TextBox";
import Button from "../components/Button";


const Input = ({ onSubmit, textChnage }) => {
    return (
        <div className="flex mb3 pa3 br3 w-100 input">
            <TextBox textChnage={textChnage} />
            <Button onSubmit={onSubmit} />
        </div>
    );
}

export default Input;