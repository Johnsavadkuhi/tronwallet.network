import React from 'react'
import GridWrap from '../../Utils/Grid'
import PasswordForm from "./PasswordForm";
import Button from "@material-ui/core/Button";

const CreateComponent = props => {

  const  handlerClick = ()=>{


  };

    return (<>


        <GridWrap>


           <PasswordForm />


            <div style={{ textAlign: 'center' , marginTop:'7px'}}>

                <Button variant="contained" size="small" onClick={handlerClick}>
                    Next
                </Button>

            </div>
        </GridWrap>

    </>)


};




export default (CreateComponent);
