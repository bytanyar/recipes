import React from 'react';

import './ingredients.css';

const Instructions = ({
    recipe
}) => {
    const instructions = recipe.getElementsByTagName('recipetext') ? recipe.getElementsByTagName('recipetext') : null;

    let liNodes;
    const instructionNodes = instructions ? instructions.map((instruction, i) => {
        const lis = instruction.getElementsByTagName('li') ? instruction.getElementsByTagName('li') : null;
        liNodes = lis ? lis.map((li, i) => {
            if (li.value) {
                return (
                    <li key={i} className="instructions">{li.value}</li>
                )
            }
        }) : null;
        return (
            { liNodes }
        );
    }) : null;

    return (
        <ul className="instructions-list">
            {liNodes}
        </ul>
    )
}

export default Instructions;