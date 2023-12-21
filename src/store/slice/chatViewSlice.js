import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chatUserId: null,
    messageClass: 'hide',
    conversationId: null,
    previewMessage: ""
};

const chatViewSlice = createSlice({
    name: 'chatView',
    initialState,
    reducers: {
        setChatUserId: (state, action) => {
            state.chatUserId = action.payload;
        },
        setpreviewMessage: (state, action) => {
            state.previewMessage = action.payload;
        },
        setConversationId: (state, action) => {
            state.conversationId = action.payload;
        },
        setMessageClass: (state, action) => {
            state.messageClass = action.payload;
        },
        clearChatUserId: (state) => {
            state.chatUserId = null;
        },
    },
});

export const { setChatUserId, clearChatUserId, setMessageClass, setConversationId, setpreviewMessage } = chatViewSlice.actions;
export default chatViewSlice.reducer;

