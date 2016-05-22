// There shall only ever be one store according to the Redux design
import reducer, { initialState } from './reducers/combined';
import { createStore } from 'redux';

export default createStore(reducer, initialState)
