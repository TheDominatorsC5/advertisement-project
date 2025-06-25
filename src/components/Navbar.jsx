import { useState } from 'react';
import { Link } from 'react-router';
import { Store, UserIcon, Menu, X } from 'lucide-react';
import { useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [username, setUserName] = useState()
  useEffect(() => {
    let username = localStorage.getItem("username")
    if (!username) {
      username = ""
    }
    setUserName(username)
  }, [])

  return (
    <nav className="flex flex-col w-full fixed top-0 left-0 shadow-lg z-50">
      {/* Top Banner */}
      <div className="bg-black">
        <div className="text-zinc-300 flex flex-col sm:flex-row justify-center items-center p-3 text-sm space-y-2 sm:space-y-0 sm:space-x-8">
          <p className="text-center">
            One Time Subscription - Get 20% OFF <span className="text-white font-semibold"> Shop Now!</span>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-row justify-around items-center px-6 py-4 bg-white text-black">
        {/* Logo */}
        <h1 className="font-bold text-xl">
          <Link to={"/"}>
            <span className="font-medium">ADWUMA</span>
            <span className="text-[#E6C744] font-extrabold">Craft</span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to={"/"} className="hover:text-red-500">Home</Link>
          <Link to={"/about-us"} className="hover:text-red-500">About</Link>
          <Link to={"/contact"} className="hover:text-red-500">Contact</Link>
          <Link to={"/signupuser"} className="hover:text-red-500">Sign Up</Link>
        </div>

        {/* Icons & Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to={"/vendors/products"}>
            <Store className="hover:text-red-500" />
          </Link>

          <div className='flex items-center'>
              <Link to={"/login"}>
            <UserIcon className="hover:text-red-500" />
          </Link>
          <p className='font-bold text-red-500 text-lg uppercase'>{username}</p>
          </div>
          
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 flex flex-col">
          <Link to={"/"} className="hover:text-red-500">Home</Link>
          <Link to={"/about-us"} className="hover:text-red-500">About</Link>
          <Link to={"/contact"} className="hover:text-red-500">Contact</Link>
          <Link to={"/signup"} className="hover:text-red-500">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
