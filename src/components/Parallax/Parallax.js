import React, { Component } from 'react';

import AlfredoImage from '../../images/alfredo-sauce.jpg';
import AmarettoImage from '../../images/recipes/Amaretto.png';
import ChickenImage from '../../images/recipes/Amazing_Chicken.jpg';
import FinalImage from '../../images/recipes/Bourbon_Chicken.jpg';
import Logo from '../../images/logo.png';

import { ParallaxStyles } from './parallax.styled';

class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const bgStyle = { backgroundImage: `url(${FinalImage})` };
        const bgStyleDrink = { backgroundImage: `url(${AmarettoImage})` };
        return (
            <ParallaxStyles className="parallax">
                <img className="page-image" src={ChickenImage} alt="chicken" />
                <div style={bgStyleDrink} className="parallax-image">
                    <div className="hover-text">
                        <img src={Logo} alt="fake logo" />
                        <h3>What&rsquo;s for Dinner?</h3>
                    </div>
                    <p>Gotta be something good!</p>
                </div>
                <img className="page-image" src={AlfredoImage} alt="sauce" />
                <p className="food">Must be the food!</p>
                <div style={bgStyle} className="parallax-image">
                    <div className="hover-text">
                        <h3>Still hungry?</h3>
                    </div>
                </div>
            </ParallaxStyles>
        );
    };
}

export default Parallax;