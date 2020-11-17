import React from "react";
import "../Styling/MainContainer.css";
import VideoCard from "./VideoCard";

function MainContainer() {
	return (
		<div className='maincontainer'>
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
		</div>
	);
}

export default MainContainer;
