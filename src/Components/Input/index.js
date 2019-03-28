import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import WeakIcon from '@material-ui/icons/HdrWeak';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";

const styles = {
    root: {
        padding: '5px 4px',
        display: 'flex',
        alignItems: 'center',

    },
    input: {
        marginLeft: 8,
        flex: 1,
        color: '#6c757d !important'

    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },

    iconSmall: {
        fontSize: 15,
    },

};

function CustomizedInputBase(props) {
    const { classes } = props;
    const [password , setPassword] = useState() ;
    const [showPassword, setShowPassword] = useState(false);

    return (


        <Paper className={classes.root} elevation={1}>
            <InputBase
                        type={showPassword ? 'text' : 'password'}
                        className={classes.input }
                        value={password}
                        placeholder={props.placeHolder}
                        onChange={() =>{setPassword(password)}}
                        endAdornment={<InputAdornment position="end">
                            <IconButton style={{color: '#57777d' }}
                                aria-label="Toggle password visibility"
                                onClick={()=>{setShowPassword(!showPassword)}}>
                                {showPassword ? <Visibility className={classes.iconSmall} /> : <VisibilityOff className={classes.iconSmall} />}
                            </IconButton>
                        </InputAdornment>}

            />

        </Paper>




    );
}

CustomizedInputBase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
