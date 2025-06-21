import React, { useEffect, useState } from 'react';

export default function RotatingHeadings() {
    // Array of your H1 texts
    const headings = ['WELCOME', 'AKWAABA!'];

    // State to keep track of the currently active heading index
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        // Set up an interval to change the heading every 5 seconds (5000ms)
        const intervalId = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 5000); // Adjust this duration as needed (e.g., 3000 for 3 seconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [headings.length]); // Dependency array: re-run effect if headings array length changes

    return (
        <div className='leading-none mb-4'>
            <div className="relative text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-[100px] overflow-hidden">
                {/*
                    Render both H1 elements.
                    They are absolutely positioned on top of each other.
                    Opacity and z-index are conditionally applied based on currentHeadingIndex
                    to control visibility and enable the fade transition.
                */}
                <h1
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out
                                ${currentHeadingIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    {headings[0]}
                </h1>
                <h1
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out
                                ${currentHeadingIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    {headings[1]}
                </h1>

            </div>
            <div className="flex flex-row py-4 px-2 bg-black text-white justify-center">
                <p className="font-bold text-2xl md:text-3xl lg:text-4xl">

                    <span className="font-medium pr-4">TO</span>
                    <span className="font-medium">ADWUMA</span>
                    <span className="text-[#E6C744] font-extrabold">Craft</span>

                </p>
            </div>
        </div>

    );
}