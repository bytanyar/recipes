import React, { Component } from 'react';

import recipesData from '../../data/recipes.json';
import RecipeModal from '../Modal/RecipeModal';

import { RecipesContainerStyles } from './recipes-list.styled';

class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeId: 0,
            showRecipe: false
        }
        this.toggleRecipe = this.toggleRecipe.bind(this);
    }
    toggleRecipe = (recipeId) => {
        const recipeState = this.state.showRecipe;
        this.setState({
            recipeId: recipeId,
            showRecipe: !recipeState
        });
    };
    closeRecipe = () => {
        this.setState({
            showRecipe: false
        })
    }

    render() {
        const listingNodes = recipesData ? recipesData.recipes.map((recipe) => {
            const classes = this.state.showRecipe && this.state.recipeId === recipe.id ? "recipe active" : "recipe";
            return (
                <span key={recipe.id}>
                    <li className={classes} onClick={() => this.toggleRecipe(recipe.id)}>
                        <span className="name">{recipe.name}</span>
                        <span className="time">{recipe.prepTime + recipe.cookTime} minutes</span>
                        <span className="main-ingredient">{recipe.ingredients[0].item}</span>
                    </li>
                    {this.state.showRecipe && this.state.recipeId === recipe.id ?
                        <RecipeModal
                            bgImage={recipe.image}
                            closeRecipe={this.closeRecipe}
                            recipe={recipe}
                        />
                        : null}
                </span>
            )
        }) : null;





        return (
            <RecipesContainerStyles className="recipes-container">
                {this.state.showRecipe ?
                    <div className="recipe-modal-bg" onClick={this.closeRecipe} />
                    : null}
                <ul className="recipes-list">
                    {listingNodes}
                </ul>
            </RecipesContainerStyles>
        );
    }
}

export default RecipesList;