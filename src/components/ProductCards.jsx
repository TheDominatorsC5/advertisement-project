import { Star } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function ProductCards({ product }) {
    const navigate = useNavigate();

    return (
        <div
            className="group relative max-w-sm rounded overflow-hidden shadow-lg bg-white 
            hover:shadow-xl mt-10 w-full mx-auto">
            {/* <img
                src="https://image.made-in-china.com/202f0j00kAJiEaTKZnpH/Hot-Sales-Handmade-Woven-Handbag-2PCS-Set-Women-Straw-Shoulder-Bag-Summer-Beach-Large-Neoprene-Tote-Bag-for-Ladies-Bags.webp"
                alt="Product Image"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105" /> */}
            <img
                src={product.images[0]?.url}
                alt="Product Image"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105" />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 px-4 py-2">
                <h2 className="text-lg md:text-xl font-semibold text-white">{product.productName}</h2>
                <p class="text-white text-xm md:text-sm mt-2">{product.description}.</p>
                <p className="text-green-600 text-sm font-bold mt-1.5">Available</p>
                <div className="flex items-center justify-between mt-4">
                    <span class="text-sm md:text-lg font-bold text-green-400">₵{product.price}</span>

                    <Link onClick={()=>{navigate(`/viewproduct?id=${product.id}`, {state: {product: product}})}}>
                        <button className="bg-green-600 text-white text-xs md:text-sm px-3 md:px-4  py-1.5 md:py-2 rounded hover:bg-[#356137] transition-colors">Shop Now</button>

                    </Link>
                </div>
            </div>

        </div>

    );
}