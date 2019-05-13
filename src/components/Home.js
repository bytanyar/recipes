import React, { Component } from 'react';

import AlfredoImage from '../images/alfredo-sauce.jpg';
import AmarettoImage from '../images/amaretto.jpeg';
import ChickenImage from '../images/amazing-chicken.jpg';

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
        window.addEventListener('scroll', this._onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll(){
        const sauce = document.getElementById('sauce');

        const yPos = 0 - window.pageYOffset/1.2;
        sauce.style.top = 200 + yPos + "px";
    }

    render() {
        return (
            <HomeStyles className="home">
                <div id="chicken" className="chicken">
                    <img src={ChickenImage} alt="chicken" />
                </div>
                <div id="sauce" className="sauce">
                    <div>
                        <h3>What do you know?</h3>
                    </div>
                    <img src={AlfredoImage} alt="sauce" />
                </div>
                <div id="drink" className="drink">
                    <img src={AmarettoImage} alt="drink" />
                </div>
            </HomeStyles>
        );
    };
}

export default Home;