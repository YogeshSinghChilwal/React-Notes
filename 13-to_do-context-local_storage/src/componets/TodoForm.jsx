import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    //~ 9- defining state for individual todo
    const [todo, setTodo] = useState("")

    //~ 10- taking addTodo method from useTodo(ToDoContext.js)
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({todo, completed: false})     //* not defining `id: Date.now()`,  here because it is allready defind in `app.js`- addTodo method & sending `todo` as `todo` not `todo: todo` because key value have same name

        setTodo("")
    }
    

    return (
        // ~ 8- TodoForm
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}    //*wiring input with state
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


