import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Buttons.module.css';

const buttons = ( props ) => (
    <Aux>
        {/* left button test value in for unit test purposes */}
        <button onClick={props.clicked} className={classes.Buttons} value="button test">
            {props.children}
        </button>
    </Aux>
)

export default buttons;