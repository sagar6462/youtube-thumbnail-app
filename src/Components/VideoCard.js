import React from "react";
import "../Styling/VideoCard.css";

function VideoCard({
	thumbnailUrl,
	channelImageUrl,
	postedDate,
	title,
	channelName,
	noOfViews,
}) {
	return (
		<div className='videoCard'>
			<h1>Video Card</h1>
		</div>
	);
}

export default VideoCard;
