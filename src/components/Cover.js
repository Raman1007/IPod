import React from "react";

class Cover extends React.Component {
	render() {
		return (
			<div style={styles.artistsContainer}>
				<p style={styles.para}>Cover Flow</p>
			</div>
		);
	}
}

const styles = {
	artistsContainer: {
		height: "100%",
		width: "100%",
		backgroundColor: "floralwhite",
		display: "flex",
		borderRadius: "10px",
	},
	para: {
		fontWeight: "bold",
		fontSize: "26px",
		marginLeft: "90px",
		color: "black",
		marginTop: "100px",
	},
};

export default Cover;
