import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chatUserId: null
};

const userSlice = createSlice({
    name: 'chatView',
    initialState,
    reducers: {
        setChatUserId: (state, action) => {
            state.chatUserId = action.payload
        },
        clearChatUserId: (state) => {
            state.chatUserId = null
        },
    },
});

export const { setChatUserId, clearChatUserId } = userSlice.actions;
export default userSlice.reducer;
