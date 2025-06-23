import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router';

export default function Cart() {
    return (
        <>
            <Navbar />

            <section className="grid grid-flow-row gap-8 mx-8 md:mx-24">

                <div>
                    <p className="mb-2 md:my-6">
                        <a href="">Home</a>
                        <span className="mx-2">/</span>
                        <a href="" className="font-bold">Cart</a>
                    </p>

                    <div className="">
                        <table className="w-full table-auto border-collapse">
                            <tr className="border-gray-500 rounded-md shadow-sm">
                                <th className="py-4 px-4 text-left">Product</th>
                                <th className="py-4 px-4 text-left">Price</th>
                                <th className="py-4 px-4 text-left">Quantity</th>
                                <th className="py-4 px-4 text-left">Subtotal</th>
                            </tr>

                            <tr className="border-b border-gray-300 shadow-sm">
                                <td className="px-4 py-4">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src=""
                                            alt="Product"
                                            className="w-16 h-16 object-cover rounded" />
                                        <span>Selected Product Name</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-left">Price</td>
                                <td className="py-2 px-2 text-left">
                                    <input
                                        type="number"
                                        defaultValue="1" 
                                        min="1"          
                                        className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center"
                                    />
                                </td>
                                <td className="py-4 px-4 text-left">Subtotal</td>
                            </tr>

                            <tr className="border-b border-gray-300 shadow-sm">
                                <td className="py-4"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className="border-b border-gray-300 shadow-sm">
                                <td className="py-4"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className="border-b border-gray-300 shadow-sm">
                                <td className="py-4"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr className="border-b border-gray-300 shadow-sm">
                                <td className="py-4"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <button className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-4 py-2 my-4 border rounded-md font-semibold">Return To Shop</button>
                </div>


                <div className="w-80 border-2 border-gray-400 p-4 rounded shadow-sm justify-self-end">
                    <h3>Cart Total</h3>
                    <p>Subtotal:</p>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <p>Delivery:</p>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <p>Total:</p>
                    <button className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-4 py-2 my-4 border rounded-md font-semibold">Click to Checkout</button>
                </div>
            </section>
            <Footer />
        </>
    );
}