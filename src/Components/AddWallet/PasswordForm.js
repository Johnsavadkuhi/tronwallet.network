import React  from 'react'
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";
import CustomizedInputBase from '../Input'
import CheckIcon from '@material-ui/icons/Check'
import {withStyles} from "@material-ui/core";

const styles = theme => ({
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
});


 const PasswordForm = (props) => {

    const {classes} = props;
    return ( <>
        <div className={classes.header}>{tu("CreateNewAccount")}</div>

        <div className={classes.center}>
            <small>
                <span className={classes.textMuted}>{tu('ChecktheAddress')}  </span>
                <span style={{color: '#1ad164'}}>https://</span>
                <span style={{color: '#d12114'}}>tronwallet.network</span>
            </small>
        </div>
        <br/>
        <Divider variant="middle" light={true}/>


        <p className={classes.textMuted}>* Enter password to encrypt the private key</p>

        <CustomizedInputBase placeHolder={'password'}/>

        <br/>
        <CustomizedInputBase placeHolder={'Repeat Password'}/>
        <br/>

        <div>
                <span style={{fontSize: '12px'}} className={classes.textMuted}>
                    <CheckIcon className={classes.iconSmall}/>
                    {tu('e8characters')}
                </span>
            <span>   </span>

        </div>

    </>)

};


export default withStyles(styles)(PasswordForm);