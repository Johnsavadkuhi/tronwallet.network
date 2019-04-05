import {App} from "./Reducers/App";
import {Password} from "./Reducers/Password";
import {Counter }from "./Reducers/Counter";

 const MainReducer = ({app , password ,counter} , action )=>{

    return {

        app : App(app , action ),
        pass : Password(password  , action),
        counter : Counter(counter , action )
    }
};

 export default MainReducer ;
