import React from "react";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

const Input = ({ onSubmit, textChnage }) => {
    return (
        <div className="flex mb3">
            <SearchBox textChnage={textChnage} />
            <Button onSubmit={onSubmit} />
        </div>
    );
}

export default Input;