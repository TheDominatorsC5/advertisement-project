import { Star } from "lucide-react";

export default function ProductCards() {

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mt-40 w-[20%] mx-auto">
            <img class="w-full h-80 object-center rounded-b-2xl" src="https://i.pinimg.com/736x/4c/7b/59/4c7b59d6c9049e8699f2b6a500c6ad49.jpg" alt="Product Image" />
                <div class="p-4">
                    <h2 class="text-l font-semibold text-gray-800">The "Mona Lisa"</h2>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-green-600">$29.99</span>
                        <button class="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-amber-400 transition-colors">Buy Now</button>
                    </div>
                </div>
        </div>

        

    );
}