import {combineReducers} from 'redux';
import fetchData from './fetchData';
import list from './list';
import counter from './counter';

export default combineReducers({
	fetchData,
	list,
	counter
});
