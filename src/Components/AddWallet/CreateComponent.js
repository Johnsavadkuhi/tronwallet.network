import React from 'react'
import GridWrap from '../../Utils/Grid'
import {withStyles} from "@material-ui/core";
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";
import CustomizedInputBase from '../Input'
import IconLabelButtons from '../Button'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'
import Button from "@material-ui/core/Button";
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

const CreateComponent = props => {
    const {classes} = props;
    return (<>

        <GridWrap>

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

            <CustomizedInputBase placeHolder={'Password'}/>

            <br/>
            <CustomizedInputBase placeHolder={'Repeate Password'}/>
            <br/>

            <div>
                <span style={{fontSize:'12px'}} className={classes.textMuted}><CheckIcon className={classes.iconSmall}/> Enter at least 8 characters</span>
                <span>  </span>

            </div>
            <div className={classes.center}>

                <Button variant="contained" size="small" >
                    Next
                    {/*<SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />*/}

                </Button>

            </div>


        </GridWrap>

    </>)


};

export default withStyles(styles)(CreateComponent);
