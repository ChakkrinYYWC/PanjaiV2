import { combineReducers } from 'redux';
import { postPanjai } from './postPanjai';
import { postFDT } from './postFDT';

export const reducers = combineReducers({
    postPanjai,
    postFDT
})
