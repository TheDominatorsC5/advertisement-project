import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-20">
            <div className="w-[86%] mx-auto py-10">
                {/* Grid Layout: Responsive Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-xs">

                    {/* Column 1: Brand Description */}
                    <div className="flex flex-col">
                        <h6 className="text-lg font-medium pb-2">ADWUMACraft</h6>
                        <p className="leading-5">
                            Is a community-driven eCommerce platform dedicated to showcasing and selling products from local brands, artisans, and small businesses. By offering an easy-to-use online storefront. It gives neighborhood creators broader visibility and connects buyers directly with them.
                        </p>
                        <div className="flex gap-4 pt-5 text-black">
                            <Facebook className="fill-zinc-400 stroke-0" />
                            <Twitter className="fill-zinc-400 stroke-0" />
                            <Instagram className="fill-zinc-400 stroke-1" />
                            <Linkedin className="fill-zinc-400 stroke-0" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col leading-6">
                        <h6 className="text-lg font-semibold pb-3">Quick Link</h6>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                    </div>

                    {/* Column 3: Category A */}
                    <div className="flex flex-col leading-6">
                        <h6 className="text-lg font-semibold pb-3">Category</h6>
                        <a href="#">Arts & Painting</a>
                        <a href="#">Accessories</a>
                        <a href="#">Home Decor</a>
                    </div>

                    {/* Column 4: Category B */}
                    <div className="flex flex-col leading-6 pt-2 lg:pt-10">
                        <a href="#">Pottery</a>
                        <a href="#">Textiles</a>
                        <a href="#">Wooden Pieces</a>
                    </div>

                    {/* Column 5: Subscribe */}
                    <div className="flex flex-col leading-6">
                        <h6 className="text-lg font-bold pb-3">Subscribe</h6>
                        <label htmlFor="email">Get 10% Off your first order</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="border border-gray-500 bg-transparent p-2 mt-3 text-sm w-full"
                        />
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-600 pt-4 text-xs text-gray-400 text-center">
                    <p>&copy; 2025 All rights reserved | This template is made by Adwuma Craft</p>
                </div>
            </div>
        </footer>

    );
}