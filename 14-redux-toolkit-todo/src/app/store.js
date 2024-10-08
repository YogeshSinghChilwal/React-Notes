//^ Redux Toolkit simplifies state management in React by providing efficient tools for configuring a Redux store, defining reducers, and managing middleware. 
//! npm install @reduxjs/toolkit react-redux


//~ 1- Set up Redux Store -> creating a store mostly one application will have only one store
//^ In Redux Toolkit, you use configureStore to set up the Redux store, which automatically sets up the Redux DevTools and middleware.

//~ 4- giving knowledge of reducres to configureStore

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})