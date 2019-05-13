import React from 'react';

import './instructions.css';

const Instructions = ({
    recipe
}) => {
    const instructionNodes = recipe ? recipe.instructions.map((instruction, i) => {
        return (
            <li key={i} className="instructions">{instruction}</li>
        );
    }) : null;

    return (
        <ul className="instructions-list">
            {instructionNodes}
        </ul>
    )
}

export default Instructions;