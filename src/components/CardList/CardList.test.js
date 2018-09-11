import React from 'react';
import { shallow } from 'enzyme';
import CardList from './index';

it('should render CardList Component', () => {
    expect(shallow(<CardList robots={[{id: 1, name: 'Test', email: 'test'}]} />)).toMatchSnapshot();
})