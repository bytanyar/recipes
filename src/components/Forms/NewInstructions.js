import React from 'react';

import './new-instructions.css';

const NewInstructions = () => {

    let newInstruction;

    const addInstruction = () => {
        const instruction = document.getElementById('instruction') ? document.getElementById('instruction').value : null;
        newInstruction = instruction;
        console.log(newInstruction);
    }

    return (
        <form id="new-ingredient-form" onSubmit={addInstruction}>

            <label htmlFor="instructions">Instructions:</label>
            <input disabled type="text" className="instruction" value={newInstruction} />
            <fieldset id="instructions" className="instructions">
                <input type="text" className="instruction-details" id="instruction" />
                <button id="add-instruction" type="submit">Add Instruction</button>
            </fieldset>
        </form>
    )
}

export default NewInstructions;