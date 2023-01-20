import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false,
    user : null
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSlice: (state, {payload}) => {
            state.isLoggedIn = true
            state.user = payload
        },
        logoutSlice: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    },
})

export const { loginSlice, logoutSlice } = slice.actions

export default slice.reducer


