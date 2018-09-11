import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './index';

it('should', () => {
    expect(shallow(<Card />).length).toEqual(1);
    expect(shallow(<Card />)).toMatchSnapshot();
});