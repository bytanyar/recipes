/*global ga, fbq*/

import { createStore } from 'redux';

import { createReducer } from './reducers';

export let store; 

export const configureStore = (initialState) => { 

    store = createStore(
        createReducer(),
        initialState
    );

    return store;
};

export default (store);