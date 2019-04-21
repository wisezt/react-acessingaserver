import React, {Component} from 'react';
import Burger from '../components/Burger/Burger.js';

class BugerBuider extends Component {
    render() {
        return (
            <>
                <Burger/>
                <div>Build Controls</div>
            </>
        );

    }

}

export default BugerBuider;