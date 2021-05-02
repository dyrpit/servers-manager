import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.scss';

const SearchInput = ({ searchValue, setSearchValue }) => {
	const handleOnChange = (e) => {
		const { value } = e.target;

		setSearchValue(value.toLowerCase());
	};

	const handleReset = () => {
		setSearchValue('');
	};

	const activeButton = searchValue ? (
		<button onClick={handleReset} className='search__button'>
			<i className='fas fa-times'></i>
		</button>
	) : (
		<button className='search__button'>
			<i className='fas fa-search'></i>
		</button>
	);

	return (
		<div className='search'>
			<div className='search-field'>
				<input
					className='search__input'
					placeholder='Search'
					value={searchValue}
					onChange={handleOnChange}
				></input>
				{activeButton}
			</div>
		</div>
	);
};

export default SearchInput;

SearchInput.propTypes = {
	searchValue: PropTypes.string,
	setSearchValue: PropTypes.func,
};
