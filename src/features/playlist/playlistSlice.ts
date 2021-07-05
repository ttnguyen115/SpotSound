import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PlaylistState, PlaylistType } from '../types';

const initialState: PlaylistState = {
    data: [],
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        setPlaylists: (state, action: PayloadAction<PlaylistType>) => {
            state.data: [
                    ...state,
                    {
                    id: action.payload.id,
                    name: action.payload.name,
                    tracks: action.payload.tracks,
                    href: action.payload.href,
                }]
            }
    }
});

export const { setPlaylists } = playlistSlice.actions;

export const playlistSelect = (state: PlaylistState) => state;

export default playlistSlice.reducer;