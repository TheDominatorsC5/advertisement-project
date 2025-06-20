import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Barrel, Lamp, Shirt, Amphora, Palette, Sparkles } from "lucide-react";
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

                <div className="flex flex-col justify-around items-start w-full my-10 bg-[#C2CBDA]">
                    <h3 className="text-left px-25 text-3xl font-medium pt-4">
                        New Arrival
                    </h3>
                    <HomeProductCards />
                </div>


            </div>
            
            <Footer />

        </>
    );
}