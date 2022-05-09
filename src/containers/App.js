import React, { Component } from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
            numberText: "",
            factText: "Enter a number and I will tell you a fact about the number",
        };
    }

    // Handle Button Click . Fetch Number Trivia
    onSubmitClick = async () => {

        // Verify if the entered text is a number
        if (isNaN(+this.state.numberText) || this.state.numberText === "") {
            this.setState({ factText: "Enter a valid number" });
        }
        else {
            try {
                // Fetch Number Trivia. Update State.
                const response = await fetch(`http://numbersapi.com/${this.state.numberText}`);
                const responseText = await response.text();
                this.setState({ factText: responseText });

            } catch (err) {
                const response = await fetch(`/api/${this.state.numberText}`);  // This is to correct for HTTP/HTTPS mixing issues during deployment.
                const responseText = await response.text();
                this.setState({ factText: responseText });
                console.log("Error !!!  ", err);
            }

        }
    }


    // Handel Text Box chnage . Update State.
    onTextChnage = (event) => {
        this.setState({ numberText: event.target.value })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="georgia f6 white-90 min-vh-100 w-100 flex items-center justify-center">
                <div>
                    <h1 className="tc">Numbers Facts</h1>
                    <Input onSubmit={this.onSubmitClick} textChnage={this.onTextChnage} />
                    <ErrorBoundry>
                        <Output factText={this.state.factText} />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}

export default App;