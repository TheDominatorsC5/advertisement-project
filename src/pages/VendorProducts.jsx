
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import CreateModal from '../components/CreateModal';
import { EditIcon, DeleteIcon } from 'lucide-react';


const products = [
    {
        id: 1,
        name: 'Handcrafted Necklace',
        image: 'https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg',
        price: '$45.00',
        category: "Arts & Paintings",
        description: 'Unique handcrafted necklace made with local materials',
        quantity: 12,
    },
    {
        id: 2,
        name: 'Traditional Pottery Vase',
        image: 'https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg',
        price: '$30.00',
        category: "Pottery",
        description: 'Beautifully crafted pottery vase for home decor',
        quantity: 5,
    },
    {
        id: 3,
        name: 'African Wax Print Fabric',
        image: 'https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg',
        price: '$60.00',
        category: "Textiles",
        description: 'High-quality African wax print fabric for clothing and crafts',
        quantity: 20,
    },
    {
        id: 4,
        name: 'Wooden Wall Art',
        image: 'https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg',
        price: '$85.00',
        category: "Wooden Pieces",
        description: 'Beautifully carved wooden wall art piece',
        quantity: 3,
    },
];

function VendorProducts() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null)

    const handleDelete = (id) => {
        // Logic to delete the product
        const shouldDelete = window.confirm("Are you sure you want to delete this product?");
        if (!shouldDelete) return;
        console.log(`Delete product with id: ${id}`);
    }

    const handleEdit = (id) => {
        // Logic to edit the product
        console.log(`Edit product with id: ${id}`);
        const product = products.find(product => product.id === id);
        setProductToEdit(product);
        setIsOpen(true);

    }

    return (
        <div>
            <div className='flex justify-between items-center p-4 shadow-md'>
                <h1 className="text-3xl font-bold my-6">Vendor Products</h1>

                <button onClick={() => setIsOpen(true)} className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                    Add New Product
                </button>
            </div>
            <div className="overflow-x-auto p-6">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="bg-yellow-200 text-yellow-900">
                        <tr>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Image</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Description</th>
                            <th className="py-3 px-4 text-left">Quantity</th>
                            <th className="py-3 px-4 text-left">Menu Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="even:bg-gray-100 odd:bg-gray-200 hover:bg-gray-500 transition-colors">
                                <td className="py-3 px-4">{product.name}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-14 h-14 object-cover rounded-md"
                                    />
                                </td>
                                <td className="py-3 px-4">{product.price}</td>
                                <td className="py-3 px-4 w-60">{product.description}</td>
                                <td className="py-3 px-4">{product.quantity}</td>
                                <td className="py-3 px-4 flex gap-2">
                                    <button onClick={() => handleEdit(product.id)} className="text-emerald-600 cursor-pointer p-2 rounded hover:bg-emerald-700 transition">
                                        <EditIcon className="w-5 h-5 inline-block" />
                                    </button>

                                    <button onClick={() => handleDelete(product.id)} className="text-red-600 cursor-pointer p-2 rounded hover:bg-emerald-700 transition">
                                        <DeleteIcon className="w-5 h-5 inline-block" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isOpen && createPortal(<CreateModal setIsOpen={setIsOpen} product={productToEdit} resetProduct={setProductToEdit} />, document.body)}
        </div>
    )
}

export default VendorProducts