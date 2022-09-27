import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// import createMiddleware from 'redux-saga'
// import rootSaga from './rootSaga'
// const sagaMiddleware = createMiddleware()
// sagaMiddleware.run(rootSaga)

export const store = createStore(rootReducer, applyMiddleware(thunk));
