const initialState = {

    availableLanguages: {
        en: "English",
        fa: "فارسی",
    },

    activeLanguage: 'en',


};

export  function App(state=initialState , action) {

    console.log("app state : " , state);

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
