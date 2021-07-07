import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActiveType, PlaylistState, PlaylistType } from '../types';

const initialState: PlaylistState = {
    data: [],
    active: null
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        setPlaylists: (state, action: PayloadAction<PlaylistType>) => { 
            const newPlaylist = action.payload;
            const index = state.data.findIndex(x => x.id === newPlaylist.id);

            if (index === -1) state.data.push(action.payload);
        },

        setPlaylist: (state, action: PayloadAction<ActiveType>) => {
            state.active = action.payload;
        }
    }
});

export const { setPlaylists, setPlaylist } = playlistSlice.actions;

export const playlistSelect = (state: PlaylistState) => state.data;

export default playlistSlice.reducer;