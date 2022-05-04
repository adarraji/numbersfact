import React, { Component } from "react";
import Input from "../components/Input";
import Output from "../components/Output";


class App extends Component {
    constructor() {
        super()
        this.state = {};
    }

    async getData() {
        const response = await fetch("http://numbersapi.com/42");
        const responseText = await response.text();
        console.log(responseText);
    }

    render() {
        return (
            <div className="georgia f6 white min-vh-100 w-100 flex items-center justify-center">
                <div>
                    <Input />
                    <Output />
                </div>
            </div>
        );
    }
}

export default App;