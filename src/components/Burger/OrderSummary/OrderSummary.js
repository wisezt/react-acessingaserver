import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button.js'


class orderSummary extends Component {
    componentWillUpdate(){
        console.log('[Orderummary] WillUpdate');
    }

     ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {

        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>

    });

render() {
    return (
        <>
            <h3> Your Order</h3>
            <p>A delicious burger:</p>
            <ul>
                {this.ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>

            <Button
                clicked={this.props.purchaseCanceled}
                btnType="Danger"
            >
                CANCEL
            </Button>
            <Button
                clicked={this.props.purchaseContinued}
                btnType="Success"
            >
                CONTINUE
            </Button>


        </>

    );
}

}

export default orderSummary;