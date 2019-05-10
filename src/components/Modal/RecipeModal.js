import React from 'react';

import './recipe-modal.css';

import Ingredients from '../RecipeParts/Ingredients';
import Instructions from '../RecipeParts/Instructions';

const RecipeModal = ({
    bgImage,
    closeRecipe,
    recipe
}) => {
    const bgStyle = { backgroundImage: `url(${bgImage})`};

    console.log(bgImage);

    return (
        <div className="recipe-modal-container">
            <div className="recipe-container" style={bgImage ? bgStyle : null}>
                <p className="close-x" onClick={closeRecipe}>x</p>
                <h2>{recipe.name}</h2>
                <Ingredients recipe={recipe} />
                <Instructions recipe={recipe} />
            </div>
        </div>
    )
}

export default RecipeModal;