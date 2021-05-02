import React from 'react';
import PropTypes from 'prop-types';

import './ServersCountDisplay.scss';

const ServersCountDisplay = ({ serversCount }) => {
	return (
		<div className='servers-count'>
			<p className='servers-count__title'>Servers</p>
			<p className='servers-count__text'>Number of elements: {serversCount}</p>
		</div>
	);
};

export default ServersCountDisplay;

ServersCountDisplay.propTyeps = {
	serversCount: PropTypes.number,
};
