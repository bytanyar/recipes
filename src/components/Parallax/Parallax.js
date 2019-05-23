import React, { Component } from 'react';

import AlfredoImage from '../../images/alfredo-sauce.jpg';
import AmarettoImage from '../../images/amaretto.jpeg';
import ChickenImage from '../../images/amazing-chicken.png';
import CornucopiaImage from '../../images/cornucopia.jpg';
import LoremIpsumLogo from '../../images/lorem-ipsum-logo.png';

import { ParallaxStyles } from './parallax.styled';

class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const bgStyle = { backgroundImage: `url(${CornucopiaImage})` };
        const bgStyleDrink = { backgroundImage: `url(${AmarettoImage})` };
        return (
            <ParallaxStyles className="parallax">
                <img className="page-image" src={ChickenImage} alt="chicken" />
                <div style={bgStyleDrink} className="parallax-image">
                    <div className="hover-text">
                        <img src={LoremIpsumLogo} alt="fake logo" />
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