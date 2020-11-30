import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Buttons.module.css';

const buttons = ( props ) => (
    <Aux>
        <button onClick={props.clicked} className={classes.Buttons} value="button test">
            {props.children}
        </button>
    </Aux>
)

export default buttons;