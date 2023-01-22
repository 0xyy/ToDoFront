import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    userId: string | null;
    userName: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    userId: null,
    userName: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<AuthState>) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
        },
        logOut: (state, action: PayloadAction<true>) => {
            state.isLoggedIn = false;
            state.userId = null;
            state.userName = null;
        },
    },
});

export const { logIn, logOut } = authSlice.actions;