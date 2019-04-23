import React, {Component} from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class toolbar extends Component {


    render() {
        return (
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={this.props.drawerToggleClicked}/>


                <div><Logo height='50px'/></div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems></NavigationItems>
                </nav>

            </header>


        );

    }
}

export default toolbar;