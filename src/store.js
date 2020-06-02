import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {increment} from './actions'

import rootReducer from "./reducers";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));



export default store;