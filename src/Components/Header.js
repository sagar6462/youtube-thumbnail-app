import React from "react";
import "../Styling/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
	return (
		<div className='header'>
			<div className='header__logo'>
				<h1>YouTube Logo</h1>
			</div>
			<div className='header__search'>
				<input type='text' />
				<SearchIcon />
			</div>

			<div className='header__rightLogos'>
				<h1>Other Logo</h1>
			</div>
		</div>
	);
}

export default Header;
