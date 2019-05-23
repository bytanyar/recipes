import React, { Component } from 'react';
import XMLParser from 'react-xml-parser';

import xml from '../../data/my_cookbook2019_05_20_12_23_50.xml';
import RecipeModal from '../Modal/RecipeModal';

import { RecipesContainerStyles } from './recipes-list.styled';


class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeId: 0,
            showRecipe: false,
            recipeList: null
        }
        this.toggleRecipe = this.toggleRecipe.bind(this);
        this.loadRecipes = this.loadRecipes.bind(this);
    }

    componentDidMount() {
        this.loadRecipes();
    }

    loadRecipes(){
        fetch(xml)
            .then((response) => response.text())
            .then((xmlText) => {
                // remove <?xml  ... etc header because react-xml-parser chokes on it
                if (xmlText.toLowerCase().substr(0, 5) == '<?xml') {
                    xmlText = xmlText.split(/\?>\r{0,1}\n{0,1}/).slice(1).join('?>\n');
                }
                let recipesData = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML
                
                this.setState({
                    recipeList: recipesData
                });
            }).catch((error) => {
                console.log("Parsing error: ", error);
            });
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
        const recipes = this.state.recipeList ? this.state.recipeList.getElementsByTagName('recipe') : null;

        console.log('recipes', recipes);

        const listingNodes = recipes ? recipes.map((recipe) => {
            console.log('recipe inside', recipe.getElementsByTagName('recipeId')[0].value);
            const recipeId = recipe.getElementsByTagName('recipeId')[0].value;
            const title = recipe.getElementsByTagName('title')[0].value;
            const preptime = recipe.getElementsByTagName('preptime')[0].value;
            const cooktime = recipe.getElementsByTagName('cooktime')[0].value;
            const classes = this.state.showRecipe && this.state.recipeId === recipeId ? "recipe active" : "recipe";
            return (
                <span key={recipeId}>
                    <li className={classes} onClick={() => this.toggleRecipe(recipeId)}>
                        <span className="name">{title}</span>
                        <span className="time">{preptime + cooktime} minutes</span>
                    </li>
                    {this.state.showRecipe && this.state.recipeId === recipeId ?
                        <RecipeModal
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