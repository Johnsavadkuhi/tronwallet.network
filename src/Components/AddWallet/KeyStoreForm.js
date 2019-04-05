import React, {useState} from 'react'
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import downloadFile from '../../Utils/Download/DownloadFile';
import Account from './TronAccount';
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
    fontSize: {fontSize: '12px'}
}));

const KeyStoreForm = (props) => {

    const classes = useStyles();
    const [{pass = {password: ''}}] = useStateValue();
    const [hex, setHex] = useState('');


    const handleClick = async () => {

        const account = new Account();
        setHex(account.getEncryptedPrivateKey(pass.password));
        await downloadFile(await account.address);

    };

    return (<>

        <div className={classes.header}>{tu("Download KeyStore ")}</div>


        <Divider variant="middle" light={true}/>


        <small className={classes.textMuted}> Download KeyStore File</small>
        <br/><br/>

        <div className={classes.center}>
            <Button variant="contained" size="small" className={classes.button} onClick={handleClick}>
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)}/>
                <small className={classes.textMuted}>Download KeyStore</small>
                <input id='keyStoreFile' type={'hidden'} value={hex}/>
            </Button>
            <br/><br/>
        </div>
        <div>
            <Divider style={{marginTop: '10px'}} color={'primary'} variant="middle" light={true}/>
            <li style={{fontSize: '12px', marginTop: '5px'}} className={classes.textMuted}> Keep Safe KeyStore File</li>
        </div>

    </>)

};


export default KeyStoreForm;