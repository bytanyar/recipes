import React from 'react';

import { IngredientContainerStyles } from './ingredients.styled.js';

const Ingredients = ({
    recipe
}) => {
    const ingredients = recipe.getElementsByTagName('ingredient') ? recipe.getElementsByTagName('ingredient') : null;

    let liNodes;
    const ingredientNodes = ingredients ? ingredients.map((ingredient, i) => {
        const lis = ingredient.getElementsByTagName('li') ? ingredient.getElementsByTagName('li') : null;
        liNodes = lis ? lis.map((li, i) => {
            if (li.value) {
                return (
                    <li key={i} className="ingredients">{li.value}</li>
                )
            }
        }) : null;
        return (
            { liNodes }
        );
    }) : null;

    return (
        <IngredientContainerStyles>
            <ul className="ingredients-list">
                {liNodes}
            </ul>
        </IngredientContainerStyles>
    )
}

export default Ingredients;