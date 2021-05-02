import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { apiReducer } from '../reducer/apiReducer';

export const ApiContext = createContext();

const initialState = {
	servers: [],
	pending: false,
	error: null,
};

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(apiReducer, initialState);

	return <ApiContext.Provider value={{ state, dispatch }}>{children}</ApiContext.Provider>;
};

export default Store;

Store.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.array]),
};
