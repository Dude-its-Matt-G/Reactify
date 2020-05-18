import { spotyApi } from './config';

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
    let query = `client_id=${spotyApi.clientId}&redirect_uri=${spotyApi.redirectUri}&response_type=token&show_dialog=true`;
    window.location = `${spotyApi.authEndpoint}?${query}`;
}