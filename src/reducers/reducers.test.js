import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAIL } from '../constants';
import * as reducers from './index';

describe('searchRobots reducer', () => {
    const initialStateSearch = {
        searchField: ''
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobotsReducer(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobotsReducer(initialStateSearch, { 
            type: CHANGE_SEARCHFIELD, 
            payload: 'abc'}))
            .toEqual({
                searchField: 'abc'
            });
    });
});

describe('requestRobotsReducer', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: null
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobotsReducer(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots, { 
            type: REQUEST_ROBOTS_PENDING}))
            .toEqual({
                isPending: true,
                robots: [],
                error: null
            });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots, { 
            type: REQUEST_ROBOTS_SUCCESS ,
            payload: [{
                id: 1,
                name: 'John',
                email: 'email'
            }]}))
            .toEqual({
                isPending: false,
                robots: [{
                    id: 1,
                    name: 'John',
                    email: 'email'
                }],
                error: null
            });
    });

    it('should handle REQUEST_ROBOTS_FAIL', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots, { 
            type: REQUEST_ROBOTS_FAIL,
            payload: 'Some Error'}))
            .toEqual({
                isPending: false,
                robots: [],
                error: 'Some Error'
            });
    });
})