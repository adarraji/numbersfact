import React, { Component } from "react";
import Input from "../components/Input";
import Output from "../components/Output";


class App extends Component {
    constructor() {
        super()
        this.state = { numberText: "" };
    }

    async getData(number) {
        try {
            const response = await fetch(`http://numbersapi.com/${number}`);
            const responseText = await response.text();
            return responseText;

        } catch (err) {
            console.log("Error !!!  ", err);
        }
    }

    onSubmitClick = () => {
        console.log("Submit !!!!!!!");
    }

    onTextChnage = (event) => {
        console.log(event.target.value);
    }

    componentDidMount() {
        console.log(this.getData(345));
    }

    render() {
        return (
            <div className="georgia f6 white min-vh-100 w-100 flex items-center justify-center">
                <div>
                    <Input onSubmit={this.onSubmitClick} textChnage={this.onTextChnage} />
                    <Output />
                </div>
            </div>
        );
    }
}

export default App;