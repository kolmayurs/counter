export default function fetchData(state={
fetching: false,
fetched: false,
data:[],
error:null,
},action){
	switch(action.type){
		case 'FETCH_USER_START' :{
			return {...state, fetching:true}
		}
		case 'RECEIVE_USERS' :{
			return {...state, fetching: false, fetched: true, data: action.payload}
		}
		case 'FETCH_USERS_ERROR' :{
			return{...state, fetching: false, fetched: false, error: action.payload}
		}
		default: {
			return state;
		}
	}
}