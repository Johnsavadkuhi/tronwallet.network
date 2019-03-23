import {SET_LANGUAGE} from './actionTypes' ;

export const setLanguage = (language = 'en') => ({
    type: SET_LANGUAGE,
    language,
});