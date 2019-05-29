// importing axios to make our requests. remember, axios is promise based
import axios from 'axios'
// setting up a little initial state to use in our reducer below
const initialState = {
	loading: false,
	user: {}
}

// action types
const GET_USER = 'GET_USER'

// action creators
export function getData() {
	// making our request to a random user api
	const user = axios.get('https://randomuser.me/api/').then((res) => res.data.results[0])
	// once we have received that random user, fire off an action with a type we created above and a payload of the random user. this will fire off our reducer function below
	return {
		type: GET_USER,
		payload: user
	}
}

// our userReducer takes in two params, state and action. we will almost always set our default value for state as our initial state from above.
// the action is the literal action that is fired off by the getData function above
function userReducer(state = initialState, action) {
	// using a switch case which is like a more efficient if/else
	switch (action.type) {
		// we append '+_PENDING as our request for a random user is first fired.
		// remember that promises have three possible states of execution: pending, fullfilled/resolves and rejected.
		case GET_USER + '_PENDING':
			return { ...state, loading: true }
		// if everyting comes back fine, we will then run into this case and set our loading to false
		case GET_USER + '_FULFILLED':
			return { loading: false, user: action.payload }
		default:
			return state
	}
}

export default userReducer
