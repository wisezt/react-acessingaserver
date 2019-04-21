import React, {Component} from 'react';

import  classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/Burgeringredient.js';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients) // output ["salad", "bacon", "cheese", "meat"], be careful all the elements inside the array are all String!
            .map((igKey)=>{ return (
                [...Array(props.ingredients[igKey])] // props.ingredients[igKey] return the number that is the value of the igKey(salad, bacon...) in ingredients!
                //  the [...Array(props.ingredients[igKey])] return an array will X elements, where the X = number that we talked above
                .map(( _, i )=> // "_" is the element name which is not important, and i is the index, in here we just use it as the number that how many times we need to loop following statement.

                { return (<BurgerIngredient  key={igKey + i} type={igKey} /> // key is necessary for child list, type will return the specific Burgeringredient

                    );
                })) ;
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type= "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type= "bread-bottom"/>

        </div>

    );

};

export default burger;