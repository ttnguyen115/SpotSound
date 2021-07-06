import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState, UserType } from '../types';

const initialState: UserState = {
    data: null,
    token: '',
    // token: 'BQC3Cf2pSiYWCuSHIIjEO2LmapEmy0r2tv7yYxQ1CHnD8ZhDcIoMsoWpqhGb6yvZCoKxTkDC6BgoyGmf2rXTQAoOAKFU6FJqFy1c6_LyNDKo9j7pOvK2vMYqohxaa5RhwZyvuIiC9nhui3ZPOh-E0M2OGegUrg6dbR0EMoLzv5EaUavm',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.data = action.payload;
        },

        setToken: (state, action: PayloadAction<string>): UserState => {
            return {
                ...state,
                token: action.payload
            }
        }
    }
});

export const { setUser, setToken } = userSlice.actions;

export const userSelect = (state: UserState) => state;

export default userSlice.reducer;