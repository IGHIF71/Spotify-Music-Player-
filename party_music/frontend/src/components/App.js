import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomPage";





export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "center">
                <HomePage />
            </div>
        );
    }
     
}

const appDiv = document.getElementById("div"); 
render(<App/>, appDiv);