import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Barrel, Lamp, Shirt, Amphora, Palette, Sparkles } from "lucide-react";
import HomeProductCards from "../components/HomeProductCards";


export default function Home() {
    return (
        <>
            <Navbar />
            <div>

                <div class="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center bg-[url('https://mawuafrica.com/cdn/shop/files/Banner_page_1_9771515c-6f40-44d0-b885-c793f1acbc04.png?v=1676626414&width=3840')]">

                    <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-25 text-white z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                            <span className="font-extralight">Welcome to </span><br />
                            <span className="font-extrabold">ADWUMACraft</span>
                        </h1>
                        <a href="#">
                            <button
                                className="rounded px-8 py-3 mt-16 text-sm font-bold bg-green-700 text-white hover:bg-[#29492f] transition duration-300">
                                SHOP NOW
                            </button>
                        </a>
                    </div>

                </div>

                <div className="flex flex-col h-[40vh] justify-center w-full mx-auto">
                    <h2 className="text-left px-25 text-3xl font-medium pb-8">Browse By Category</h2>
                    <div className="flex flex-row justify-between w-[86%] mx-auto gap-8">
                        <span className="rounded border py-2 px-3 flex flex-col justify-center items-center hover:bg-[#C2CBDA] hover:border-none cursor-pointer">
                            <Palette className="size-10 stroke-1" />
                            <p className="text-center text-xs pt-2">Arts & Paintings</p>
                        </span>
                        <span className="rounded border py-2 px-5 flex flex-col justify-center items-center hover:bg-[#C2CBDA] hover:border-none cursor-pointer">
                            <Sparkles className="size-10 stroke-1" />
                            <p className="text-center text-xs pt-2">Accessories</p>
                        </span>
                        <span className="rounded border py-2 px-5 flex flex-col justify-center items-center hover:bg-[#C2CBDA] hover:border-none cursor-pointer">
                            <Lamp className="size-10 stroke-1" />
                            <p className="text-center text-xs pt-2">Home Deco</p>
                        </span>
                        <span className="rounded border py-2 px-8 flex flex-col justify-center items-center hover:bg-[#C2CBDA] hover:border-none cursor-pointer">
                            <Amphora className="size-10 stroke-1" />
                            <p className="text-center text-xs pt-2">Pottery</p>
                        </span>
                        <span className="rounded border py-2 px-8 flex flex-col justify-center items-center hover:bg-[#C2CBDA] hover:border-none cursor-pointer">
                            <Shirt className="size-10 stroke-1" />
                            <p className="text-center text-xs pt-2">Textiles</p>
                        </span>
                        <span className="rounded border py-2 px-4 flex flex-col justify-center items-center hover:bg-[#C2CBDA] hover:border-none cursor-pointer">
                            <Barrel className="size-10 stroke-1" />
                            <p className="text-center text-xs pt-2">Wooden Pieces</p>
                        </span>
                    </div>

                </div>



                <div className="flex flex-col justify-center w-full h-full bg-[#C2CBDA]">
                    <h3 className="text-left px-25 text-3xl font-medium pb-8">
                        New Arrival
                    </h3>
                </div>


            </div>
            <HomeProductCards />

            <Footer />

        </>
    );
}