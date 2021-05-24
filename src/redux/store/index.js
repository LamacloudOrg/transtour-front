import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
);

export default store;