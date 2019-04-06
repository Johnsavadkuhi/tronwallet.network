import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider} from "./State/StateProvider";
import MainReducer from './State'

//const store = createStore(rootReducer)
const initialState = {

    availableLanguages: {
        en: "English",
        fa: "فارسی",
    },

    activeLanguage: 'en',

};

ReactDOM.render(<StateProvider initialState={initialState} reducer={MainReducer}>
    <App />
</StateProvider>, document.getElementById('root'));


serviceWorker.unregister();
