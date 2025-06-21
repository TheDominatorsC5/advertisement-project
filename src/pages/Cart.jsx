import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
    return (
        <>
            <Navbar />

            <div className="grid grid-flow-row gap-8 mx-8">

                <div>
                    <p className="mb-2 md:my-6">
                        <a href="">Home</a>
                        <span className="mx-2">/</span>
                        <a href="" className="font-bold">Cart</a>
                    </p>
                    <table className="w-full flex-">
                        <tr className="border-gray-500 rounded-md shadow-sm">
                            <th className="py-4">Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                        <tr className="border-gray-500 rounded-md shadow-sm">
                            <td className="py-4"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="border-gray-500 rounded-md shadow-sm">
                            <td className="py-4"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="border-gray-500 rounded-md shadow-sm">
                            <td className="py-4"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="border-gray-500 rounded-md shadow-sm">
                            <td className="py-4"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="border-gray-500 rounded-md shadow-sm">
                            <td className="py-4"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <button className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-4 py-2 my-4 border rounded-md font-semibold">Return To Shop</button>
                </div>


                <div className="w-80 border-2 border-gray-400 p-4 rounded shadow-sm justify-self-end">
                    <h3>Cart Total</h3>
                    <p>Subtotal:</p>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <p>Delivery:</p>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <p>Total:</p>
                    <button>Click to Checkout</button>
                </div>
            </div>
            <Footer />
        </>
    );
}