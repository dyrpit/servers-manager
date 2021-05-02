import React from 'react';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<div className='logo__sign'></div>
				<div className='logo__title'>Servers Manager</div>
			</div>
		</header>
	);
};

export default Header;
