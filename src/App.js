import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './app.css';

import Parallax from './components/Parallax/Parallax';
import RecipesList from './components/RecipesList/RecipesList';
import { configureStore } from './store';

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window).initialReduxState;
const store = configureStore(initialState);


class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div className="app">
                        <header className="app-header">
                            <h1>Recipes</h1>
                            <nav>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/list">Recipes List</Link></li>
                                </ul>
                            </nav>
                        </header>


                        <Route path="/" exact component={Parallax} />
                        <Route path="/list" exact component={RecipesList} />

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
