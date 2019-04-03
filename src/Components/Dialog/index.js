
import React , {useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const PasswordNote = () =>{

    const [open , setOpen] = useState(true);

    return (<>

        <Dialog  open={open} onClose={()=>{setOpen(!open)}} >
            <DialogTitle id="alert-dialog-title">{"Why Password ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText >
                    <ul style={{color:'#d13a2a' }}>
                   <li > We use the password to encrypt the private key in keystore file.</li>
                   <li> Dont lose your password .</li>
                        <li> TronWallet.network can not recover your password. </li>
                    </ul>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{setOpen(false)}} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>



    </>)


};

export default PasswordNote ;