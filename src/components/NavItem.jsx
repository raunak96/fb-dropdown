import React, { useState } from "react";

const NavItem = ({ icon, dropDown = false, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropDown = () => setIsOpen(isOpen => !isOpen);
	return (
		<li className="nav-item">
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a
				href="#"
				className="icon-button"
				onClick={() => dropDown && toggleDropDown()}>
				{icon}
			</a>
			{isOpen && children}
		</li>
	);
};

export default NavItem;
