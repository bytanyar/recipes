import React, { Component } from 'react';

import './recipes-list.css';

import recipesData from '../data/recipes.json';
import RecipeModal from './Modal/RecipeModal';

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
            return (
                <span key={recipe.id}>
                    <li className="recipe" onClick={() => this.toggleRecipe(recipe.id)}>
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
            <div className="recipes-container">
                {this.state.showRecipe ?
                    <div className="recipe-modal-bg" onClick={this.closeRecipe} />
                    : null}
                <ul className="recipes-list">
                    {listingNodes}
                </ul>
                <div className="background-fixed" />
            </div>
        );
    }
}

export default RecipesList;