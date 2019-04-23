import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.css'

const logo = (props) =>(
  <div>
        <img src={burgerLogo} className={classes.Logo}>

        </img>

  </div>

);

export default logo;