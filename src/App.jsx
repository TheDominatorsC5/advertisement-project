import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUpUser from "./pages/SignUpUser"
import SignUpVendor from "./pages/SignUpVendor"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import WoovenPieces from "./pages/WoovenPieces"
import Pottery from "./pages/Pottery"
import Accessories from "./pages/Accessories"
import Textile from "./pages/Textile"
import ArtAndPaintings from "./pages/ArtAndPaintings"
import HomeDecor from "./pages/HomeDecor"
import Otp from "./pages/Otp"
import NotFound from "./pages/NotFound"
import VendorsProfile from "./pages/Vendor/VendorsProfile"
import VendorViewProduct from "./pages/Vendor/VendorViewProduct"
import ProductCategoryType from "./pages/Vendor/ProductCategoryType"
import VendorProducts from "./pages/Vendor/VendorProducts"

const adwumaCraftRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signupuser', element: <SignUpUser /> },
  { path: '/signupvendor', element: <SignUpVendor /> },
  { path: '/login', element: <Login /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> },
  { path: '/vendors/profile', element: <VendorsProfile /> },
  { path: '/vendors/products', element: <VendorProducts /> },
  { path: '/vendors/products/:id', element: <VendorViewProduct /> },
  { path: '/vendors/products/categories/:type', element: <ProductCategoryType /> },
  { path: '/woovenpieces', element: <WoovenPieces /> },
  { path: '/pottery', element: <Pottery /> },
  { path: '/accessories', element: <Accessories /> },
  { path: '/textile', element: <Textile /> },
  { path: '/artandpaintings', element: <ArtAndPaintings /> },
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