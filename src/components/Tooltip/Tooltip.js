import React from 'react';
import PropTypes from 'prop-types';

import './Tooltip.scss';

const Tooltip = ({
	isOpen,
	handleToggleTooltip,
	status,
	handleTurnOn,
	handleTurnOff,
	handleReboot,
}) => {
	const openClass = isOpen ? 'tooltip__controls--open' : '';

	const disabledClass = status === 'REBOOTING' ? 'tooltip--disabled' : '';

	const buttons =
		status === 'ONLINE' ? (
			<>
				<div className='tooltip__controls__button' onClick={handleTurnOff}>
					Turn off
				</div>
				<div className='tooltip__controls__button' onClick={handleReboot}>
					Reboot
				</div>
			</>
		) : (
			<div className='tooltip__controls__button' onClick={handleTurnOn}>
				Turn on
			</div>
		);

	return (
		<div
			className={`tooltip ${disabledClass}`}
			onClick={(e) => {
				if (status === 'REBOOTING') {
					return;
				}
				handleToggleTooltip(e);
			}}
		>
			<div className='tooltip__dot'></div>
			<div className='tooltip__dot'></div>
			<div className='tooltip__dot'></div>
			<div className={`tooltip__controls ${openClass}`}>{buttons}</div>
		</div>
	);
};

export default Tooltip;

Tooltip.propTypes = {
	isOpen: PropTypes.bool,
	handleToggleTooltip: PropTypes.func,
	status: PropTypes.string,
	handleTurnOn: PropTypes.func,
	handleTurnOff: PropTypes.func,
	handleReboot: PropTypes.func,
};
