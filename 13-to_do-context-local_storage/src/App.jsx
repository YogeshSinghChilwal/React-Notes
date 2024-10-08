import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './componets/TodoForm';
import TodoItem from './componets/TodoItem';


function App() {

  //~ 5- defining values

  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=> {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (   //* Using () (Parentheses): This is shorthand for an implicit return, meaning the function will return the JSX immediately without needing a return statement. 
      prevTodo.id === id ? todo : prevTodo
    )))
  } 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => (
      todo.id === id ? {...todo, completed: !todo.completed}  : todo
    )))
  }
  
  //~ 6- since when our app runs first time some of the todos my be there already so taking them to show
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))   //* using JSON.parse because local storage stores all the the data in string format

    if(todos && todos.length > 0){  //* checking if todos exist and if it is then that todos array length is not 0
      setTodos(todos)
    }
  }, [])

  //~ 7- now every time a user enter a new todo we want to store it in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    //~ 4- TodoProvider

    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>    { /* //*now we will define what this provider will provide(value)*/}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

            <div className="mb-4">
                {/* //* Todo form goes here */} 
                <TodoForm/>
            </div>

            <div className="flex flex-wrap gap-y-3">
                {/* //* Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
                ))}
            </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
