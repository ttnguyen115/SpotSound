import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import SpotifyWebApi from 'spotify-web-api-js';
import { ActiveType, PlaylistState } from '../types';

const spotify = new SpotifyWebApi();

const initialState: PlaylistState = {
    data: [],
    active: null,
    playingPlaylist: null
}

export const fetchPlaylistListByUser = createAsyncThunk(
    'playlist/fetchPlaylistListByUser',
    async () => {
        const res = spotify.getUserPlaylists();
        return res;
    }
)

export const fetchActivePlaylist = createAsyncThunk(
    'playlist/fetchActivePlaylist',
    async (id: string) => {
        const res = spotify.getPlaylist(id);
        return res;
    }
) 

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        setPlaylist: (state, action: PayloadAction<ActiveType>) => {
            state.active = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            // Add playlists by user
            .addCase(fetchPlaylistListByUser.pending, () => {
                console.log('playlists loading...');
            })
            .addCase(fetchPlaylistListByUser.fulfilled, (state, action) => {
                action.payload.items.map(item => {
                    const newPlaylist = item;
                    const index = state.data.findIndex(x => x.id === newPlaylist.id);

                    if (index === -1) {
                        const { id, name, href, description, images } = item;
                        state.data.push({ id, name, href, description, images });
                    }
                })
            })

            // Add active playlist to show data
            .addCase(fetchActivePlaylist.pending, () => {
                console.log('active playlist loading...');
            })
            .addCase(fetchActivePlaylist.fulfilled, (state, action) => {
                const { id, name, tracks, description, images } = action.payload;
                state.active = { id, name, tracks, description, images };
            })
    }
});

// export const { } = playlistSlice.actions;

export const playlistSelect = (state: PlaylistState) => state.data;

export default playlistSlice.reducer;