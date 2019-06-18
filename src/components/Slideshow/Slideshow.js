import React, { useState, useEffect } from 'react';


import LoadRecipes from '../../data/LoadRecipes';
import { SlideshowStyles } from './slideshow.styled';
import { SlideStyles } from './slide.styled';
import { ControlStyles } from './control.styled';



const Slideshow = () => {
    const [recipeList, setRecipeList] = useState(null);
    const [currentRecipe, setCurrentRecipe] = useState(0);

    useEffect(() => {
        LoadRecipes(setRecipeList);
    });

    const recipes = recipeList ? recipeList.getElementsByTagName('recipe') : null;

    const _goToRecipe = (index) => {
        setCurrentRecipe(index);
    }

    var slideIndex = 1;
    // showDivs(slideIndex);

    function plusDivs(n) {
        // showDivs(slideIndex += n);
    }

    // function showDivs(n) {
    //     var i;
    //     var x = document.getElementsByClassName('recipe-images');

    //     if (n > x.length) { slideIndex = 1 };
    //     if (n < 1) { slideIndex = x.length };
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     x[slideIndex - 1].style.display = "block";
    // }

    const slideshowNodes = recipes ? recipes.map((recipe, i) => {
        const recipeId = recipe.getElementsByTagName('recipeId')[0] ? recipe.getElementsByTagName('recipeId')[0].value : null;
        const title = recipe.getElementsByTagName('title')[0] ? recipe.getElementsByTagName('title')[0].value : null;
        const url = recipe.getElementsByTagName('imageurl')[0] ? recipe.getElementsByTagName('imageurl')[0].value : null;
        let imageClasses = recipeId === currentRecipe.recipeId ? 'slideshow-image selected' : 'slideshow-image';

        console.log(`${url}`);

        if (url) {
            return (
                <SlideStyles key={recipeId} className={imageClasses}>
                    <a className={`list-${recipeId}`} href="javasript:void();" 
                        onClick={ev => {
                            ev.preventDefault();
                            _goToRecipe(i);
                        }}
                    >
                        <h2>{title}</h2>
                        <img className={title} src={`${url}?height=250`} alt={title} />
                    </a>
                </SlideStyles>
            )
        }
    }) : null;

    return (
        <SlideshowStyles className="slideshow">
            <ul className="slideshow-container">
                {slideshowNodes}
            </ul>
            <ControlStyles>
                <button className="nav prev" onClick={() => plusDivs(-1)}>&#10094;</button>
                <button className="nav next" onClick={() => plusDivs(+1)}>&#10095;</button>
            </ControlStyles>
        </SlideshowStyles>
    );
}




export default Slideshow;