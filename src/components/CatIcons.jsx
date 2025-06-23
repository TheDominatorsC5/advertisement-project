import { Barrel, Lamp, Shirt, Amphora, Palette, Sparkles } from 'lucide-react';
import { useState } from 'react';

const category = [
    {
        icon: <Palette className="w-6 h-6 text-black" />,
        label: 'Arts & Paintings',
    },
    {
        icon: <Sparkles className="w-6 h-6 text-black" />,
        label: 'Accessories',
    },
    {
        icon: <Lamp className="w-6 h-6 text-black" />,
        label: 'Home Deco',
    },
    {
        icon: <Amphora className="w-6 h-6 text-black" />,
        label: 'Pottery',
    },
    {
        icon: <Shirt className="w-6 h-6 text-black" />,
        label: 'Textiles',
    },
    {
        icon: <Barrel className="w-6 h-6 text-black" />,
        label: 'Wooden Pieces',
    },
];

export default function CatIcons() {
    const [highlight, setHighlight] = useState(null)

    return (
        <section className="flex flex-wrap justify-center gap-8 px-8 py-20">
            {category.map((category, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHighlight(index)}
                    onMouseLeave={() => setHighlight(null)}
                    className={`flex flex-col items-center p-6 w-44 rounded-lg shadow-md border ${highlight === index ? 'bg-red-500 text-white' : 'bg-white'
                        }`}
                >
                    <div className={`mb-4 p-3 ${highlight === index ? 'bg-white bg-opacity-20 rounded-full' : ''}`}>
                        {category.icon}
                    </div>
                    <p className="text-center text-sm mt-1">{category.label}</p>
                </div>
            ))}
        </section>
    );
}