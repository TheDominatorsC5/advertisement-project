import { ShoppingCart } from "lucide-react";

export default function ProductCards() {

    return (
        <>
            <div className="border-0 w-[270px] h-[325px]">
                <div className="border hover:border-green-700 hover:ring-2 hover:ring-[#29492f] border-gray-300 w-[270px] h-[210px]"></div>
                <div className="border rounded-b-md w-[270px] h-[40px] bg-black text-white font-semibold">
                    <button clasName="w-[270px] h-[40px] text-center flex gap-2">
                        <span>
                            <ShoppingCart />
                        </span>
                        Add to Cart
                    </button>
                </div>
                <div className="border border-gray-300 w-[270px] h-[75px]">
                    <p className="font-semibold text-lg leading-none mt-2">Item name here</p>
                    <p className="font-semibold text-lg">Price tag here</p>
                </div>
            </div>
        </>
    );
}