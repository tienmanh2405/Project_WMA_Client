import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    accessToken: null,
    userInfo: {}
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        login: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLogin = true;
            state.userInfo = action.payload.userInfo;
            state.accessToken = action.payload.accessToken;
        },
        logout: (state) => {
            state.isLogin = false;
            state.userInfo = {};
            state.accessToken = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions

export const reducer = counterSlice.reducer