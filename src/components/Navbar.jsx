import { ShoppingCart, UserIcon } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex flex-col w-full">
            <div className="bg-black h-full py- items-center">
                <div className="text-zinc-300 flex flex-row justify-center items-center pt-3 text-sm">
                    <p>One Time Subscription - Get 20% OFF <span className="text-white font-semibold"> Shop Now!</span></p>
                </div>


                <div className="flex flex-row justify-end items-center pr-20 ">
                    <select id="languageDropdown" onchange="changeLanguage()" className="border-gray-300 rounded-md text-sm text-zinc-300 focus:ring-blue-500 focus:border-blue-500">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>

            </div>

            <div className="flex flex-row justify-between px-25 py-6 bg-white text-black">
                <h1 className="font-bold text-xl">
                    {/* Logo */}
                    <a href="">
                        <span className="font-medium">ADWUMA</span>
                        <span className="text-[#E6C744] font-extrabold">Craft</span>
                    </a>
                </h1>

                {/* Decktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="hover:text-[#E6C744]">Home</a>
                    {/* <a href="#about" className="hover:text-[#E6C744]">Category</a> */}
                    <a href="#" className="hover:text-[#E6C744]">About</a>
                    <a href="#" className="hover:text-[#E6C744]">Contact</a>
                    <a href="#" className="hover:text-[#E6C744]">Sign Up</a>
                </div>

                <div className="flex flex-row gap-3">
                    <ShoppingCart className="hover:text-[#E6C744]" />
                    <UserIcon className="hover:text-[#E6C744]" />
                </div>

            </div>

        </nav>
    );
}