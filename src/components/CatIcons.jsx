import { Barrel, Lamp, Shirt, Amphora, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router';


export default function CatIcons() {

    return (
        <section className="py-10 px-4 md:px-10">
            <div className="flex flex-wrap justify-center gap-6">
                <Link to={"/artandpaintings"}>
                    <button className="flex flex-col items-center p-4 px-6 rounded-lg shadow-md border hover:bg-red-500 hover:text-white w-36">
                        <Palette className="mb-3 w-10 h-10" />
                        <p className="text-sm text-center">Arts & Paintings</p>
                    </button>
                </Link>

                <Link to={"/accessories"}>
                    <button className="flex flex-col items-center p-4 px-6 rounded-lg shadow-md border hover:bg-red-500 hover:text-white w-36">
                        <Sparkles className="mb-3 w-10 h-10" />
                        <p className="text-sm text-center">Accessories</p>
                    </button>
                </Link>

                <Link to={"/homedecor"}>
                    <button className="flex flex-col items-center p-4 px-6 rounded-lg shadow-md border hover:bg-red-500 hover:text-white w-36">
                        <Lamp className="mb-3 w-10 h-10" />
                        <p className="text-sm text-center">Home Decor</p>
                    </button>
                </Link>

                <Link to={"/pottery"}>
                    <button className="flex flex-col items-center p-4 px-6 rounded-lg shadow-md border hover:bg-red-500 hover:text-white w-36">
                        <Amphora className="mb-3 w-10 h-10" />
                        <p className="text-sm text-center">Pottery</p>
                    </button>
                </Link>

                <Link to={"/textiles"}>
                    <button className="flex flex-col items-center p-4 px-6 rounded-lg shadow-md border hover:bg-red-500 hover:text-white w-36">
                        <Shirt className="mb-3 w-10 h-10" />
                        <p className="text-sm text-center">Textiles</p>
                    </button>
                </Link>

                <Link to={"/woovenpieces"}>
                    <button className="flex flex-col items-center p-4 px-6 rounded-lg shadow-md border hover:bg-red-500 hover:text-white w-36">
                        <Barrel className="mb-3 w-10 h-10" />
                        <p className="text-sm text-center">Wooden Pieces</p>
                    </button>
                </Link>
            </div>
        </section>

    );
}