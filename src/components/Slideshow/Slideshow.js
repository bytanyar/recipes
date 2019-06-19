import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// import LoadRecipes from '../../data/LoadRecipes';
import images from '../../data/images.json';
import { SlideshowStyles } from './slideshow.styled';
import { ControlStyles } from './control.styled';



const Slideshow = () => {
    const [recipeList, setRecipeList] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     LoadRecipes(setRecipeList);
    // });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentIndex(
    //             (currentIndex + 1) % images.length
    //         );
    //     }, 1000);
    // });

    console.log(images[currentIndex]);

    const recipes = recipeList ? recipeList.getElementsByTagName('recipe') : null;

    const slideshowNodes = images ? images.map((image, i) => {
        let imageClasses = image.recipeId === images[currentIndex].recipeId ? 'slideshow-image selected' : 'slideshow-image';

            return (
                <li key={image.imageId} className={imageClasses}>
                    <Link className={`list-${image.recipeId}`} to="/list" >
                        <h2>{image.title}</h2>
                        <img className="recipe-image" src={`${image.imageUrl}?height=250`} alt={image.title} />
                    </Link>
                </li>
            )
    }) : null;

    return (
        <SlideshowStyles className="slideshow">
            <ul className="slideshow-container">
                {slideshowNodes}
            </ul>
            <ControlStyles>
                <button className="nav prev" onClick={() => {
                    setCurrentIndex(
                        (currentIndex - 1 % images.length) % images.length
                    )
                }}>&#10094;</button>
                <button className="nav next" onClick={() => {
                    setCurrentIndex(
                        (currentIndex + 1) % images.length
                    )
                }}>&#10095;</button>
            </ControlStyles>
        </SlideshowStyles>
    );
}




export default Slideshow;