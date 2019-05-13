import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './app.css';

import Home from './components/Home';
import RecipesList from './components/RecipesList/RecipesList';
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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/list">Recipes List</Link></li>
                                <li><Link to="/newRecipe">New Recipe</Link></li>
                            </ul>
                        </nav>
                    </header>


                    <Route path="/" exact component={Home} />
                    <Route path="/list" exact component={RecipesList} />
                    <Route path="/newRecipe" exact component={NewRecipe} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
