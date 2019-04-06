
const initialState ={
    password :'' ,
    repeatPassword: ''
};

export default  function PasswordReducer (state=initialState , action ) {

    switch (action.type) {

        case 'password':


            return  { password:action.newPassword  , repeatPassword: action.newRepeatPassword } ;

        default:
            return state;
    }
}