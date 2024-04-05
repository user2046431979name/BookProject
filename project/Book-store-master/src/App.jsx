import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Books from "./pages/Books/Books"
import Contacts from "./pages/Contacts/Contacts"
import Register from "./pages/Register/Register"
import Productf from "./pages/Productf/Productf"
import Favorites from "./pages/Favorites/Favorites"
import Login from "./pages/Login/Login"
import Auth from "./components/Layout/Auth"
import Laik from "./pages/Laik/Laik"
import BurgerMenu from "./components/Layout/Header/BurgerMenu/BurgerMenu"
import './styles/styles.scss'


function App() {
  const router = createBrowserRouter([
       {
        path:'/',
        element:<Layout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/:id",
            element:<Productf/>
          },
          {
            path:"/about",
            element: <About/>
          },
          {
            path:"/books",
            element: <Books/>
          },
          {
            path:"/contacts",
            element: <Contacts/>
          },
          {
            path:"/burgermenu",
            element: <BurgerMenu/>
          },
          {
            path:"/home",
            element: <Home/>
          },
          {
            path:"/favorites",
            element: <Favorites/>
          },
          {
            path:"/laik",
            element: <Laik/>
          },
        ],
       },
       {
        path:"/auth",
        element:<Auth/>,
        children:[
         {
           path:"login",
           element: <Login/>,
         },
         {
           path:"register",
           element: <Register/>,
         },
        ]
      },
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App