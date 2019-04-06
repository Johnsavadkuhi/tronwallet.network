import React from 'react'
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from '@material-ui/core/styles';
import {useStateValue} from "../../State/StateProvider";

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
    textMuted: {
        color: '#6c757d !important'

    },
    fontSize : {fontSize:'12px'}
}));



const AccountInfoForm = (props) => {

    const classes = useStyles();
    const [{pass}] = useStateValue() ;
    console.log("Account info form : " , pass);

    return (<>

        <div className={classes.header}>{tu("Account Info ")}</div>


        <Divider variant="middle" light={true}/>


        <small  className={classes.textMuted}> Address and PrivateKey </small> <br/><br/>

        <div className={classes.center}>

        </div>
        <div>
            <Divider style={{ marginTop:'10px'}} color={'primary'} variant="middle" light={true}/>
            <li style={{fontSize:'12px' , marginTop:'5px'}} className={classes.textMuted}> Keep Safe Your Wallet PrivateKey </li>
        </div>

    </>)

};


export default AccountInfoForm;