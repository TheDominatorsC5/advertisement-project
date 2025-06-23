import { ShoppingCart } from "lucide-react";

export default function ProductCards() {

    return (
        <>
            <div className="m-10 border-0 w-[270px] h-[325px]">
                <div className="bg-gray-50 border border-gray-300 shadow-sm hover:outline-none hover:ring-[#29492f] hover:border-green-700 rounded-t-md w-[270px] h-[210px]"></div>

                <div className="border-black rounded-b-md w-[270px] h-[40px] bg-black text-white hover:bg-slate-600 transition duration-300">
                    <button className="w-full h-full flex items-center justify-center space-x-2">
                        <span>
                            <ShoppingCart />
                        </span>
                        <span>
                            Add to Cart
                        </span>
                    </button>
                </div>

                <div className="border border-gray-200 w-[270px] h-[75px] font-semibold text-lg px-2">
                    <p className="leading-none mt-2">Item name here</p>
                    <p className="text-red-500">Price tag here</p>
                </div>
            </div>
        </>
    );
}