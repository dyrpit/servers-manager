import React, { useContext, useEffect, useState } from 'react';

import ServersService from '../../service/ServersService';
import { getServersError, getServersPending, getServersSuccess } from '../../actions/apiActions';
import { ApiContext } from '../../context/Store';

import Container from '../../components/Container/Container';
import ServersCountDisplay from '../../components/ServersCountDisplay/ServersCountDisplay';
import SearchInput from '../../components/SearchInput/SerachInput';
import Table from '../../components/Table/Table';

const ServersPage = () => {
	const { state, dispatch } = useContext(ApiContext);

	const [searchValue, setSearchValue] = useState('');
	const [filteredServers, setFilteredServers] = useState(state.servers);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(getServersPending());
			try {
				const res = await ServersService.getAllServers();
				dispatch(getServersSuccess(res.data));
				setFilteredServers(res.data);
			} catch (e) {
				dispatch(getServersError(e.message));
			}
		};

		fetchData();
	}, [dispatch]);

	useEffect(() => {
		const filtered = state.servers.filter((server) => {
			if (['online', 'offline', 'rebooting'].includes(searchValue)) {
				return server.status.toLowerCase().includes(searchValue);
			}
			return server.name.toLowerCase().includes(searchValue);
		});

		setFilteredServers(filtered);
	}, [searchValue, state.servers]);

	return (
		<Container>
			{state.pending ? (
				<p style={{ margin: '0 auto' }}>Loading...</p>
			) : (
				<>
					<ServersCountDisplay serversCount={filteredServers.length} />
					<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
					<Table servers={filteredServers} />
				</>
			)}
		</Container>
	);
};

export default ServersPage;
