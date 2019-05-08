import React from 'react';

import './new-ingredients.css';

const NewIngredients = () => {

    let newIngredient;

    const addIngredient = () => {
        const ingredientQty = document.getElementById('qty') ? document.getElementById('qty').value : null;
        const ingredientUnit = document.getElementById('unit') ? document.getElementById('unit').value : null;
        const ingredientName = document.getElementById('item') ? document.getElementById('item').value : null;
        const ingredientDescription = document.getElementById('description') ? document.getElementById('description').value : null;
        newIngredient = ingredientQty + ' ' + ingredientUnit + ' ' + ingredientName + ', ' + ingredientDescription;
        console.log(newIngredient);
    }

    return (
        <form id="new-ingredient-form" onSubmit={addIngredient}>

            <label htmlFor="ingredients">Ingredients:</label>
            <input disabled type="text" className="ingredient" value={newIngredient} />
            <fieldset id="ingredients" className="ingredients">
                <input type="number" className="ingredient-detail qty" id="qty" maxLength="4" />
                <input type="text" className="ingredient-detail unit" id="unit" maxLength="6" />
                <input type="text" className="ingredient-detail item" id="item" />
                <input type="text" className="ingredient-detail description" id="description" />
                <button id="add-ingredient" type="submit">Add Ingredient</button>
            </fieldset>
        </form>
    )
}

export default NewIngredients;