import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import React from "react";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

export default function RTL(props) {
    return (
        <JssProvider jss={jss} generateClassName={generateClassName}>
            {props.children}
        </JssProvider>
    );
}