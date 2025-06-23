import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Truck, LucideHeadset, ShieldPlus } from "lucide-react";
import HomeProductCards from "../components/HomeProductCards";
import HeroSlideshow from "../components/HeroSlideshow.jsx";
import CatIcons from "../components/CatIcons.jsx";


export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSlideshow />

            <div>

                <div className="flex flex-col justify-center w-full my-10">
                    <h2 className="text-left px-25 text-3xl font-medium pt-4">Browse By Category</h2>
                    <CatIcons />
                </div>

                <div className="flex flex-col justify-between items-start w-full h-full my-10 bg-[#C2CBDA]">
                    <h3 className="text-left px-25 text-3xl font-medium pt-4">
                        New Arrival
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6 mx-auto">
                        {[1, 2, 3].map(n => <HomeProductCards key={n} /> )}

                    </div>
                </div>

                <div className="flex flex-row justify-evenly items-center my-20">
                    <div className="flex flex-col items-center">
                        <Truck className="rounded-full bg-black stroke-white stroke-1 w-14 h-14 p-3 " />
                        <h4 className="font-bold mt-3">FREE AND FAST DELIVERY</h4>
                        <p className="text-xs">Free delivery for all orders above Ghc100</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <LucideHeadset className="rounded-full bg-black stroke-white stroke-1 w-14 h-14 p-3 " />
                        <h4 className="font-bold mt-3">24/7 CUSTOMER SERVICE</h4>
                        <p className="text-xs">Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldPlus className="rounded-full bg-black stroke-white stroke-1 w-14 h-14 p-3 " />
                        <h4 className="font-bold mt-3">MONEY BACK GUARANTEE</h4>
                        <p className="text-xs">We refund money within 14 days</p>
                    </div>
                </div>


            </div>

            <Footer />

        </>
    );
}