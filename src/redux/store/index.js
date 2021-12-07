import allReducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const componseEnhancer = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['auth', 'cart', 'products'],
};
const pReducer = persistReducer(persistConfig, allReducers);
const store = createStore(pReducer, componseEnhancer(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { persistor, store };
