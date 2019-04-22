import React from 'react';
import Button from '../../../components/UI/Button/Button.js'


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {

        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>

    });


    return (
        <>
            <h3> Your Order</h3>
            <p>A delicious burger:</p>
            <ul>
                {ingredientSummary}
            </ul>

            <Button
                clicked={props.purchaseCanceled}
                btnType="Danger"
            >
                CANCEL
            </Button>
            <Button
                clicked={props.purchaseContinued}
                btnType="Success"
                >
                CONTINUE
            </Button>


        </>

    );


}

export default orderSummary;