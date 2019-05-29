import { combineReducers } from 'redux';

import recipeModalVisible from './recipeModalVisible';

export const createReducer = () => {
    return combineReducers({
        recipeModalVisible,
        //Adding "Unexpected keys" default. These are keys that flag a warning in react but are actually injecting via async reducers below. Our current
        //setup doesn't know what to do with async reducers even though they work correctly and as intended. Adding a default state to them here takes care of that warning.
        recipeModalVisible: (state = null) => state
    });
};