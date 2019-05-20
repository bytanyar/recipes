import React, { Component } from 'react';

import AlfredoImage from '../../images/alfredo-sauce.jpg';
import AmarettoImage from '../../images/amaretto.jpeg';
import ChickenImage from '../../images/amazing-chicken.jpg';
import TableTopImage from '../../images/tabletop.jpg';

import { ParallaxStyles } from './parallax.styled';

class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        const bgStyle = { backgroundImage: `url(${TableTopImage})`};
        const bgStyleDrink = { backgroundImage: `url(${AmarettoImage})`};
        return (
            <ParallaxStyles className="parallax">
                <img className="page-image" src={ChickenImage} alt="chicken"/>
                <div style={bgStyleDrink} className="parallax-image">
                    <h3>What&rsquo;s for Dinner?</h3>
                    <p>Gotta be something good!</p>
                </div>
                <img className="page-image" src={AlfredoImage} alt="sauce"/>
                <div style={bgStyle} className="parallax-image">
                </div>
            </ParallaxStyles>
        );
    };
}

export default Parallax;