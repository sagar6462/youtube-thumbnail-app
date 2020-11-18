import React from "react";
import "../Styling/MainContainer.css";
import VideoCard from "./VideoCard";

function MainContainer() {
	return (
		<div className='maincontainer'>
			<h2 className='maincontainer__title'>Recommended</h2>
			<div className='maincontainer__videos'>
				<VideoCard
					thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg'
					title='The Thumbnauk'
					channelName='New Channel'
					noOfViews='5.2M Views'
					postedDate='3 days ago'
					channelImageUrl='https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'
				/>
				<VideoCard
					thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg'
					title='The Thumbnauk'
					isCustome
					channelName='New Channel'
					noOfViews='5.2M Views'
					postedDate='3 days ago'
					channelImageUrl='https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'
				/>
				<VideoCard
					thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg'
					title='The Thumbnauk'
					channelName='New Channel'
					noOfViews='5.2M Views'
					postedDate='3 days ago'
					channelImageUrl='https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'
				/>
				<VideoCard
					thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg'
					title='The Thumbnauk'
					channelName='New Channel'
					noOfViews='5.2M Views'
					postedDate='3 days ago'
					channelImageUrl='https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'
				/>
				<VideoCard
					thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg'
					title='The Thumbnauk'
					channelName='New Channel'
					noOfViews='5.2M Views'
					postedDate='3 days ago'
					channelImageUrl='https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'
				/>
			</div>
		</div>
	);
}

export default MainContainer;
