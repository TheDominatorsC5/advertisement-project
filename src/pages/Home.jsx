import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>

                <div className="relative">
                    <img src="https://mawuafrica.com/cdn/shop/files/Banner_page_1_9771515c-6f40-44d0-b885-c793f1acbc04.png?v=1676626414&width=3840" alt="wooven pots" className="bg-cover bg-no-repeat bg-center h-screen w-full relative" />

                    <div className="flex flex-col justify-center items-center h-full text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                            <span className="font-extralight">Welcome to </span><br />
                            <span className="font-extrabold">ADWUMACraft</span>
                        </h1>
                        <a href="#">
                            <button
                                className="rounded-3xl px-8 py-3 mt-8 text-sm font-bold bg-rose-500 text-white hover:animate-none transition duration-300">
                                SHOP NOW
                            </button>
                        </a>
                    </div>


                </div>



                <div className="h-[60vh] bg-[#C2CBDA]">
                    <h3 className="w-[90%] mx-auto text-4xl">
                        New Arrival
                    </h3>
                </div>


            </div>

            <Footer />

        </>
    );
}