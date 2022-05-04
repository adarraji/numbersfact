import React from "react";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

const Input = () => {
    return (
        <div className="flex mb3">
            <SearchBox />
            <Button />
        </div>
    );
}

export default Input;