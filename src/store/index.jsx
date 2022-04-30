import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from './modules/user/reducer'
import thunk from 'redux-thunk'
const reducers = combineReducers({user: messageReducer})

const store = createStore(reducers, applyMiddleware(thunk));

export default store