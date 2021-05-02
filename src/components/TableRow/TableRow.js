import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import StatusField from '../StatusField/StatusField';
import Tooltip from '../Tooltip/Tooltip';

import ServersService from '../../service/ServersService';
import {
	getServer,
	getServersError,
	rebootServer,
	turnOffServer,
	turnOnServer,
} from '../../actions/apiActions';
import { ApiContext } from '../../context/Store';

const TableRow = ({ server }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { dispatch } = useContext(ApiContext);

	const handleToggleTooltip = (e) => {
		e.stopPropagation();

		setIsOpen((prev) => !prev);
	};

	const handleTurnOn = async () => {
		try {
			const res = await ServersService.turnServerOn(server.id);
			dispatch(turnOnServer(res.data));
		} catch (e) {
			dispatch(getServersError(e.message));
		}
	};

	const handleTurnOff = async () => {
		try {
			const res = await ServersService.turnServerOff(server.id);
			dispatch(turnOffServer(res.data));
		} catch (e) {
			dispatch(getServersError(e.message));
		}
	};

	const handleReboot = async () => {
		let intervalId;
		try {
			const res = await ServersService.rebootServer(server.id);

			dispatch(rebootServer(res.data));

			if (res.data.status === 'REBOOTING') {
				intervalId = setInterval(async () => {
					const res = await ServersService.getServer(server.id);
					if (res.data.status === 'ONLINE') {
						dispatch(getServer(res.data));
						clearInterval(intervalId);
					}
				}, 1000);
			}
		} catch (e) {
			dispatch(getServersError(e.message));
		}
	};

	return (
		<li className='table__row' onClick={(e) => isOpen && handleToggleTooltip(e)}>
			<p className='table__row__name'>{server.name}</p>
			<StatusField status={server.status} />
			<Tooltip
				isOpen={isOpen}
				handleToggleTooltip={handleToggleTooltip}
				status={server.status}
				handleTurnOn={handleTurnOn}
				handleTurnOff={handleTurnOff}
				handleReboot={handleReboot}
			/>
		</li>
	);
};

export default TableRow;

TableRow.propTypes = {
	server: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		status: PropTypes.string,
	}),
};
