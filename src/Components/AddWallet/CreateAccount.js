import React from 'react'
import GridWrap from '../../Utils/Grid'
import PasswordForm from "./PasswordForm";
import {useStateValue} from "../../State/StateProvider";
import KeyStoreForm from "./KeyStoreForm";
import logo from "../../Images/mainLogo.png";
import {makeStyles} from "@material-ui/core";

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

    const [{pass={
    password :'' ,
    repeatPassword: ''
}} ] =  useStateValue() ;

    const passwordIsValid  = (!(pass.password===pass.repeatPassword && pass.password.length>=8));


    return (<>

        <GridWrap>

            <div  className={classes.center}>
                <img  src={logo} alt={'tronLogo'}  width={'150px'}/>

            </div>
            {passwordIsValid ?  <PasswordForm /> : <>  <KeyStoreForm/></>}

            {/*<div style={{ textAlign: 'right' , marginTop:'7px'}}>*/}

                {/*<Button disabled={ passwordIsValid} variant="contained" size="small" onClick={handlerClick}>*/}
                    {/*Next*/}
                {/*</Button>*/}

            {/*</div>*/}


        </GridWrap>

    </>)


};




export default (CreateAccount);
