import React, { Component } from 'react';

import AlfredoImage from '../images/alfredo-sauce.jpg';
import AmarettoImage from '../images/amaretto.jpeg';
import ChickenImage from '../images/amazing-chicken.jpg';
import TableTopImage from '../images/tabletop.jpg';

import { HomeStyles } from './home.styled';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSauce: false,
            showDrink: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this._pastaOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._pastaOnScroll);
    }

    _pastaOnScroll(){
        const sauce = document.getElementById('sauce');

        const yPos = 0 - window.pageYOffset/1.2;
        sauce.style.top = 200 + yPos + "px";
    }
    _drinkOnScroll(){
        const drink = document.getElementById('drink');

        const yPos = 0 - window.pageYOffset/5;
        drink.style.top = 1250 + yPos + "px";
    }

    render() {
        const bgStyle = { backgroundImage: `url(${TableTopImage})`};
        return (
            <HomeStyles className="home">
                <div id="chicken" className="chicken">
                    <img src={ChickenImage} alt="chicken" />
                </div>
                <div id="sauce" className="sauce">
                    <div>
                        <h2>What&rsquo;s for dinner?</h2>
                    </div>
                    <img src={AlfredoImage} alt="sauce" />
                </div>
                <div id="tabletop" className="tabletop" style={bgStyle}>
                    <h3>It&rsquo;s gotta be something good!</h3>
                </div>
                <div id="drink" className="drink">
                    <img src={AmarettoImage} alt="drink" />
                </div>
            </HomeStyles>
        );
    };
}

export default Home;