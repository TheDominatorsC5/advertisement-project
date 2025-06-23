import { Barrel, Lamp, Shirt, Amphora, Palette, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';


export default function CatIcons() {

    return (
        <section className="flex flex-row justify-around py-20">

            <div className='flex flex-row gap-8'>
                <Link to={"/artandpaintings"}>
                    <button className='flex flex-col items-center p-4 px-8 rounded-lg shadow-md border hover:bg-red-500 hover:text-white'>
                        <Palette className='mb-4 w-10 h-10' />
                        <p className='text-sm'>Arts & Paintings</p>
                    </button>
                </Link>

                <Link to={"/accessories"}>
                    <button className='flex flex-col items-center p-4 px-8 rounded-lg shadow-md border hover:bg-red-500 hover:text-white'>
                        <Sparkles className='mb-4 w-22 h-10' />
                        <p className='text-sm'>Accessories</p>
                    </button>
                </Link>

                <Link to={"/homedecor"}>
                    <button className='flex flex-col items-center p-4 px-8 rounded-lg shadow-md border hover:bg-red-500 hover:text-white'>
                        <Lamp className='mb-4 w-22 h-10' />
                        <p className='text-sm'>Home Decor</p>
                    </button>
                </Link>

                <Link to={"/pottery"}>
                    <button className='flex flex-col items-center p-4 px-8 rounded-lg shadow-md border hover:bg-red-500 hover:text-white'>
                        <Amphora className='mb-4 w-22 h-10' />
                        <p className='text-sm'>Pottery</p>
                    </button>
                </Link>

                <Link to={"/textiles"}>
                    <button className='flex flex-col items-center p-4 px-8 rounded-lg shadow-md border hover:bg-red-500 hover:text-white'>
                        <Shirt className='mb-4 w-22 h-10' />
                        <p className='text-sm'>Textiles</p>
                    </button>
                </Link>

                <Link to={"/woovenpieces"}>
                    <button className='flex flex-col items-center p-4 px-8 rounded-lg shadow-md border hover:bg-red-500 hover:text-white'>
                        <Barrel className='mb-4 w-10 h-10' />
                        <p className='text-sm'>Wooden Pieces</p>
                    </button>
                </Link>

            </div>

        </section>
    );
}