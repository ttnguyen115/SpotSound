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

export interface PlaylistType {
    id: string;
    name: string;
    href: string;
    description: string;
    images: SpotifyApi.ImageObject[] | undefined;
}

export interface ActiveType {
    id: string;
    name: string;
    description: string;
    images: SpotifyApi.ImageObject[] | undefined;
    tracks: SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>;
}

export interface PlaylistState {
    data: Array<PlaylistType>;
    active: ActiveType | null;
}