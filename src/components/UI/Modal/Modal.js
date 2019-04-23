import React, {Component} from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop.js';

class Modal extends Component {

    shouldComponentUpdate(nextPros, nextState) {
        return nextPros.show !== this.props.show;

    }

    componentWillUpdate(){
        console.log('[Modal] WillUpdate');
    }

    render() {
        return(
            <>
                <Backdrop showed={this.props.show} clicked={this.props.modalClosed}/>

                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                >
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;