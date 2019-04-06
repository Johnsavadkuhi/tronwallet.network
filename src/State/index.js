import AppReducer from "./Reducers/AppReducer";
import PasswordReducer from "./Reducers/PasswordReducer";
import KeyStoreReducer from "./Reducers/KeyStoreReducer" ;
import AccountReducer from "./Reducers/AccountReducer";

const MainReducer = ({app, pass, keyStore, account}, action) => {

    return {

        app     : AppReducer(app, action),
        pass    : PasswordReducer(pass, action),
        keyStore: KeyStoreReducer(keyStore, action),
        account : AccountReducer(account, action)
    }
};

export default MainReducer;
