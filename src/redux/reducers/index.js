import { combineReducers } from 'redux';
import filterRed from './filter';
import pizzasRed from './pizzas';
import cartRed from './cart';

const rootReducer = combineReducers({
    filterRed,
    pizzasRed,
    cartRed
})

export default rootReducer;
