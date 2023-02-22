import { combineReducers } from 'redux';
import seasonReducer from './season';
import burgerReducer from './burger-menu';

const rootReducer = combineReducers({
    season: seasonReducer,
    burger: burgerReducer,
});

export default rootReducer;