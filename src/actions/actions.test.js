import * as actions from './index';
import * as constants from '../constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Actions', () => {
    it('should create action to change search text', () => {
        const text = 'search';
        const expectedAction = {
            type: constants.CHANGE_SEARCHFIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    it('handles requesting robots API - PENDING', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        
        const expectedAction = {
            type: constants.REQUEST_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    });

    it('handles requesting robots API - SUCCESS', () => {
        // ??? using supertest?
    });
});