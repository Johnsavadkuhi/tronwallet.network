import {SET_LANGUAGE} from "../actions/actionTypes";

const initialState = {

    availableLanguages: {
        en: "English",
        fa:"فارسی",

    },

    activeLanguage:'en',
};

export function appReducer(state = initialState, action) {
    console.log("in app Reducer : " , action.language);

    switch (action.type) {

        case SET_LANGUAGE: {

            let language = action.language;

            if (typeof state.availableLanguages[action.language] === 'undefined') {
                language = 'en';
            }

            return {
                ...state,
                activeLanguage: language,
            };
        }


        default:
            return state;
    }

}
