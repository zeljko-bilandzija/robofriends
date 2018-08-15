import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../hoc/Scroll';
import ErrorBoundry from '../hoc/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField));

        // In case of long loading
        if (isPending) {
            return <h1>Loading...</h1>;
        }

        return (
            <div className="tc">
                <Header />
                <SearchBox searchField={searchField} onSearchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
};

const mapStateToProps = store => {
    return {
        searchField: store.searchRobots.searchField,
        robots: store.requestRobots.robots,
        isPending: store.requestRobots.isPending,
        error: store.requestRobots.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) // -> isto kao i ovo -> requestRobots(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);