import { combineReducers } from 'redux';
import seasonReducer from './season';
import burgerReducer from './burger-menu';
import footerReducer from './footer';

const rootReducer = combineReducers({
    season: seasonReducer,
    burger: burgerReducer,
    footer: footerReducer
});

export default rootReducer;