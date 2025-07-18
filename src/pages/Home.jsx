import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Truck, LucideHeadset, ShieldPlus } from "lucide-react";
import ProductCards from "../components/ProductCards";
import HeroSlideshow from "../components/HeroSlideshow.jsx";
import CatIcons from "../components/CatIcons.jsx";
import { Link } from "react-router";
import { apiFetcher } from "../api/client.js";
import useSWR from "swr";
import { ClockLoader } from "react-spinners";


export default function Home() {
    const { data, isLoading, error } = useSWR("/products?limit=6", apiFetcher);

    if (isLoading) {
        return (
            <div>
                <ClockLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>something went wrong</h1>
            </div>
        );
    }


    return (
        <>
            <Navbar />
            <HeroSlideshow />

            <div>
                <div className="flex flex-col justify-center px-25 my-10">
                    <h2 className="text-center text-3xl font-extrabold py-6">Browse <br />By Category</h2>
                    <CatIcons />
                </div>

                <div className="flex flex-col justify-center px-24 py-15 my-10 bg-[#E6C744]">
                    <h3 className="text-center text-4xl font-extrabold">
                        New <br />Arrivals
                    </h3>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6 justify-around w-full mx-auto">
                        {[1, 2, 3, 4, 5, 6].map(n => <HomeProductCards key={n} />)}
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data?.products?.map(product => (
                            <ProductCards key={product.id} product={product} />
                        ))}
                    </div>

                    <Link to="/viewallproduct" className="flex justify-center my-20">
                        <button className="bg-red-500 hover:bg-red-800 text-white px-8 py-2 rounded transition-colors">View All Products</button>
                    </Link>
                </div>

                <div className="flex flex-row justify-evenly items-center my-20 w-[86%] mx-auto">
                    <div className="flex flex-col items-center">
                        <Truck className="rounded-full bg-black stroke-white stroke-1 w-14 h-14 p-3 " />
                        <h4 className="font-semibold mt-3">FREE AND FAST DELIVERY</h4>
                        <p className="text-xs text-zinc-600">Free delivery for all orders above Ghc100</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <LucideHeadset className="rounded-full bg-black stroke-white stroke-1 w-14 h-14 p-3 " />
                        <h4 className="font-semibold mt-3">24/7 CUSTOMER SERVICE</h4>
                        <p className="text-xs text-zinc-600">Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldPlus className="rounded-full bg-black stroke-white stroke-1 w-14 h-14 p-3 " />
                        <h4 className="font-semibold mt-3">MONEY BACK GUARANTEE</h4>
                        <p className="text-xs text-zinc-600">We refund money within 14 days</p>
                    </div>
                </div>


            </div>

            <Footer />

        </>
    );
}