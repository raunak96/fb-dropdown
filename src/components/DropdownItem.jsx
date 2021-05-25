import React from "react";

const DropdownItem = ({
	children,
	leftIcon,
	rightIcon,
	goToMenu,
	setActiveMenu,
}) => {
	return (
		/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
		<a
			href="#"
			className="menu-item"
			onClick={() => goToMenu && setActiveMenu(goToMenu)}>
			<span className="icon-button icon-left">{leftIcon}</span>
			{children}
			{rightIcon && (
				<span className="icon-button icon-right">{rightIcon}</span>
			)}
		</a>
	);
};

export default DropdownItem;
