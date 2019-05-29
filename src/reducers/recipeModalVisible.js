import {
    SHOW_RECIPE_MODAL,
    HIDE_RECIPE_MODAL
} from '../actions/recipeActions';

const recipeModalVisible = (state = false, action) => {
    switch (action.type) {
        case SHOW_RECIPE_MODAL:
            return action.recipeId;
        case HIDE_RECIPE_MODAL:
            return false;
        default:
            return state;
    }
};

export default recipeModalVisible;