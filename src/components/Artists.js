import React from "react";

class Artists extends React.Component {
	render() {
		return (
			<div style={styles.artistsContainer}>
				<img
					style={styles.image}
					alt=""
					src="https://www.careersinmusic.com/wp-content/uploads/2019/03/recording-artist.jpg"
				/>
				<p style={styles.para}>Artist</p>
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
		width: "50%",
		marginLeft: "72px",
		marginTop: "70px",
	},
	para: {
		fontWeight: "bold",
		fontSize: "20px",
		marginLeft: "120px",
		marginTop: "20px",
	},
};

export default Artists;
