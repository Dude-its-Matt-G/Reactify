export default function() {
    let token = window.location.hash.substr(1);
    if (token) {
        const o = Object.fromEntries(new URLSearchParams(token));
        return o.access_token;
    } else {
        // If there is no token, redirect to Spotify authorization
        redirectToSpotifyAuthentication();
    }
}

function redirectToSpotifyAuthentication() {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = 'c2ff07c6f4d64106bbf4f4d98d5811df';
    const redirectUri = 'http://localhost:3000/callback';
    let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
    window.location = `${authEndpoint}?${query}`;
}