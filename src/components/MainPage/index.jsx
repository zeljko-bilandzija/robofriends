import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './MainPage.css';

import Header from '../Header';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../../hoc/Scroll';
import ErrorBoundry from '../../hoc/ErrorBoundry';

export default class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {              searchField, onSearchChange, isPending } = this.props;

        // In case of long loading
        if (isPending         ) {
            return <h1>        Loading...</h1>;
        }

        return (
            <div className="tc">
                <Header />
                <SearchBox searchField={searchField} onSearchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField));
    }
};