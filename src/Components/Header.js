import React from "react";
import "../Styling/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
function Header() {
	return (
		<div className='header'>
			<div className='header__leftSide'>
				<MenuIcon />
				<img
					className='header__logo'
					src='https://www.pngfind.com/pngs/m/302-3020719_youtube-music-logo-png-transparent-background-youtube-logo.png'
					alt=''
				/>
			</div>
			<div className='header__search'>
				<TextField
					className='header__input'
					variant='outlined'
					placeholder='Search'
				/>
				<Button className='header__searchButton' variant='outlined'>
					<SearchIcon />
				</Button>
			</div>

			<div className='header__rightSide'>
				<VideoCallIcon />
				<AppsIcon />
				<NotificationsIcon />
			</div>
		</div>
	);
}

export default Header;
