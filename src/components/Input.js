import React from "react";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

const Input = ({ onSubmit }) => {
    return (
        <div className="flex mb3">
            <SearchBox />
            <Button onSubmit={onSubmit} />
        </div>
    );
}

export default Input;