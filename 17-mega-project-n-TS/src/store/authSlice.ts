import { createSlice } from "@reduxjs/toolkit";

// Define the shape of the auth state
interface AuthState {
    status: boolean;
    userData: string | null; 
}

// Set the initial state
const initialState: AuthState = {
    status: false,
    userData: null
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
