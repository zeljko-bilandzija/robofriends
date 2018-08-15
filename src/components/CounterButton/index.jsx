import React, { PureComponent } from 'react';

export default class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    /* shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count !== nextState.count) {
            return true;
        }
        return false;
    } */

    render() {
        console.log('Btn');
        return (
            <button color={this.props.color} onClick={this.updateCount}>Count {this.state.count}</button>
        );
    }

    updateCount = () => {
        this.setState(prevState => { 
            return {
                count: prevState.count + 1
            }
        });
    }
}