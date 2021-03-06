import React, {useState} from 'react'
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";
import {CustomizedInputBase} from '../Input'
import {useStateValue} from "../../State/StateProvider";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    header: {
        textAlign: 'center',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginTop: '0.625em',
        paddingBottom: '1.125em',
        fontFamily: 'monospace'
    },
    center: {
        textAlign: 'center'

    },
    textMuted: {
        color: '#6c757d !important'

    },
    iconSmall: {
        fontSize: 15,
    },
}));


const PasswordForm = (props) => {

    const classes = useStyles();

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [pass, dispatch] = useStateValue();
    console.clear(pass);

    const handleChangePassword = async ev => {

        setPassword(ev.target.value);

        await dispatch({'type': 'password', 'newPassword': ev.target.value, 'newRepeatPassword': repeatPassword});
    };

    const handleChangeRepeatPassword = async ev => {

        setRepeatPassword(ev.target.value);
        await dispatch({type: 'password', newPassword: password, newRepeatPassword: ev.target.value});
    };

    return (<>


        <div className={classes.header}>{tu("CreateNewAccount")}</div>


        <Divider variant="middle" light={true}/>


        <small className={classes.textMuted}> Enter password to encrypt the private key</small>
        <br/><br/>


        <CustomizedInputBase name='password' mPassword={password} onChange={handleChangePassword}
                             placeHolder={'password'}/><br/>


        <CustomizedInputBase mPassword={repeatPassword} onChange={handleChangeRepeatPassword}
                             placeHolder={'Repeat Password'}/> <br/>


        <div>

                <span style={{fontSize: '12px'}} className={classes.textMuted}>
                    {password.length >= 8 ? <li style={{color: '#31a62d'}}>
                        Ok Password
                    </li> : <li>
                        {tu('e8characters')}
                    </li>}

                </span>


        </div>


    </>)

};


export default PasswordForm;