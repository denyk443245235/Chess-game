import { combineReducers } from 'redux'
import { createStore } from 'redux';
import cages from './reducers/cages';
let rootReducer =  combineReducers(
    {
        cages
    });

export default createStore(rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);