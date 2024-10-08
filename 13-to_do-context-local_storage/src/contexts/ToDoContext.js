import {useContext, createContext} from 'react'


//~ 1- exporting todoContext
export const TodoContext = createContext({      //* some default variables, methods which we will define in app.js
    todos: [{
        id: 1,
        todo: "Todo message",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

//~ 2- exporting a hook once we used a useContext we have to provide it a context

export const useTodo = () => {
    return useContext(TodoContext)
}

//~ 3- exporting a provider

export const TodoProvider = TodoContext.Provider       //* later we will use it in app.js in which we will define some values which can we used by any component by just importing hook(useTodo)