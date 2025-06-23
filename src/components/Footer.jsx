import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black h-[50vh] w-full mt-20 text-white" >
            <div className="flex flex-row justify-around w-[90%] mx-auto pt-15 text-xs">
                <div className="flex flex-col w-80">
                    <h6 className="text-lg font-medium pb-2">ADWUMACraft</h6>
                    <p className="leading-5">
                        Is a community-driven eCommerce platform dedicated to showcasing and selling products from local brands, artisans, and small businesses. By offering an easy-to-use online storefront. It gives neighborhood creators broader vsibility and connects buyers directly with them.
                    </p>

                    <div className="flex flex-row gap-4 text pt-5 text-black">
                        <Facebook className="fill-zinc-400 stroke-0" />
                        <Twitter className="fill-zinc-400 stroke-0" />
                        <Instagram className="fill-zinc-400 stroke-1"  />
                        <Linkedin className="fill-zinc-400 stroke-0" />
                    </div>
                </div>

                <div className=" w-30 leading-6 flex flex-col">
                    <h6 className="text-lg font-semibold pb-3">Quick Link</h6>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                </div>

                <div className=" w-30 leading-6 flex flex-col">
                    <h6 className="text-lg font-semibold pb-3">Category</h6>
                    <a href="#">Arts & Painting</a>
                    <a href="#">Accessories</a>
                    <a href="#">Home Decor</a>
                </div>

                <div className=" w-20 leading-6 flex flex-col pt-10">
                    <a href="#">Pottery</a>
                    <a href="#">Textiles</a>
                    <a href="#">Wooden Pieces</a>
                </div>

                <div className=" w-50 leading-6 flex flex-col">
                    <h6 className="text-lg font-bold pb-3">Subscribe</h6>
                    <label htmlFor="">Get 10% Off your first order</label>
                    <input 
                    type="text" 
                    name="email" 
                    id="" 
                    placeholder="Enter your email"
                    className="border bg-transparent w-45 p-1 mt-3" />
                </div>

            </div>

            <div className="flex flex-row justify-center items-center border-t border-gray-600 mt-10 text-xs text-gray-400 w-[90%] mx-auto pt-4">
                    <p>&copy; 2025 All rights reserved | This template is made by Adwuma Craft</p>
                </div>
        </footer>
    );
}