import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import AboutUs from "./pages/AboutUs"
import VendorsAccount from "./pages/VendorsAccount"
import Contact from "./pages/Contact"
import ViewProduct from "./pages/ViewProduct"
import WoovenPieces from "./pages/WoovenPieces"
import Pottery from "./pages/Pottery"
import Accessories from "./pages/Accessories"
import Textile from "./pages/Textile"
import ArtAndPaintings from "./pages/ArtAndPaintings"
import HomeDecor from "./pages/HomeDecor"
import NotFound from "./pages/NotFound"

const adwumaCraftRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <Login /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/aboutus', element: <AboutUs /> },
  { path: '/vendorsaccount', element: <VendorsAccount /> },
  { path: '/contactpage', element: <Contact /> },
  { path: '/viewproduct', element: <ViewProduct /> },
  { path: '/woovenpieces', element: <WoovenPieces /> },
  { path: '/pottery', element: <Pottery /> },
  { path: '/accessories', element: <Accessories /> },
  { path: '/textile', element: <Textile /> },
  { path: '/artandpaints', element: <ArtAndPaintings /> },
  { path: '/homedecor', element: <HomeDecor /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {

  return (
    <>
     <RouterProvider router={adwumaCraftRouter} />
    </>
  )
}