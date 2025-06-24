import React from 'react';
import { Link } from 'react-router';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";
import Carousel3D from "../components/Carousel3D";

export default function Textile() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="bg-amber-50 rounded-b-4xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl sm:text-3xl text-[#32DC83] font-bold text-center mb-6">
                    Shop the Spirit of Africa
                </h1>
                <Carousel3D />
                <p className="text-center mt-6 text-gray-700 font-black text-lg sm:text-xl">
                    Journey Through African Craftmanship With <span className="text-black font-extrabold">ADWUMA</span><span className="text-[#E6C744] font-extrabold">Craft</span>
                </p>
            </div>

            {/* Sort Dropdown */}
            <div className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <label className="text-xl font-medium text-gray-900">Filter by:</label>
                    <select
                        name="sort-by"
                        id="sort-by"
                        className="bg-white p-2 rounded-md border border-gray-300 shadow-sm w-full sm:w-64"
                    >
                        <option selected disabled>SORT BY</option>
                        <option value="category">Category</option>
                        <option value="product name">Product Name</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
                {/* Sidebar */}
                <aside className="lg:w-1/4 h-[40%] bg-white p-4 rounded-lg shadow-md">
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
                            <Link to="/woovenpieces" ><button className="block w-full text-left hover:text-amber-500 transition font-medium">Wooven Pieces</button>       
                            </Link>
                        </li>
                    </ul>
                </aside>

                {/* Product Grid */}
                <section className="lg:w-3/4 bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-xl font-medium text-gray-900 text-center mb-6">PRODUCTS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <ProductCards key={n} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
