import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import AboutUs from "./pages/AboutUs"
import VendorsOnboarding from "./pages/VendorsOnboarding"
import Contact from "./pages/Contact"
import ViewProduct from "./pages/ViewProduct"
import WoovenPieces from "./pages/WoovenPieces"
import Pottery from "./pages/Pottery"
import Accessories from "./pages/Accessories"
import Textile from "./pages/Textile"
import ArtAndPaintings from "./pages/ArtAndPaintings"
import HomeDecor from "./pages/HomeDecor"
import Otp from "./pages/Otp"
import NotFound from "./pages/NotFound"

const adwumaCraftRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <Login /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/vendors/onboarding', element: <VendorsOnboarding /> },
  { path: '/contact', element: <Contact /> },
  { path: '/viewproduct/:id', element: <ViewProduct /> },
  { path: '/woovenpieces', element: <WoovenPieces /> },
  { path: '/pottery', element: <Pottery /> },
  { path: '/accessories', element: <Accessories /> },
  { path: '/textile', element: <Textile /> },
  { path: '/artandpaints', element: <ArtAndPaintings /> },
  { path: '/homedecor', element: <HomeDecor /> },
  { path: '/otp', element: <Otp /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {

  return (
    <>
     <RouterProvider router={adwumaCraftRouter} />
    </>
  )
}