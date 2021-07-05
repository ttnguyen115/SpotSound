export const authEndpoint: string = "https://accounts.spotify.com/authorize";

const redirectUri: string = "http://localhost:3000/";

const clientId: string = "cc9c9b3d42bf4909824462efe1505fc7";

const scopes: Array<string> = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

interface ObjectKeys {
    [key: string]: string | number;
}

export interface tokenType extends ObjectKeys { 
    access_token: string;
    token_type: string;
    expires_in: string;
}

const initial: tokenType = {
    access_token: '',
    token_type: '',
    expires_in: ''
}

export const getTokenFromUrl = (): tokenType => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item: string): tokenType => {
            let parts: Array<string> = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, initial);
}

export const loginUrl: string = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;