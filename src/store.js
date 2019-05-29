/*global*/

import { createStore } from 'redux';

import { createReducer } from './reducers';

export const configureStore = (initialState) => { 

    const store = createStore(
        createReducer(),
        initialState
    );

    return store;
};

export default (configureStore);