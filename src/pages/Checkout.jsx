import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";
import ViewAProduct from "../components/ViewAProduct";

export default function Checkout() {
    return (
        <>
            <Navbar />
            <div className="container md:flex justify-evenly items-end text-slate-500 mx-8">
                <div className=" w-full md:w-[40%]">
                    <p className="mb-2 md:my-6">
                        <a href="">Home</a>
                        <span className="mx-2">/</span>
                        <a href="">Cart</a>
                        <span className="mx-2">/</span>
                        <a href="" className="font-bold">Checkout</a>
                    </p>

                    <h2 className="text-3xl text-black font-semibold mb-8">Billing Details</h2>
                    <form action="">
                        <label class="block font-medium mb-1" htmlFor="">First Name</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                        <label class="block font-medium mb-1" htmlFor="">Last Name</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                        <label class="block font-medium mb-1" htmlFor="">Street Address</label>
                        <input
                            type=""
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                        <label class="block font-medium mb-1" htmlFor="">Appartment, floor, etc,(optional)</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                        <label class="block font-medium mb-1" htmlFor="">Town / City</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                        <label class="block font-medium mb-1" htmlFor="">Phone Number</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                        <label class="block font-medium mb-1" htmlFor="">Email Address</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4]" />
                    </form>
                </div>
                <div className="mt-12">
                    <div></div>
                    <div className="w-80">
                        <p>Subtotal:</p>
                        <div className="flex-grow border-t border-gray-500"></div>
                        <p>Delivery:</p>
                        <div className="flex-grow border-t border-gray-500"></div>
                        <p>Total:</p>
                        <button className="rounded px-8 py-3 mt-8 text-sm font-bold bg-green-700 text-white hover:bg-[#29492f] transition duration-300">Place Order</button>
                    </div>
                </div>
            </div>

            <div>
                <ProductCards />
            </div>
            <div>
                <ViewAProduct />
            </div>

            <Footer />
        </>
    );
}