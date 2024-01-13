import React from "react";

class Albums extends React.Component {
	render() {
		return (
			<div style={styles.artistsContainer}>
				<img
					style={styles.image}
					alt=""
					src="https://png.pngtree.com/background/20210715/original/pngtree-electronic-music-album-picture-image_1301130.jpg"
				/>
				<p style={styles.para}>Albums</p>
			</div>
		);
	}
}

const styles = {
	artistsContainer: {
		height: "100%",
		width: "100%",
		backgroundColor: "floralwhite",
		borderRadius: "10px",
	},
	image: {
		width: "43%",
		marginLeft: "85px",
		marginTop: "50px",
	},
	para: {
		fontWeight: "bold",
		fontSize: "20px",
		marginLeft: "115px",
		marginTop: "20px",
	},
};

export default Albums;
