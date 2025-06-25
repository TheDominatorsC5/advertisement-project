import React, { useState } from 'react';
import { Link } from 'react-router';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";
import Carousel3D from "../components/Carousel3D";
import { SearchIcon } from 'lucide-react';
import { apiFetcher } from '../api/client';
import useSWR from 'swr';
import { ClockLoader } from 'react-spinners';

export default function WoovenPieces() {
    const [searchTerm, setSearchTerm] = useState('');

    const { data, isLoading, error } = useSWR("/products/search?category=Wooden Pieces", apiFetcher)

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

    const sampleProducts = [
        { id: 1, name: 'Wooden Kente Mask', price: 80, category: 'Wooden Pieces' },
        { id: 2, name: 'Beaded Necklace', price: 25, category: 'Accessories' },
        { id: 3, name: 'Textile Print', price: 40, category: 'Textiles' },
        { id: 4, name: 'African Home Decor', price: 120, category: 'Home Decor' },
        { id: 5, name: 'Sunset Painting', price: 100, category: 'Arts and Paintings' },
        { id: 6, name: 'Ceramic Pot', price: 150, category: 'Pottery' },
    ];

    const filteredProducts = sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price.toString().includes(searchTerm)
    );



    return (
        <>
            <Navbar />
            <div className='h-[20vh]'></div>
            {/* Hero Section */}
            <div className="bg-linear-65 from-amber-300 to-green-100 rounded-b-4xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl font-extrabold sm:text-3xl text-[#0b0c0c] text-center mb-6">
                    Shop the Spirit of Africa
                </h1>
                <Carousel3D />
                <p className="text-center mt-6 text-gray-700 font-black text-lg sm:text-xl">
                    Journey Through African Craftmanship With <span className="text-black font-extrabold">ADWUMA</span><span className="text-[#E6C744] font-extrabold">Craft</span>
                </p>
            </div>


            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-6">
                <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
                    <input
                        type="text"
                        placeholder="Search by name, category, or price..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-3 pl-4 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 "
                    />
                    <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
            </div>


            {/* Main Content Section */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 mt-10">


                {/* Sidebar */}
                <aside className="lg:w-1/4 h-[40%]  bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Categories</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/artandpaintings"><button className="block w-full text-left hover:text-amber-500 transition font-medium">Arts and Paintings</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/accessories" ><button className="block w-full text-left hover:text-amber-500 transition font-medium">Accessories</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/homedecor" ><button className="block w-full text-left hover:text-amber-500 transition font-medium">Home Decor</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/textile" className="block w-full text-left hover:text-amber-500 transition font-medium">
                                Textiles
                            </Link>
                        </li>
                        <li>
                            <Link to="/woovenpieces" ><button className="block w-full text-left hover:text-amber-500 transition font-medium">Wooden Pieces</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pottery" ><button className="block w-full text-left hover:text-amber-500 transition font-medium">Pottery</button>
                            </Link>
                        </li>
                    </ul>
                </aside>


                {/* Product Grid */}
                <section className="lg:w-3/4 bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-xl font-medium text-gray-900 text-center mb-6">
                        WOODEN PIECES</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data?.products?.map(product => (
                            <ProductCards key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
