import React, { Component } from "react";
import Input from "../components/Input";
import Output from "../components/Output";


class App extends Component {
    constructor() {
        super()
        this.state = {
            numberText: "",
            factText: "",
        };
    }

    onSubmitClick = async () => {
        try {
            const response = await fetch(`http://numbersapi.com/${this.state.numberText}`);
            const responseText = await response.text();
            this.setState({ factText: responseText });

        } catch (err) {
            console.log("Error !!!  ", err);
        }
    }

    onTextChnage = (event) => {
        this.setState({ numberText: event.target.value })
    }

    componentDidMount() {

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