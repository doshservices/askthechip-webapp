import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chatUserId: null,
    messageClass: 'hide',
};

const chatViewSlice = createSlice({
    name: 'chatView',
    initialState,
    reducers: {
        setChatUserId: (state, action) => {
            state.chatUserId = action.payload;
        },
        setMessageClass: (state, action) => {
            state.messageClass = action.payload;
        },
        clearChatUserId: (state) => {
            state.chatUserId = null;
        },
    },
});

export const { setChatUserId, clearChatUserId, setMessageClass } = chatViewSlice.actions;
export default chatViewSlice.reducer;

