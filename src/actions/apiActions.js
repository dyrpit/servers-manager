export const API_ACTIONS = {
	GET_SERVERS_PENDING: 'GET_SERVERS_PENDING',
	GET_SERVERS_SUCCESS: 'GET_SERVERS_SUCCESS',
	GET_SERVERS_ERROR: 'GET_SERVERS_ERROR',
	GET_SERVER: 'GET_SERVER',
	TURN_OFF_SERVER: 'TURN_OFF_SERVER',
	TURN_ON_SERVER: 'TURN_ON_SERVER',
	REBOOT_SERVER: 'REBOOT_SERVER',
};

export const getServersPending = () => ({ type: API_ACTIONS.GET_SERVERS_PENDING });
export const getServersSuccess = (servers) => ({
	type: API_ACTIONS.GET_SERVERS_SUCCESS,
	payload: servers,
});
export const getServersError = (e) => ({ type: API_ACTIONS.GET_SERVERS_ERROR, payload: e });
export const turnOffServer = (server) => ({
	type: API_ACTIONS.TURN_OFF_SERVER,
	payload: server,
});
export const turnOnServer = (server) => ({
	type: API_ACTIONS.TURN_ON_SERVER,
	payload: server,
});
export const rebootServer = (server) => ({
	type: API_ACTIONS.REBOOT_SERVER,
	payload: server,
});

export const getServer = (server) => ({ type: API_ACTIONS.GET_SERVER, payload: server });
