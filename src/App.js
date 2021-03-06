import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './app.css';

import Parallax from './components/Parallax/Parallax';
import RecipesList from './components/RecipesList/RecipesList';
import Slideshow from './components/Slideshow/Slideshow';
import NewRecipe from './components/Forms/NewRecipe';
import { configureStore } from './store';

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window).initialReduxState;
const store = configureStore(initialState);


const App = () => {
    const windowWidth = useWindowWidth();

    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="app">
                    <header className="app-header">
                        <h1>Recipes</h1>
                        <div className="window">{windowWidth}</div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/list">Recipes List</Link></li>
                                <li><Link to="/slideshow">Slideshow</Link></li>
                                <li><Link to="/newRecipe">New Recipe</Link></li>
                            </ul>
                        </nav>
                    </header>


                    <Route path="/" exact component={Parallax} />
                    <Route path="/list" exact component={RecipesList} />
                    <Route path="/slideshow" exact component={Slideshow} />
                    <Route path="/newRecipe" exact component={NewRecipe} />

                </div>
            </BrowserRouter>
        </Provider>
    );
}

const useWindowWidth = () => { //custom hook
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => { //clean up phase
            window.removeEventListener('resize', handleResize);
        }
    });
    return windowWidth;
};

export default App;
