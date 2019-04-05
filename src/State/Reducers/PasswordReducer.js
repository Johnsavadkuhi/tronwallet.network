
const initialState ={
    password :'' ,
    repeatPassword: ''
};

export default  function PasswordReducer (state=initialState , action ) {

    console.log("State : " , state) ;
    switch (action.type) {

        case 'password':

            return  {...state , password:action.newPassword  , repeatPassword: action.newRepeatPassword } ;

        default:
            return state;
    }
}