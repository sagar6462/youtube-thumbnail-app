import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import "../Styling/VideoCard.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function VideoCard({
	thumbnailUrl,
	channelImageUrl,
	isCustome,
	postedDate,
	title,
	channelName,
	noOfViews,
}) {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [titleInput, setTitleInput] = useState("");
	const [thumbTitle, setThumbTitle] = useState("");
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);

	const handleClose = (e) => {
		e.preventDefault();
		setImageUrl(input);
		setThumbTitle(titleInput);
		setOpen(false);
	};

	return (
		<div className='videoCard'>
			<Modal open={open} onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					<form>
						<TextField
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder='ImageUrl'
						/>
						<TextField
							value={titleInput}
							onChange={(e) => setTitleInput(e.target.value)}
							placeholder='title'
						/>
						<Button type='submit' onClick={handleClose}>
							Set Image Url
						</Button>
					</form>
				</div>
			</Modal>
			{isCustome && !imageUrl ? (
				<button onClick={(e) => setOpen(true)}>Select Thumbnail</button>
			) : (
				<img
					src={imageUrl || thumbnailUrl}
					alt=''
					className='videoCard__thumbnail'
				/>
			)}

			<div className='videoCard__info'>
				<div className='videoCard__channelImageContainer'>
					<img src={channelImageUrl} alt='' />
				</div>

				<div className='videoCard__infoText'>
					<p className='videoCard__title'>{thumbTitle || title}</p>
					<p className='videoCard__channelName'>{channelName}</p>
					<p className='videoCard__noOfViewsAndPostedDate'>
						{noOfViews} • {postedDate}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
