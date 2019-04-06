import React from 'react'
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from '@material-ui/core/styles';
import {useStateValue} from "../../State/StateProvider";
import {InputWithCopy} from "../Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
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
    right: {
        textAlign: 'right'

    },
    textMuted: {
        color: '#6c757d !important'

    },
    fontSize : {fontSize:'12px'},

}));

const AccountInfoForm = (props) => {

    const classes = useStyles();
    const [states] = useStateValue() ;



    return (<>

        <div className={classes.header}>{tu("Account Info ")}</div>


        <Divider variant="middle" light={true}/>

        <small  className={classes.textMuted}> Address and PrivateKey </small> <br/><br/>

        <div>

            <small className={classes.textMuted} >Address :</small>
            <InputWithCopy id='myaddress' address={states.account.address} /><br/>
            <small className={classes.textMuted} >PrivateKey :</small>
            <InputWithCopy id='myprivateKey' address={states.account.privateKey} /><br/>

            <Button size={'small'} color="primary" className={classes.button}>
                Account
            </Button>

        </div>
        <div>
            <Divider style={{ marginTop:'10px'}} color={'primary'} variant="middle" light={true}/>
            <li style={{fontSize:'12px' , marginTop:'5px'}} className={classes.textMuted}> Keep Safe Your Account PrivateKey </li>
        </div>

    </>)

};


export default AccountInfoForm;