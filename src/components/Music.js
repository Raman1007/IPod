import React from "react";
import { ListGroup } from "react-bootstrap";

class Music extends React.Component {
	render() {
		return (
			<div style={styles.musicScreen} id="music-screen">
				<div style={styles.menuList} id="menu-list">
					<p
						style={{
							fontWeight: "bold",
							fontSize: "26px",
							marginTop: "22px",
							marginLeft: "10px",
						}}
					>
						Music
					</p>

					<ListGroup style={{ borderRadius: "0" }}>
						<ListGroup.Item
							style={{ border: "0", padding: "0.2rem 0.6rem" }}
							className={this.props.activeItem === "MyMusic" ? "active" : ""}
						>
							All Songs{" "}
							{this.props.activeItem === "MyMusic" ? (
								<span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
							) : (
								""
							)}
						</ListGroup.Item>
						<ListGroup.Item
							style={{ border: "0", padding: "0.2rem 0.6rem" }}
							className={this.props.activeItem === "Artists" ? "active" : ""}
						>
							Artists{" "}
							{this.props.activeItem === "Artists" ? (
								<span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
							) : (
								""
							)}
						</ListGroup.Item>
						<ListGroup.Item
							style={{ border: "0", padding: "0.2rem 0.6rem" }}
							className={this.props.activeItem === "Albums" ? "active" : ""}
						>
							Albums{" "}
							{this.props.activeItem === "Albums" ? (
								<span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
							) : (
								""
							)}
						</ListGroup.Item>
					</ListGroup>
				</div>
				<div style={styles.imageContainer} id="image-container"></div>
			</div>
		);
	}
}

const styles = {
	musicScreen: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirecton: "row",
	},
	menuList: {
		height: "100%",
		width: "50%",
		boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
		zIndex: "1",
		fontWeight: "bold",
	},
	imageContainer: {
		height: "100%",
		width: "50%",
		backgroundImage:
			'url("https://www.wallpapers13.com/wp-content/uploads/2020/07/Sunrise-Landscape-Wallpaper-Hd-Pictures-4-HD-Wallpapers-1600x1200.jpg")',
		backgroundSize: "cover",
		backgroundPosition: "center",
		borderRadius: "0 12px 12px 0",
	},
};

export default Music;
