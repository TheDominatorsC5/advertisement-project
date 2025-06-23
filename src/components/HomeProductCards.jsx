import { Star } from "lucide-react";
import { Link } from "react-router";

export default function HomeProductCards() {

    return (
        <div
            className="group relative max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl mt-10 w-full h-full mx-auto">
            <img
                src="https://image.made-in-china.com/202f0j00kAJiEaTKZnpH/Hot-Sales-Handmade-Woven-Handbag-2PCS-Set-Women-Straw-Shoulder-Bag-Summer-Beach-Large-Neoprene-Tote-Bag-for-Ladies-Bags.webp"
                alt="Product Image"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

            <div className="absolute inset-0 h-40 w-full mt-60 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <div class="p-8">
                    <h2 className="text-xl font-semibold text-white">Product Name</h2>
                    <p class="text-white text-sm mt-2">A short description of the product goes here. Highlight features or benefits.</p>
                    <div className="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-green-400">Ghc49.99</span>

                        <Link to="/viewproduct/:id">
                            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-[#356137] transition-colors">Shop Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );
}