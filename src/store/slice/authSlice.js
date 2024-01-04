import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jwt: null
};

const jwt = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        setJwt: (state, action) => {
            state.jwt = action.payload;
        },
        clearJwt: (state) => {
            state.jwt = null;
        },
    },
});

export const { setJwt, clearJwt } = jwt.actions;
export default jwt.reducer;