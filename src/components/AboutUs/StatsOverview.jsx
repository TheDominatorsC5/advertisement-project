import { Store, DollarSign, ShoppingBag, PieChart } from 'lucide-react';
import { useState } from 'react';

const stats = [
    {
        icon: <Store className="w-6 h-6 text-black" />,
        value: '10.5k',
        label: 'Sellers active our site',
    },
    {
        icon: <DollarSign className="w-6 h-6 text-black" />,
        value: '33k',
        label: 'Monthly Product Sale',
    },
    {
        icon: <ShoppingBag className="w-6 h-6 text-black" />,
        value: '45.5k',
        label: 'Customer active in our site',
    },
    {
        icon: <PieChart className="w-6 h-6 text-black" />,
        value: '25k',
        label: 'Annual gross sale in our site',
    },
];

export default function StatsOverview() {
    const [highlight, setHighlight] = useState(null)

    return (
        <section className="flex flex-wrap justify-center gap-6 px-8 py-20">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHighlight(index)}
                    onMouseLeave={() => setHighlight(null)}
                    className={`flex flex-col items-center p-6 w-64 rounded-lg shadow-md border ${highlight === index ? 'bg-red-500 text-white' : 'bg-white'
                        }`}
                >
                    <div className={`mb-4 p-3 ${highlight === index ? 'bg-white bg-opacity-20 rounded-full' : ''}`}>
                        {stat.icon}
                    </div>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-center text-sm mt-1">{stat.label}</p>
                </div>
            ))}
        </section>
    );
}
