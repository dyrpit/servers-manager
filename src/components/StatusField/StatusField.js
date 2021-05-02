import React from 'react';
import PropTypes from 'prop-types';

const StatusField = ({ status }) => {
	const statusField = {
		ONLINE: (
			<div className='table__row__status table__row__status online'>
				<p>
					<i className='fas fa-circle icon-online'></i>
					{status}
				</p>
			</div>
		),
		OFFLINE: (
			<div className='table__row__status'>
				<p>
					<i className='fas fa-times offline icon-offline'></i>
					{status}
				</p>
			</div>
		),
		REBOOTING: (
			<div className='table__row__status reboot'>
				<p>{status}...</p>
			</div>
		),
	};

	return !status ? null : <>{statusField[status]}</>;
};

export default StatusField;

StatusField.propTypes = {
	status: PropTypes.string,
};
