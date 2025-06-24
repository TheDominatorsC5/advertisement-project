import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const heroImages = [
    'https://mawuafrica.com/cdn/shop/files/Banner_page_1_9771515c-6f40-44d0-b885-c793f1acbc04.png?v=1676626414&width=3840',
    'https://plus.unsplash.com/premium_photo-1702088084941-912fa584cd75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1590269275103-a45074739058?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661683887049-69e8ae0a6c92?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://cdn.pixabay.com/photo/2019/02/22/19/17/african-4014226_1280.jpg',
];

export default function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(slideInterval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden my-25">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out bg-blue-300 bg-opacity-60 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    
                </div>
            ))}

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-24 text-white z-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    <span className="font-extralight">Welcome to </span>
                    <br />
                    <span className="font-extrabold">ADWUMACraft</span>
                </h1>
                <Link to="/login">
                    <button className="rounded px-12 py-3 mt-16 text-sm font-bold bg-red-500 text-white hover:bg-red-800 transition duration-300 animate-bounce">
                        GET STARTED
                    </button>
                </Link>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}


