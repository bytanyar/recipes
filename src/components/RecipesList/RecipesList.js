import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
    hideRecipeModal,
    showRecipeModal
} from '../../actions/recipeActions';
import LoadRecipes from '../../data/LoadRecipes';
import RecipeModal from '../Modal/RecipeModal';

import { RecipesContainerStyles } from './recipes-list.styled';


const RecipesList = ({
    showRecipe,
    toggleRecipeModal
}) => {
    const [recipeId, setRecipe] = useState(0);
    const [recipeList, setRecipeList] = useState(null);

    useEffect(() => {
        LoadRecipes(setRecipeList);
    });

    const recipes = recipeList ? recipeList.getElementsByTagName('recipe') : null;
    const listingNodes = recipes ? recipes.map((recipe) => {
        const recipeIdNow = recipe.getElementsByTagName('recipeId')[0] ? recipe.getElementsByTagName('recipeId')[0].value : null;
        const title = recipe.getElementsByTagName('title')[0] ? recipe.getElementsByTagName('title')[0].value : null;
        const preptime = recipe.getElementsByTagName('preptime')[0] ? recipe.getElementsByTagName('preptime')[0].value : null;
        const cooktime = recipe.getElementsByTagName('cooktime')[0] ? recipe.getElementsByTagName('cooktime')[0].value : null;
        const classes = showRecipe && recipeId === recipeIdNow ? "recipe active" : "recipe";

        if (title) {
            const time = preptime && cooktime ? `${preptime} + ${cooktime}` : `${preptime} ${cooktime}`;
            return (
                <div id={recipeIdNow} className="recipe-id" key={recipeIdNow}>
                    <li className={classes} onClick={
                        (ev) => {
                            ev.preventDefault();
                            toggleRecipeModal(showRecipe);
                            setRecipe(recipeIdNow);
                        }
                    }>
                        <span className="name">{title}</span>
                        <span className="time">{time}</span>
                    </li>
                    {showRecipe && recipeId === recipeIdNow ?
                        <RecipeModal
                            closeRecipe={() => toggleRecipeModal(showRecipe)}
                            recipe={recipe}
                        />
                        : null}
                </div>
            )
        }
    }) : null;


    return (
        <RecipesContainerStyles className="recipes-container">
            {showRecipe ?
                <div className="recipe-modal-bg" onClick={toggleRecipeModal} />
                : null}
            <ul className="recipes-list">
                {listingNodes}
            </ul>
        </RecipesContainerStyles>
    );
}



const mapStateToProps = state => {
    return {
        showRecipe: state.recipeModalVisible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleRecipeModal: (showRecipe) => {
            if (showRecipe) {
                dispatch(hideRecipeModal());
            } else {
                dispatch(showRecipeModal());
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);