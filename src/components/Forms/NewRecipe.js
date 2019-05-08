import React from 'react';

import './new-recipe.css';
import NewIngredients from './NewIngredients';
import NewInstructions from './NewInstructions';

const NewRecipe = () => {

    const saveRecipe = () => {
        const recipeName = document.getElementById('recipe-name') ? document.getElementById('recipe-name').value : null;
        console.log(recipeName);
    }

    return (
        <div className="main-recipe-form">
            <form id="new-recipe-form" onSubmit={saveRecipe}>
                <label htmlFor="recipeName">Recipe Name</label>
                <input type="text" id="recipe-name" />

                <button type="submit">Save Recipe Name</button>
            </form>
            <NewIngredients />
            <NewInstructions />
        </div>
    )
}

export default NewRecipe;