import React, { useState, useEffect } from 'react';


import { SlideshowStyles } from './slideshow.styled';
import { SlideStyles } from './slide.styled';
import { ControlStyles } from './control.styled';


const Slideshow = ({
    recipeList
}) => {
    const [currentRecipe, setCurrentRecipe] = useState(0);

    const _goToRecipe = (index) => {
        setCurrentRecipe(index);
    }

    const recipes = recipeList ? recipeList.getElementsByTagName('recipe') : null;
    
    const slideshowNodes =  recipes ? recipes.map((recipe, i) => {
        const recipeId = recipe.getElementsByTagName('recipeId')[0] ? recipe.getElementsByTagName('recipeId')[0].value : null;
        const url = recipe.getElementsByTagName('imageurl')[0] ? recipe.getElementsByTagName('imageurl')[0].value : null;
        const title = recipe.getElementsByTagName('title')[0] ? recipe.getElementsByTagName('title')[0].value : null;
        
        let imageClasses = classnames({
            'slideshow-image': true,
            selected: recipeId === currentRecipe.recipeId
        });
        return <SlideStyles>
            <a className={`list-${recipeId}`} href="javasript:void();" key={recipeId}
                onClick={ev => {
                    ev.preventDefault();
                    _goToRecipe(i);
                }}
            >
                <h2>{title}</h2>
                <img className={imageClasses} src={`${url}+?height=250`} alt={title} />
            </a>
        </SlideStyles>
    }) : null;


    return (
        <SlideshowStyles className="slideshow">
            <ul className="slideshow-container">
                {slideshowNodes}
            </ul>
            <ControlStyles>
                <button class="nav prev" onclick="">&#10094;</button>
                <button class="nav next" onclick="">&#10095;</button>
            </ControlStyles>
        </SlideshowStyles>
    );
}




export default Slideshow;