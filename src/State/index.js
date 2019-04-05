import AppReducer from "./Reducers/AppReducer";
import PasswordReducer from "./Reducers/PasswordReducer";

 const MainReducer = ({app , password ,counter} , action )=>{

    return {

        app : AppReducer(app , action ),
        pass : PasswordReducer(password  , action),
    }
};

 export default MainReducer ;
