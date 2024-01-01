import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        clearId: (state) => {
            state.id = null;
        },
    },
});

export const { setId, clearId } = notificationSlice.actions;
export default notificationSlice.reducer;

