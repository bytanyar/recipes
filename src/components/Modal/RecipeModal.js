import React from 'react';

import './recipe-modal.styled.js';

import Ingredients from '../RecipeParts/Ingredients';
import Instructions from '../RecipeParts/Instructions';

import { RecipeModalStyles } from './recipe-modal.styled';

const RecipeModal = ({
    bgImage,
    closeRecipe,
    recipe
}) => {
    const bgStyle = { backgroundImage: `url(${bgImage})`};

    console.log(bgImage);

    return (
        <RecipeModalStyles className="recipe-modal-container">
            <div className="recipe-container" style={bgImage ? bgStyle : null}>
                <p className="close-x" onClick={closeRecipe}>x</p>
                <h2>{recipe.name}</h2>
                <Ingredients recipe={recipe} />
                <Instructions recipe={recipe} />
            </div>
        </RecipeModalStyles>
    )
}

export default RecipeModal;