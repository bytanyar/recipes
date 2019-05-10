import React from 'react';

import './ingredients.css';

const Ingredients = ({
    recipe
}) => {
    const ingredientNodes = recipe ? recipe.ingredients.map((ingredient) => {
        return (
            <li key={ingredient.id} className="ingredients">{ingredient.qty} {ingredient.unit} {ingredient.item}, {ingredient.description}</li>
        );
    }) : null;

    return (
        <ul className="ingredients-list">
            {ingredientNodes}
        </ul>
    )
}

export default Ingredients;