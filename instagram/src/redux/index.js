import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import CombineReducer from './rootReducer';



const store = createStore(CombineReducer, applyMiddleware(ReduxThunk));

export default store;