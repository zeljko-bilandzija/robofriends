import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // This will be shown only in production. Catches all errors, and it is introduced in React 16
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError === true) {
            return(
                <h1>Ooooops. That is not good.</h1>
            );
        }
        return this.props.children;
    }
}