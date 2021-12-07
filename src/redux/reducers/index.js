import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

const allReducers = combineReducers({ products: productsReducer, auth: authReducer, cart: cartReducer });

export default allReducers;
