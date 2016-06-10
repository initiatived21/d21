// There shall only ever be one store according to the Redux design
import reducer, { initialState } from './reducers/combined';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middlewares/loggerMiddleware';

export default createStore(
  reducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
 )
)
