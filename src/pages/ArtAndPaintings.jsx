import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";
import React from 'react';
// import ImageSlider from '../components/ImageSlider';
import Carousel3D from "../components/Carousel3D";

// const images = [
//   'https://i.pinimg.com/736x/9c/7e/6a/9c7e6a161a7bf13ba0b844c3e3aece82.jpg',
//   'https://i.pinimg.com/736x/3f/fd/97/3ffd970f0cf382ca731aae036cb1b256.jpg',
//   'https://i.pinimg.com/736x/fe/81/cc/fe81ccd3400bd0328ef2b64fad92b7cb.jpg'
// ];


export default function ArtAndPaintings() {
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
            <div className="gap-4 mt-40">
                
                <div className="flex flex-col justify-items-end w-[10%] border-0">
                <label className="text-xl font-medium text-gray-900 text-left gap-3"></label>
                    <select name="sort-by" id="sort-by" className="bg-white p-2 ">
                        <option selected disabled>SORT BY</option>
                        <option value="acient">Ancient</option>
                        <option value="modern">Modern</option>
                    </select></div>
                    
               <h4 className="text-xl font-medium text-gray-900 text-center gap-3">PRODUCTS</h4>
                
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-6">
                {[1, 2, 3, 4, 5, 6, 7, 8,].map(n => <ProductCards key={n} />)}
            </div>
            <Footer />
        </>
    );
}

                
                    