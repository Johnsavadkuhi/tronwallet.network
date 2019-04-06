
const initialState ={
    password :'' ,
    repeatPassword: ''
};

export default  function PasswordReducer (state=initialState , action ) {


    console.log("satat in Password Reducer : " , state);

    switch (action.type) {

        case 'password':


            return  { password:action.newPassword  , repeatPassword: action.newRepeatPassword } ;

        default:
            return state;
    }
}