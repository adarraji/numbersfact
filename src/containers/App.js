import React, { Component } from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import "./App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
            numberText: "",
            factText: "Enter a number and I will tell you a fact about the number",
        };
    }

    onSubmitClick = async () => {
        if (isNaN(+this.state.numberText) || this.state.numberText === "") {
            this.setState({ factText: "Enter a valid number" });
        }
        else {
            try {
                const response = await fetch(`http://numbersapi.com/${this.state.numberText}`);
                const responseText = await response.text();
                this.setState({ factText: responseText });

            } catch (err) {
                fetch(`/api/${this.state.numberText}`);
                console.log("Error !!!  ", err);
            }

        }
    }



    onTextChnage = (event) => {
        this.setState({ numberText: event.target.value })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="georgia f6 white-90 min-vh-100 w-100 flex items-center justify-center">
                <div>
                    <Input onSubmit={this.onSubmitClick} textChnage={this.onTextChnage} />
                    <Output factText={this.state.factText} />
                </div>
            </div>
        );
    }
}

export default App;