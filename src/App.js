import React from 'react';

import Header from './components/Header/Header';
import ServersPage from './pages/ServersPage/ServersPage';
import Store from './context/Store';

const App = () => {
	return (
		<Store>
			<Header />
			<ServersPage />
		</Store>
	);
};

export default App;
