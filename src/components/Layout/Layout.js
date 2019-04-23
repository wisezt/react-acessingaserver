import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state ={
        showSideDrawer: true
    }

    sideDrawerCosedHandler =()=>{
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <>

                <Toolbar/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed = {this.sideDrawerCosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>


        );
    }
}

export default Layout;