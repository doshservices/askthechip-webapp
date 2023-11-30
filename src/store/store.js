import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import chatTabModeReducer from './slice/chatViewSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chat: chatTabModeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)