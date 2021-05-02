import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';

const Table = ({ servers }) => {
	return (
		<div className='table'>
			<TableHeader />
			<ul className='table__list'>
				{servers.map((server) => (
					<TableRow key={server.id} server={server} />
				))}
			</ul>
		</div>
	);
};

export default Table;

Table.propTypes = {
	servers: PropTypes.arrayOf(PropTypes.object),
};
