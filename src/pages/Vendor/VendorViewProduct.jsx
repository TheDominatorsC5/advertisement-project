import { EditIcon, DeleteIcon } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import CreateModal from '../../components/Vendor/CreateModal';
import Sidebar from '../../components/Vendor/VendorSidebar';

export default function VendorProductView() {
    const product = {
        id: 1,
        name: "Handwoven Basket",
        category: "Home Decor",
        price: "₵120",
        images: [
            "https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg",
            "https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg",
            "https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg",
        ],
        description:
            "This handwoven basket is crafted by local artisans using traditional methods and eco-friendly materials. Perfect for décor or storage.",
        quantity: 30,
        dateAdded: "June 20, 2025",
    };

    const [isOpen, setIsOpen] = useState(false);
    const [mainImage, setMainImage] = useState(product.images[0]);

    const handleDelete = (id) => {
        // Logic to delete the product
        const shouldDelete = window.confirm("Are you sure you want to delete this product?");
        if (!shouldDelete) return;
        console.log(`Delete product with id: ${id}`);
    }

    const handleEdit = (id) => {
        // Logic to edit the product
        console.log(`Edit product with id: ${id}`);
        setIsOpen(true);

    }

    return (
        <div className="grid grid-cols-12 gap-4 pr-4">
            <Sidebar />
            <div className="col-span-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-10">
                    <div className="h-72 w-full overflow-hidden">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-full object-cover transition-all duration-300"
                        />
                    </div>

                    <div className="flex gap-2 p-4 overflow-x-auto">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setMainImage(img)}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? "border-emerald-600" : "border-transparent"
                                    } hover:border-gold-600 transition`}
                            />
                        ))}
                    </div>

                    <div className="px-6 pb-6">
                        <h2 className="text-3xl font-bold text-emerald-800">{product.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                        <p className="text-xl text-gold-700 font-semibold mt-4">{product.price}</p>

                        <div className="mt-4 text-gray-700">
                            <h4 className="font-medium text-lg mb-1">Description:</h4>
                            <p>{product.description}</p>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                            <p><span className="font-medium">Stock Status:</span> {product.quantity == 0 ? "Off Stock" : "In Stock"}</p>
                            <p><span className="font-medium">Date Added:</span> {product.dateAdded}</p>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <button onClick={() => handleEdit(product.id)} className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                                <EditIcon /> Edit Product
                            </button>
                            <button onClick={() => handleDelete(product.id)} className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                                <DeleteIcon /> Delete Product
                            </button>
                        </div>
                    </div>
                    {isOpen && createPortal(<CreateModal setIsOpen={setIsOpen} product={product} resetProduct={() => { }} />, document.body)}
                </div>
            </div>
        </div>
    );
}
