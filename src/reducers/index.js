import { combineReducers } from 'redux';
import { term } from './Reducer';
import { businesses } from './Reducer';

export default combineReducers ({
    term,
    businesses,
})