import React from 'react';
import classes from './Button.css';

const button = (props) =>(
    <button
        classesName={[classes.Button, classes[props.btnType].join(' ')]}
        onClick={props.clicked}>{porps.children}</button>
);

export default button;