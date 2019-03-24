import React from 'react'
import GridWrap from '../../Utils/Grid'
import {withStyles} from "@material-ui/core";
import {tu} from "../../Utils/i18n";
import Divider from "@material-ui/core/Divider";

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

    }
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
            <Divider variant="middle" light={true} />
            <div>

               <p className={classes.textMuted}> Enter password to encrypt the private key</p>


            </div>


        </GridWrap>

    </>)


};

export default withStyles(styles)(CreateComponent);
