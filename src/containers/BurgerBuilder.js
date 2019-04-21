import React, {Component} from 'react';
import Burger from '../components/Burger/Burger.js';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

class BugerBuider extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 5,
            cheese: 0,
            meat: 0
        }
    }



    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </>
        );

    }

}

export default BugerBuider;