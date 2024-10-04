import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//~ 4- Creating Router

//^ 1st way to make it
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,   //* this element will rendered by the path we described above
//     children: [           //* now it's nesting because we want to make more paths
//       {
//           path: "",   //* we have already declares '/' so if user enter '/' then Home will render
//           element: <Home/>
//       },
//       {
//         path: "about",    //* '/about'
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//^ 2nd way to make do it
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:id' element={<User />}/>
      <Route loader={githubInfoLoader} path='github' element={<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <App /> */}    {/* since we have installed react router so we don't have to use App */}
     <RouterProvider router={router}/>
  </StrictMode>,
)
