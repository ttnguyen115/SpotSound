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