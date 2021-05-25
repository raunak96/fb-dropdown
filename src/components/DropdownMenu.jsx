import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
	const [activeMenu, setActiveMenu] = useState("main"); // other activeMenu includes sub-menu like settings
	const [menuHeight, setMenuHeight] = useState(null); //

	const calcHeight = el => {
		const height = el.offsetHeight;
		setMenuHeight(height);
	};

	return (
		<div className="dropdown" style={{ height: menuHeight }}>
			{/* when in is true show and add transition classes to children of CSSTransition; */}
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={<CogIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu="settings"
						setActiveMenu={setActiveMenu}>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem
						leftIcon={<ArrowIcon />}
						goToMenu="main"
						setActiveMenu={setActiveMenu}
					/>
					<DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>Status</DropdownItem>
					<DropdownItem>Display</DropdownItem>
					<DropdownItem>Ascessibility</DropdownItem>
					<DropdownItem>Log Out</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};

export default DropdownMenu;
