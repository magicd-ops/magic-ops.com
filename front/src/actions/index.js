import actionTypes from '../actionTypes';
import PropTypes from 'prop-types';
import axios from 'axios';

const actionTest = (name) => {
    return async(dispatch, getState) => {
        let payload = name;
        dispatch({
            type: 'TEST',
            payload
        });
    }
}

export {
    actionTest
}