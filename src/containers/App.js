import React, { Component } from "react";
import Input from "./Input";
import Output from "./Output";

class App extends Component {
    constructor() {
        super()
        this.state = {};
    }

    render() {
        return (
            <div className="georgia f6 white min-vh-100 w-100 flex items-center justify-center">
                <Input />
                <Output />
            </div>
        );
    }
}

export default App;