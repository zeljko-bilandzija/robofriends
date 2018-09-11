import React from 'react';
import CounterButton from './index';
import { shallow } from 'enzyme';

it('should render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('should correctly increment counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 2});
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 3});
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({count: 3});
    expect(wrapper.props().color).toEqual('red');
});