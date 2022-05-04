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
            <div>
                <Input />
                <Output />
            </div>
        );
    }
}

export default App;