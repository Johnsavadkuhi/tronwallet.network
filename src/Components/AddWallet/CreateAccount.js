import React, {lazy, Suspense} from 'react'
import GridWrap from '../../Utils/Grid'
//import PasswordForm from "./PasswordForm";
//import KeyStoreForm from "./KeyStoreForm";

import {useStateValue} from "../../State/StateProvider";
import logo from "../../Images/mainLogo.png";
import {makeStyles} from "@material-ui/core";

const PasswordForm = lazy(() => import ("./PasswordForm"));
const KeyStoreForm = lazy(() => import ("./KeyStoreForm"));
const useStyles = makeStyles(theme => ({

    center: {
        textAlign: 'center'
    },
    textMuted: {
        color: '#6c757d !important'

    },

}));

const CreateAccount = props => {

    const classes = useStyles();

    const [{
        pass = {
            password: '',
            repeatPassword: ''
        }
    }] = useStateValue();

    const passwordIsValid = (!(pass.password === pass.repeatPassword && pass.password.length >= 8));


    return (<>

        <GridWrap>

            <div className={classes.center}>
                <img src={logo} alt={'tronLogo'} width={'150px'}/>

            </div>


            {
                passwordIsValid ? <Suspense feedback={<div>loading....</div>}> <PasswordForm/> </Suspense> :
                    <Suspense feedback={<div>loading....</div>}> <KeyStoreForm/> </Suspense>
            }


        </GridWrap>

    </>)


};


export default (CreateAccount);
