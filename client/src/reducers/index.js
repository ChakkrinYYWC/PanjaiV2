import { combineReducers } from 'redux';
import { postPanjai } from './postPanjai';
import { postFDT } from './postFDT';
import { report } from './report';

export const reducers = combineReducers({
    postPanjai,
    postFDT,
    report
})
