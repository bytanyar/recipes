import React, { Component } from 'react';
import { connect } from 'react-redux';
import XMLParser from 'react-xml-parser';

import {
    hideRecipeModal,
    showRecipeModal
} from '../../actions/recipeActions';
import xml from '../../data/my_cookbook2019_05_20_12_23_50.xml';
import RecipeModal from '../Modal/RecipeModal';

import { RecipesContainerStyles } from './recipes-list.styled';


class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeId: 0,
            recipeList: null
        }
        this.setRecipe = this.setRecipe.bind(this);
        this.loadRecipes = this.loadRecipes.bind(this);
    }

    componentDidMount() {
        this.loadRecipes();
    }

    loadRecipes() {
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
    setRecipe(recipeIdNow){
        this.setState({
            recipeId: recipeIdNow
        });
    }

    render() {
        const recipes = this.state.recipeList ? this.state.recipeList.getElementsByTagName('recipe') : null;
        const listingNodes = recipes ? recipes.map((recipe) => {
            const recipeId = recipe.getElementsByTagName('recipeId')[0] ? recipe.getElementsByTagName('recipeId')[0].value : null;
            const title = recipe.getElementsByTagName('title')[0] ? recipe.getElementsByTagName('title')[0].value : null;
            const preptime = recipe.getElementsByTagName('preptime')[0] ? recipe.getElementsByTagName('preptime')[0].value : null;
            const cooktime = recipe.getElementsByTagName('cooktime')[0] ? recipe.getElementsByTagName('cooktime')[0].value : null;
            const classes = this.props.showRecipe && this.state.recipeId === recipeId ? "recipe active" : "recipe";

            if (title) {
                const time = preptime && cooktime ? `${preptime} + ${cooktime}` : `${preptime} ${cooktime}`;
                return (
                    <div className="recipe-id" key={recipeId}>
                        <li className={classes} onClick={
                            (ev) => {
                                ev.preventDefault();
                                this.props.toggleRecipeModal(this.props.showRecipe);
                                this.setRecipe(recipeId);
                            }
                            }>
                            <span className="name">{title}</span>
                            <span className="time">{time}</span>
                        </li>
                        {this.props.showRecipe && this.state.recipeId === recipeId ?
                            <RecipeModal
                                closeRecipe={() => this.props.toggleRecipeModal(this.props.showRecipe)}
                                recipe={recipe}
                            />
                            : null}
                    </div>
                )
            }
        }) : null;


        return (
            <RecipesContainerStyles className="recipes-container">
                {this.props.showRecipe ?
                    <div className="recipe-modal-bg" onClick={this.props.toggleRecipeModal} />
                    : null}
                <ul className="recipes-list">
                    {listingNodes}
                </ul>
            </RecipesContainerStyles>
        );
    }
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