import { combineReducers } from 'redux';
import counter from './counter';
import posts from '../module/posts';

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
