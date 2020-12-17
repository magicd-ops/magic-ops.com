import { combineReducers } from 'redux';
import actionTypes from '../actionTypes';

const testReducer = (state='', action) => {
    switch(action.type){
        case 'TEST':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    test: testReducer,
});