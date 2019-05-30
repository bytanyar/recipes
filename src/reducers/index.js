import { combineReducers } from 'redux';

import recipeModalVisible from './recipeModalVisible';

export const createReducer = () => {
    return combineReducers({
        recipeModalVisible
    });
};