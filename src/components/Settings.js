import React from "react";

class Settings extends React.Component {
	render() {
		return (
			<div style={styles.settings}>
				<img
					style={styles.image}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Settings_%28iOS%29.png/800px-Settings_%28iOS%29.png"
					alt=""
				/>
				<p style={styles.para}>Settings</p>
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
		width: "65%",
		height: "65%",
		alignSelf: "center",
	},
	para: {
		margin: "0px 25px",
		fontWeight: "bold",
	},
};

export default Settings;
