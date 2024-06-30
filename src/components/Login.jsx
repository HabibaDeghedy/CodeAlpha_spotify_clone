import React from "react";
import styled from "styled-components";
export default function Login() {
	const handleClick = () => {
		// spesific id for everyone
		const clientId = "50771900f01c407a9844bba31fd2f1b2";
		const redirectUrl = "http://localhost:3000/";
		const apiURl = "https://accounts.spotify.com/authorize";
		const scope = [
			"user-read-private",
			"user-read-email",
			"user-modify-playback-state",
			"user-read-playback-state",
			"user-read-currently-playing",
			"user-read-recently-played",
			"user-top-read",
		];
		// the apiUrl will redirect you to this URl
		window.location.href = `${apiURl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
			" "
		)}&response_type=token&show_dialog=true`;
	};
	return (
		<Container>
			<img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png"
				alt="spotify"
			/>
			<button onClick={handleClick}>Connect Spotify</button>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	background-color: #1db954;
	gap: 5rem;
	img {
		height: 20vh;
	}
	button {
		padding: 1rem 5rem;
		border-radius: 5rem;
		background-color: black;
		color: #49f585;
		border: none;
		font-size: 1.4rem;
		cursor: pointer;
	}
`;
