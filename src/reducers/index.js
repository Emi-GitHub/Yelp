import { combineReducers } from 'redux';
import { term } from './Reducer';
import { businesses } from './Reducer';
import { openYelp } from './Reducer';
import { goHome } from './Reducer';

export default combineReducers ({
    term,
    businesses,
    openYelp,
    goHome
})