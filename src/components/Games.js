import React from "react";

class Games extends React.Component {
	render() {
		return (
			<div style={styles.settings}>
				<div>
					<img
						style={styles.image}
						src="https://wallpapercave.com/wp/wp3731792.jpg"
						alt=""
					/>
					<p style={styles.para}>Games</p>
				</div>
			</div>
		);
	}
}

const styles = {
	settings: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
		backgroundColor: "floralwhite",
		borderRadius: "10px",
	},
	image: {
		width: "50%",
		height: "50%",
		marginLeft: "75px",
		marginTop: "50px",
	},
	para: {
		marginTop: "10px",
		marginLeft: "126px",
		fontWeight: "bold",
	},
};

export default Games;
