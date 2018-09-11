import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';

export class App extends Component {
    render() {
        return <MainPage {...this.props} />;
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