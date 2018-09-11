import React from 'react';
import MainPage from './index';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('should render MainPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);

    const mockPropsWithRobot = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    };
    const wrapperWithRobot = shallow(<MainPage {...mockPropsWithRobot} />);
    expect(wrapperWithRobot.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('should filters robots correctly 2', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);

    const mockPropsWithRobot = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    };
    const wrapperWithRobot = shallow(<MainPage {...mockPropsWithRobot} />);
    expect(wrapperWithRobot.instance().filterRobots()).toEqual([]);
});