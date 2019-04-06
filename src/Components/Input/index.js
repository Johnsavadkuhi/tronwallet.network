import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
import copyText from "../../Utils/Copy";

const useStyles = makeStyles(theme => ({

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
    marginTop: '5px'
}));


export function CustomizedInputBase(props) {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);


    return (
        <>
            <Paper className={classes.root} elevation={1}>
                <InputBase
                    name={props.name}
                    type={showPassword ? 'text' : 'password'}
                    className={classes.input}
                    value={props.mPassword}
                    placeholder={props.placeHolder}
                    onChange={props.onChange}
                    endAdornment={<InputAdornment position="end">
                        <IconButton style={{color: '#57777d'}}
                                    aria-label="Toggle password visibility"
                                    onClick={() => {
                                        setShowPassword(!showPassword)
                                    }}>
                            {showPassword ? <Visibility className={classes.iconSmall}/> :
                                <VisibilityOff className={classes.iconSmall}/>}
                        </IconButton>
                    </InputAdornment>}

                />

            </Paper>
        </>
    );
}


export function InputWithCopy(props) {

    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root} elevation={1}>
                <InputBase
                    id={props.id}
                    readOnly={true}
                    style={{fontSize: '12px'}}
                    type={'text'}
                    className={classes.input}
                    value={props.address}
                    endAdornment={<InputAdornment position="end">
                        <IconButton style={{color: '#57777d'}}
                                    aria-label="Toggle password visibility"
                                    onClick={()=>{copyText(props.id); console.log('hi')}}
                                    >
                            <CopyIcon className={classes.iconSmall}  />
                        </IconButton>
                    </InputAdornment>}

                />

            </Paper>
        </>
    );
}
