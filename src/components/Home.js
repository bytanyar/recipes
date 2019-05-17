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
        window.addEventListener('scroll', this._drinkOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._pastaOnScroll);
        window.removeEventListener('scroll', this._drinkOnScroll);
    }

    _pastaOnScroll(){
        const sauce = document.getElementById('sauce');

        const yPos = 0 - window.pageYOffset/1.2;
        const windowWidth = window.innerWidth;
        sauce.style.top = (windowWidth * (180 / 320)) - 50 + yPos + "px";
    }
    _drinkOnScroll(){
        const drink = document.getElementById('drink');

        const yPos = 0 - window.pageYOffset/2;
        const windowWidth = window.innerWidth;
        drink.style.top = (windowWidth * (513 / 342)) + 300 + yPos + "px";
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
                <div id="tabletop" className="tabletop" style={bgStyle} />
                <div id="drink" className="drink">
                    <h3>It&rsquo;s gotta be something good!</h3>
                    <img src={AmarettoImage} alt="drink" />
                </div>
            </HomeStyles>
        );
    };
}

export default Home;