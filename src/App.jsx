import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

const adwumaCraftRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {

  return (
    <>
     <RouterProvider router={adwumaCraftRouter} />
    </>
  )
}