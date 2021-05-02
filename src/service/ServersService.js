import request from './request';

const getAllServers = () => request.get('/servers');

const getServer = (id) => request.get(`/servers/${id}`);

const turnServerOn = (id) => request.patch(`/servers/${id}/on`);

const turnServerOff = (id) => request.patch(`/servers/${id}/off`);

const rebootServer = (id) => request.patch(`/servers/${id}/reboot`);

const ServersService = {
	getAllServers,
	getServer,
	turnServerOn,
	turnServerOff,
	rebootServer,
};

export default ServersService;
