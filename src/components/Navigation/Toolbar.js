import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo.js';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const toolbar =(props) =>(
    <header className={classes.Toolbar}>
            <div>MENU</div>
            <div><Logo/></div>
        <nav>
                <NavigationItems></NavigationItems>
        </nav>

    </header>


);

export default toolbar;