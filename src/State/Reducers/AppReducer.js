const initialState = {

    availableLanguages: {
        en: "English",
        fa: "فارسی",
    },

    activeLanguage: 'en',

};

export default function AppReducer(state=initialState  , action) {

    switch (action.type) {

        case 'setLanguage': {

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
