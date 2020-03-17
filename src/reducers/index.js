import { combineReducers } from 'redux';
import { term } from './Reducer';
import { businesses } from './Reducer';
import { openYelp } from './Reducer';
import { goHome } from './Reducer';
import { lat } from './Reducer';
import { lng } from './Reducer';
import { header } from './Reducer';
import { currentPage } from './Reducer';
import { postPerPage } from './Reducer';
import { termNear } from './Reducer';
import { counter } from './Reducer';
import { notFound } from './Reducer';
import { loader } from './Reducer';
import { businessesLength } from './Reducer';

export default combineReducers ({
    term,
    businesses,
    openYelp,
    goHome,
    lat,
    lng,
    header,
    currentPage,
    postPerPage,
    termNear,
    counter,
    notFound,
    loader,
    businessesLength
})