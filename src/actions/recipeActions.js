
export const SHOW_RECIPE_MODAL = 'SHOW_RECIPE_MODAL';
export const showRecipeModal = (recipeId) => {
    return {
        type: SHOW_RECIPE_MODAL,
        recipeId
    };
};

export const HIDE_RECIPE_MODAL = 'HIDE_RECIPE_MODAL';
export const hideRecipeModal = () => {
    return {
        type: HIDE_RECIPE_MODAL
    };
};