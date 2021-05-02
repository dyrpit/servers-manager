import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ children }) => {
	return <main className='container'>{children}</main>;
};

export default Container;

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.array]),
};
