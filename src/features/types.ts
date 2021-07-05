export interface UserType {
    display_name: string | undefined;
    id: string;
    type: string;
    uri: string;
    images: SpotifyApi.ImageObject[] | undefined;
}

export interface UserState {
    data: UserType | null;
    token: string;
}

interface TrackType {
    href: string;
    total: number;
}


export interface PlaylistType {
    id: string;
    name: string;
    tracks: TrackType;
    href: string;
}

export interface PlaylistState {
    data: Array<PlaylistType>;
}