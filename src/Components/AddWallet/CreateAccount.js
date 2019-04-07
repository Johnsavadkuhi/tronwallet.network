import React, {lazy, Suspense} from 'react'
import GridWrap from '../../Utils/Grid'
import {useStateValue} from "../../State/StateProvider";
import logo from "../../Images/mainLogo.png";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
//import AccountInfoForm from "./AccountInfoForm";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from "@material-ui/core/MobileStepper";
import WalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

const PasswordForm = lazy(() => import ("./PasswordForm"));
const KeyStoreForm = lazy(() => import ("./KeyStoreForm"));
const AccountInfoForm = lazy (()=>import ("./AccountInfoForm"));

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
    const theme = useTheme();
    const maxSteps = 3;
    const [activeStep, setActiveStep] = React.useState(0);

    const [{pass = {password: '', repeatPassword: ''}}] = useStateValue();

    const [{keyStore ={downloaded:false}}] = useStateValue() ;

    const passwordIsValid = (!(pass.password === pass.repeatPassword && pass.password.length >= 8));

    const handleDisabled = ()=>{

        switch (activeStep) {

            case 0 :

                return !(activeStep === maxSteps - 1) && (passwordIsValid);
            case 1 :

                return !(activeStep === maxSteps - 1) && (!keyStore.downloaded) ;

            default :
                return (activeStep === maxSteps - 1) ;


        }
    };

    const handleNext = ()=>{
        setActiveStep(prevActiveStep => prevActiveStep + 1);


    };
    const handleBack = ()=>{
        setActiveStep(prevActiveStep => prevActiveStep - 1);

    } ;
    return (<>

        <GridWrap>

            {console.log("direction : " , theme.direction )}
            <div>

            <div className={classes.center}>

                <img src={logo} alt={'tronLogo'} width={'150px'}/>

            </div>

            {activeStep===0 ? <Suspense feedback={<div>loading....</div>}> <PasswordForm/> </Suspense> :

            activeStep === 1 ? <Suspense feedback={<div>loading....</div>}> <KeyStoreForm/> </Suspense> :
                <Suspense feedback={<div>loading....</div>}><AccountInfoForm/></Suspense>

            }
            {/*{*/}
                {/*keyStore.downloaded ?<Suspense feedback={<div>loading....</div>}><AccountInfoForm/></Suspense> :*/}
                {/*passwordIsValid ? <Suspense feedback={<div>loading....</div>}> <PasswordForm/> </Suspense> :*/}
                    {/*<Suspense feedback={<div>loading....</div>}> <KeyStoreForm/> </Suspense>*/}
            {/*}*/}

            <MobileStepper

                className={classes.textMuted}
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    activeStep <=1 ?
                    <Button size="small" onClick={handleNext} disabled={handleDisabled() }>

                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}

                    </Button> :

                            <a href={'/Wallets'}><WalletIcon />  </a>
                }
                backButton={

                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>

                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

                        Back

                    </Button>
                }
            />
            </div>
        </GridWrap>

    </>)


};


export default (CreateAccount);
