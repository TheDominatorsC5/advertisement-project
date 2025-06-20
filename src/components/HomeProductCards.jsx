import { Star } from "lucide-react";

export default function HomeProductCards() {

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mt-10 w-[80%] mx-auto">
            <img class="w-full h-48 object-cover" src="https://cdn.shopify.com/s/files/1/0518/0993/files/kuba-lampshades_480x480.webp?v=169935209" alt="Product Image" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800">Product Name</h2>
                    <p class="text-gray-600 text-sm mt-2">A short description of the product goes here. Highlight features or benefits.</p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-green-600">$29.99</span>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Buy Now</button>
                    </div>
                </div>
        </div>

    );
}