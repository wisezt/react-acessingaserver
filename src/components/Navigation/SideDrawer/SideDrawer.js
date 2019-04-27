import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop.js';

const sideDrawer = (props) => {
    // ...
    let attachedClasses =[classes.SideDrawer, classes.Close];

    if (props.open){
        attachedClasses =[classes.SideDrawer,  classes.Open];
    }


    return (
        <>

            <Backdrop showed={props.open}  clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo/>
                <div></div>
                <nav>
                    <NavigationItems/>

                </nav>

            </div>
        </>

    );
};

export default sideDrawer;