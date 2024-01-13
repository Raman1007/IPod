import React from "react";

class MyMusic extends React.Component {
	constructor() {
		super();
		this.state = {
			isMounted: true,
			currentTime: "00:00",
			duration: "00:00",
		};
	}

	componentDidMount() {
		let self = this;
		self.props.audio.play();

		self.props.audio.addEventListener("timeupdate", function () {
			if (self.state.isMounted) {
				var pos = self.props.audio.currentTime / self.props.audio.duration;
				self.updateTime();
				let fill = document.getElementById("fill");
				if (fill !== null) {
					fill.style.width = pos * 100 + "%";
				}
			}
		});
	}

	updateTime = () => {
		const currentTimeInSeconds = this.props.audio.currentTime;
		const durationInSeconds = this.props.audio.duration;
		const formattedCurrentTime = this.formatTime(currentTimeInSeconds);
		const formattedDuration = this.formatTime(durationInSeconds);

		this.setState({
			currentTime: formattedCurrentTime,
			duration: formattedDuration,
		});
	};

	formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);

		const formattedMinutes = String(minutes).padStart(2, "0");
		const formattedSeconds = String(remainingSeconds).padStart(2, "0");

		return `${formattedMinutes}:${formattedSeconds}`;
	};

	componentWillUnmount() {
		this.setState({ isMounted: false });
	}

	render() {
		return (
			<div style={styles.myMusicContainer}>
				<div style={styles.info}>
					<img
						style={styles.image}
						alt=""
						src="https://i.scdn.co/image/ab67616d0000b27335590cb9280d5a1f5221ae1a"
					></img>
					<div style={styles.subInfo}>
						<h4 style={{ marginBottom: "0.5rem" }}>01 Firestone</h4>
						<p style={{ marginBottom: "0" }}>Kygo, Conrad Sewell</p>
					</div>
				</div>

				<div style={styles.statusBar}>
					<p style={styles.currTime}>{this.state.currentTime}</p>
					<div style={styles.seekBar}>
						<div style={styles.fill} id="fill"></div>
					</div>
					<p style={styles.dur}>{this.state.duration}</p>
				</div>
			</div>
		);
	}
}

const styles = {
	myMusicContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	image: {
		height: "75%",
		width: "45%",
		alignSelf: "center",
	},
	info: {
		height: "70%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	statusBar: {
		width: "100%",
		height: "30%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	subInfo: {
		alignSelf: "center",
	},
	seekBar: {
		width: "70%",
		height: "15%",
		border: "1px solid grey",
		cursor: "pointer",
		alignSelf: "center",
		display: "flex",
	},
	fill: {
		height: "100%",
		backgroundColor: "royalblue",
	},
	currTime: {
		margin: "0px",
		alignSelf: "center",
	},
	dur: {
		margin: "0",
		alignSelf: "center",
	},
};

export default MyMusic;
