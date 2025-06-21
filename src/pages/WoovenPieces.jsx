import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";
import React from 'react';
// import ImageSlider from '../components/ImageSlider';
import Carousel3D from "../components/Carousel3D";



export default function WoovenPieces() {
    return (
        <>
            <Navbar />
            <div>
                {/* <h1>WELCOME TO ART AND PAINTINGS PAGE</h1> */}
                {/* <div className="min-h-screen flex items-center justify-center p-6 bg-yellow-200">
                  <ImageSlider images={images} />
                </div> */}
            </div>

            <div className="p-6 bg-amber-50 rounded-b-4xl">
                <h1 className="text-2xl text-amber-200 font-bold text-center mb-6">Shop the Spirit of Africa</h1>


                {/* 3D Image Slider */}
                <Carousel3D />

                {/* Optional: Add more content below */}
                <p className="text-center mt-6 text-gray-700 font-black">
                    Journey Through African Craftmanship With <span className="text-black font-extrabold">ADWUMA</span><span className="text-[#E6C744] font-extrabold">Craft</span>
                </p>
            </div>
            <div className="grid grid-cols-4 ">
                {[1, 2, 3, 4, 5, 6, 7, 8,].map(n => <ProductCards key={n} />)}
            </div>
            <Footer />
        </>
    );
}
            
    
