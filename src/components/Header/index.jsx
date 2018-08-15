import React, { Component } from "react";

import Button from "../CounterButton";

export default class Header extends Component {
    render() {
        console.log("HEader");
        return (
            <div>
                <h1 color={'red'} className="f1">RoboFriends</h1>
                <Button />
            </div>
        );
    }
}
