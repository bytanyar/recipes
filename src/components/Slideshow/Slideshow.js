import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import images from '../../data/images.json';
import { SlideshowStyles } from './slideshow.styled';
import { ControlStyles } from './control.styled';



const Slideshow = () => {
    const [recipeList, setRecipeList] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrentIndex(
                (currentIndex + 1) % images.length
            );
        }, 3000);
    });

    const goToNext = (images) => {
        setCurrentIndex(
            (currentIndex + 1) % images.length
        );
    }
    const goToPrev = (images) => {
        setCurrentIndex(
            (currentIndex - 1 % images.length) % images.length
        );
    }

    const recipes = recipeList ? recipeList.getElementsByTagName('recipe') : null;

    const slideshowNodes = images ? images.map((image, i) => {
        let imageClasses = image.recipeId === images[currentIndex].recipeId ? 'slideshow-image selected' : 'slideshow-image';

        console.log(images[currentIndex].recipeId);

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
                <button className="nav prev" onClick={() => goToPrev(images)}>&#10094;</button>
                <button className="nav next" onClick={() => goToNext(images)}>&#10095;</button>
            </ControlStyles>
        </SlideshowStyles>
    );
}




export default Slideshow;