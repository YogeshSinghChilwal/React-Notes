import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

// Create the store with the auth reducer
const store = configureStore({
    reducer: {
        auth: authSlice,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
