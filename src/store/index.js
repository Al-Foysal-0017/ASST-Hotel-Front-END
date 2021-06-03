import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from './reducers/Authreducer';
import {PostReducer,FetchPosts,EveryRoom} from './reducers/PostReducer';

const rootReducers = combineReducers({
	AuthReducer,
	PostReducer,
	FetchPosts,
	EveryRoom,
});
const middlewares = [thunkMiddleware];
const Store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;
