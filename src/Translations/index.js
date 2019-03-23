import * as messages_en from "./en.js";
import * as messages_fa from "./fa.js";


import {addLocaleData} from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import faLocaleData from 'react-intl/locale-data/fa';


addLocaleData([ ...enLocaleData , ...faLocaleData]);

export const languages = {

    'en':messages_en.messages,
    'fa': messages_fa.messages,

};