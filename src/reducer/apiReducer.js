import { API_ACTIONS } from '../actions/apiActions';

export const apiReducer = (state, action) => {
	switch (action.type) {
		case API_ACTIONS.GET_SERVERS_PENDING:
			return { ...state, pending: true };
		case API_ACTIONS.GET_SERVERS_SUCCESS:
			return { ...state, pending: false, servers: action.payload };
		case API_ACTIONS.GET_SERVERS_ERROR:
			return { ...state, pending: false, error: action.payload };
		case API_ACTIONS.GET_SERVER:
			return {
				...state,
				servers: state.servers.map((server) =>
					server.id === action.payload.id ? action.payload : server
				),
			};
		case API_ACTIONS.TURN_OFF_SERVER:
			return {
				...state,
				servers: state.servers.map((server) =>
					server.id === action.payload.id ? action.payload : server
				),
			};

		case API_ACTIONS.TURN_ON_SERVER:
			return {
				...state,
				servers: state.servers.map((server) =>
					server.id === action.payload.id ? action.payload : server
				),
			};
		case API_ACTIONS.REBOOT_SERVER:
			return {
				...state,
				servers: state.servers.map((server) =>
					server.id === action.payload.id ? action.payload : server
				),
			};
		default:
			return state;
	}
};
