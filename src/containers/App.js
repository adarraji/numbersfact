import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import Output from "../components/Output";


class App extends Component {
    constructor() {
        super()
        this.state = {};
    }

    render() {
        return (
            <div className="georgia f6 white min-vh-100 w-100">
                <div>
                    <SearchBox />
                    <Button />
                    <Output />
                </div>
            </div>
        );
    }
}

export default App;