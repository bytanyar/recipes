import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './app.css';

import RecipesList from './components/RecipesList';
import NewRecipe from './components/Forms/NewRecipe';

class App extends Component {
    render() {


        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="app">
                    <header className="app-header">
                        <h1>Recipes</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Recipes List</Link></li>
                                <li><Link to="/newRecipe">New Recipe</Link></li>
                            </ul>
                        </nav>
                    </header>


                    <Route path="/" exact component={RecipesList} />
                    <Route path="/newRecipe" exact component={NewRecipe} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
