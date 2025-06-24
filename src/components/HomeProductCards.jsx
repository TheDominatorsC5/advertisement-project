import { Star } from "lucide-react";
import { Link } from "react-router";

export default function HomeProductCards() {

    return (
        <div className="group relative w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl mx-auto mt-10">
            <img
                src="https://image.made-in-china.com/202f0j00kAJiEaTKZnpH/Hot-Sales-Handmade-Woven-Handbag-2PCS-Set-Women-Straw-Shoulder-Bag-Summer-Beach-Large-Neoprene-Tote-Bag-for-Ladies-Bags.webp"
                alt="Product Image"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 px-4 py-6">
                <h2 className="text-lg md:text-xl font-semibold text-white">Product Name</h2>
                <p className="text-white text-xs md:text-sm mt-2">
                    A short description of the product goes here. Highlight features or benefits.
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm md:text-lg font-bold text-green-400">Ghc49.99</span>

                    <Link to="/viewproduct/:id">
                        <button className="bg-green-600 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded hover:bg-[#356137] transition-colors">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
}