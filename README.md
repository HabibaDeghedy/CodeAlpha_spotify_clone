# Spotify Clone

A web application that emulates some features of Spotify, including viewing playlists, playing tracks, and displaying current playing tracks. This project uses the Spotify Web API and React for the frontend.

## Features

- User authentication via Spotify
- Display user's playlists
- View playlist details and tracks
- Play tracks and control playback
- Display currently playing track
- Responsive design

## Technologies Used

- React
- Styled Components
- Spotify Web API
- Axios

## Project Structure

````plaintext
src/
├── components/
│   ├── Body.jsx
│   ├── CurrentTrack.jsx
│   ├── Footer.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── PlayerControls.jsx
│   ├── Playlists.jsx
│   ├── Sidebar.jsx
│   └── Spotify.jsx
├── utils/
│   ├── Constants.js
│   └── StateProvider.js
└── index.js

## Components

- **Body.jsx**: Displays the selected playlist's details and tracks. Allows playing a track by clicking on it.
- **CurrentTrack.jsx**: Shows the currently playing track information.
- **Footer.jsx**: Contains the current track display, player controls, and volume control.
- **Login.jsx**: Handles user authentication via Spotify.
- **Navbar.jsx**: Contains the search bar and user profile link.
- **PlayerControls.jsx**: Includes playback control buttons (play/pause, next, previous, shuffle, repeat).
- **Playlists.jsx**: Displays the user's playlists and allows selecting a playlist to view.
- **Sidebar.jsx**: Contains navigation links and the playlists component.
- **Spotify.jsx**: The main component that brings together the sidebar, body, and footer.

## Utils

- **Constants.js**: Defines constants used in the project.
- **StateProvider.js**: Implements the context API for state management.

## Getting Started

### Prerequisites

- Node.js
- Spotify Developer Account

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone

2. Install dependencies:
  ``` npm install ```

3. Create a Spotify Developer App and get your clientId.

4. Update the clientId in Login.jsx:
  ```const clientId = "your_client_id_here";```

Running the Application
  1. Start the development server: ```npm start```

  2. Open your browser and navigate to ```http://localhost:3000```.

Usage
  - Click on "Connect Spotify" to log in with your Spotify account.
  - Once authenticated, your playlists will be displayed.
  - Click on a playlist to view its tracks.
  - Click on a track to play it.
````
