import axios from 'axios';
export function fetchData(){
	return function(dispatch){
		dispatch({type:'FETCH_USER_START'})
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=80a5e68d306aa343acd190456d8d687f&language=en-US&page=1')
		.then(res => {
			dispatch({type: 'RECEIVE_USERS', payload: res.data.results})
		})
		.catch(err =>{
			dispatch({type: 'FETCH_USERS_ERROR', payload: err})
		})
	}
}


export function addToList() {
	return function(dispatch){
    dispatch({type: 'ADD_TO_LIST'})
  }
}

export function removeFromList(index) {
	return function(dispatch){
    dispatch({type: 'REMOVE_FROM_LIST', index})
  }
}

export function addInList(index) {
	return function(dispatch){
    dispatch({type: 'ADD_IN_LIST', index})
  }
}

export function subInList(index) {
	return function(dispatch){
    dispatch({type: 'SUB_IN_LIST', index})
  }
}

export function increment() {
	return function(dispatch){
    dispatch({type: 'INCREMENT_COUNTER'})
  }
}

export function decrement() {
	return function(dispatch){
    dispatch({type: 'DECREMENT_COUNTER'})
  }
}
