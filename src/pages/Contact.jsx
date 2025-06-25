import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="h-[30vh]"></div>
            <section className="h-full overflow-hidden">
                <div className="flex flex-row gap-8 w-[80%] justify-between mx-auto">
                    <div className="text-sm w-70 h-100 p-6 sm:max-w-sm rounded shadow-lg bg-white">
                        <div className="flex flex-row gap-2 mb-2">
                            <Phone className="rounded-full bg-red-500 size-7 p-1 stroke-white" />
                            <h1 className="font-semibold text-lg">Call Us</h1>
                        </div>

                        <div className="leading-10">
                            <p>We are available 24/7. 7 days a week.</p>
                            <p>Phone: +233 505 800 100</p>
                        </div>

                        <hr className="my-8" />

                        <div className="flex flex-row gap-2 mb-4">
                            <Mail className="rounded-full bg-red-500 size-7 p-1 stroke-white" />
                            <h2 className="font-semibold text-lg">Write to Us</h2>
                        </div>

                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <div className="leading-10">
                            <p>Email: customer@adwumacraft.com</p>
                            <p>Email: support@adwumacraft.com</p>
                        </div>
                    </div>

                    <form action="" className="text-sm w-160 h-100 p-8 rounded overflow-hidden shadow-lg bg-white">
                        <div className="flex flex-row justify-evenly gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Your Number"
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="text"
                                placeholder="Your Message"
                                className="w-full p-2 h-40 my-8 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-500"></textarea>
                        </div>
                        <button className="bg-red-500 hover:bg-red-800 text-white px-8 py-2 rounded transition-colors mt-4">Send Message</button>
                    </form>


                </div>

            </section>

            <Footer />
        </>


    );
}