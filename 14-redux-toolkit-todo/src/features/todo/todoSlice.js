//^ calling features -> slice
//~ 2- Create a Slice
//^ A "slice" is a collection of Redux reducer logic(functions) and actions for a specific feature of your app.

import {createSlice, nanoid} from '@reduxjs/toolkit'        //* nanoid generates unique id
import { useState } from 'react'

const initialState = {
    todos: [{
        id: 1,
        text: "Hello world!"
    }]
}



 export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {       //*  in state we get -> updated state value in the store
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {        //* An action is a plain JavaScript object that has a type property and optionally a payload. Actions describe events that have occurred in the app and are sent (or "dispatched") to the Redux store to indicate that something should change in the state.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)      //* The payload is the additional data that you can pass to an action to provide information about what should change in the state.
        },
        updateTodo: (state, action) => {
            console.log(state.todos);
            console.log(action);
            
            
            //state.todos = state.todos.map((todo) => todo.id === action.payload ? todo.text = action.payload : todo.text)
        },
        isEditable: (state, action) => {
            const {id, text} = action.payload

            
        }
    }
 })

 export const {addTodo, removeTodo, updateTodo, isEditable} = todoSlice.actions

 export default todoSlice.reducer       //* A reducer is a pure function that takes the current state and an action as arguments, and returns a new state. It’s called a reducer because it reduces many actions into a single new state object.