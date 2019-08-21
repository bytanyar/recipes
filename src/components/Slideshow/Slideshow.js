import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';


import images from '../../data/images.json';
import { SlideshowStyles } from './slideshow.styled';
import { ControlStyles } from './control.styled';



class Slideshow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        };
        // this.gatherData = this.gatherData.bind(this);
    }

    goToNext(images) {
        const oldCurrentIndex = this.state.currentIndex;
        this.setState({
            currentIndex: (oldCurrentIndex + 1) % images.length
        });
    }
    goToPrev(images) {
        const oldCurrentIndex = this.state.currentIndex;
        this.setState({
            currentIndex: (oldCurrentIndex - 1 % images.length) % images.length
        });
    }

    

    render() {
        const slideshowNodes = images ? images.map((image, i) => {
        let imageClasses = image.recipeId === images[this.state.currentIndex].recipeId ? 'slideshow-image selected' : 'slideshow-image';

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
                    <button className="nav prev" onClick={() => this.goToPrev(images)}>&#10094;</button>
                    <button className="nav next" onClick={() => this.goToNext(images)}>&#10095;</button>
                </ControlStyles>
            </SlideshowStyles>
        );
    }
}




export default Slideshow;