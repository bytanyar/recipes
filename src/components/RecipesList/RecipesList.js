import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import XMLParser from 'react-xml-parser';

import {
    hideRecipeModal,
    showRecipeModal
} from '../../actions/recipeActions';
import xml from '../../data/my_cookbook2019_05_20_12_23_50.xml';
import RecipeModal from '../Modal/RecipeModal';

import { RecipesContainerStyles } from './recipes-list.styled';


const RecipesList = ({
    showRecipe,
    toggleRecipeModal
}) => {
    const [recipeId, setRecipe] = useState(0);
    const [recipeList, setRecipeList] = useState(null);

    useEffect(() => {
        loadRecipes();
    });

    const loadRecipes = () => {
        fetch(xml)
            .then((response) => response.text())
            .then((xmlText) => {
                // remove <?xml  ... etc header because react-xml-parser chokes on it
                if (xmlText.toLowerCase().substr(0, 5) == '<?xml') {
                    xmlText = xmlText.split(/\?>\r{0,1}\n{0,1}/).slice(1).join('?>\n');
                }
                let recipesData = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML

                setRecipeList(recipesData);

            }).catch((error) => {
                console.log("Parsing error: ", error);
            });
    }

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
                <div className="recipe-id" key={recipeIdNow}>
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