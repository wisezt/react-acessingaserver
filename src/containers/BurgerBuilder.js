import React, {Component} from 'react';
import Burger from '../components/Burger/Burger.js';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal.js';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary.js'
import axios from '../axios-orders.js';
import Spinner from '../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.0
}

class BugerBuider extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:false,
        Loading: false
    }

updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey=>{
              return ingredients[igKey]
          }
        ).reduce((sum, el)=>{return sum+el},0);
        this.setState({purchasable: sum > 0 })
}



    addIngredientHander = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount =oldCount + 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }


    removeIngredientHander = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount =oldCount - 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice- priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHander = () =>{
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () =>{
        //alert('continue!!!');
        this.setState({Loading: true});
        const order ={
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'Max Schwarzuller',
                address:{
                    street: 'Teststreet 1',
                    zipCode: '413254'
                }
            },
            email: 'test@test'
        }
        axios.post('/orders.json', order).then(response =>{
            this.setState({Loading: false, purchasing :false})
        }) // important!
            .catch(error => {console.log(error)
            this.setState({Loading: false,  purchasing :false})});
        ;

    }

    render() {
        const disabledInfo ={
            ...this.state.ingredients
        };

        let SummeryOrder = <OrderSummary
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCanceled={this.purchaseCancelHandler}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
        />;

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0 // The type of disabledInfo changed from an number (integer) to boolean!!!
        }

        if (this.state.Loading){
            SummeryOrder = <Spinner/>;

        }




        return (
            <>
            <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}
            >
                {SummeryOrder}
            </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHander}
                    ingredientRemoved={this.removeIngredientHander}
                    disabled={disabledInfo}
                    price={this.state.totalPrice.toFixed(2)}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHander}
                />

            </>
        );

    }

}

export default BugerBuider;