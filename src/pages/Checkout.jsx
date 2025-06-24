import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
    return (
        <>
            <Navbar />
            
            <section className="container md:flex justify-evenly items-end text-slate-500 gap-24">
                <div className=" w-full md:w-[45%]">
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
                        <label class="block font-medium mb-1" htmlFor="">Last Name</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
                        <label class="block font-medium mb-1" htmlFor="">Street Address</label>
                        <input
                            type=""
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
                        <label class="block font-medium mb-1" htmlFor="">Appartment, floor, etc,(optional)</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
                        <label class="block font-medium mb-1" htmlFor="">Town / City</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
                        <label class="block font-medium mb-1" htmlFor="">Phone Number</label>
                        <input
                            type="number"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
                        <label class="block font-medium mb-1" htmlFor="">Email Address</label>
                        <input
                            type="email"
                            name=""
                            id=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700" />
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
            </section>            

            <Footer />
        </>
    );
}