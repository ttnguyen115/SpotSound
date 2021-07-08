import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import SpotifyWebApi from 'spotify-web-api-js';
import { UserState } from '../types';

const spotify = new SpotifyWebApi();

const initialState: UserState = {
    data: null,
    token: '',
}

export const fetchUserByToken = createAsyncThunk(
    'user/fetchUserByToken',
    async () => {
        const res = await spotify.getMe();
        return res;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>): UserState => {
            return {
                ...state,
                token: action.payload
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUserByToken.pending, () => {
                console.log('loading...');
            })
            .addCase(fetchUserByToken.fulfilled, (state, action) => {
                const { display_name, id, images } = action.payload;

                state.data = { display_name, id, images };
            })
    }
});

export const { setToken } = userSlice.actions;

export const userSelect = (state: UserState) => state;

export default userSlice.reducer;