import { combineReducers } from 'redux'
import { createStore } from 'redux';
import cages from './reducers/cages';
import selectedChess from './reducers/chess';
let rootReducer =  combineReducers(
    {
        cages,
        selectedChess
    });

export default createStore(rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);