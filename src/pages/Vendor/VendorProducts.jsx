
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router';
import CreateModal from '../../components/Vendor/CreateModal';
import { EditIcon, DeleteIcon, EyeIcon } from 'lucide-react';
import Sidebar from '../../components/Vendor/VendorSidebar';
import { apiFetcher, apiClient } from "../../api/client";
import useSWR from "swr";

function VendorProducts() {
    const { data, isLoading, error } = useSWR(`/products/vendor`, apiFetcher);

    const [isOpen, setIsOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null)

    const handleDelete = async (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this product?");
        if (!shouldDelete) return;
        try {
            const response = await apiClient.delete(`/products/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                }
            });
            console.log(response.data)
            window.location.reload()
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    const handleEdit = (id) => {
        // Logic to edit the product
        console.log(`Edit product with id: ${id}`);
        const product = data[id];
        setProductToEdit(product);
        setIsOpen(true);

    }

    return (
        <div className="grid grid-cols-12 gap-4 pr-4">
            <Sidebar />
            <div className="col-span-10">
                <div className='flex justify-between items-center shadow-md'>
                    <h1 className="text-3xl font-bold my-6">Vendor Products</h1>

                    <button onClick={() => setIsOpen(true)} className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                        Add New Product
                    </button>
                </div>
                <div className="overflow-x-auto py-6">
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
                            {!data ? "" : (data.map((product, index) => (
                                <tr key={index} className="even:bg-gray-100 odd:bg-gray-50 hover:bg-gray-200 transition-colors">
                                    <td className="py-3 px-4">{product.productName}</td>
                                    <td className="py-3 px-4">
                                        <img
                                            src={product.images[0].url}
                                            alt={'product image'}
                                            className="w-14 h-14 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="py-3 px-4">{product.price}</td>
                                    <td className="py-3 px-4 w-60">{product.description}</td>
                                    <td className="py-3 px-4">{product.quantity}</td>
                                    <td className="py-3 px-4 flex gap-2">
                                        <Link to={`/vendors/products/${product.id}`} state={product} className="text-emerald-600 cursor-pointer p-2 rounded hover:bg-emerald-700 transition">
                                            <EyeIcon className="w-5 h-5 inline-block" />
                                        </Link>

                                        <button onClick={() => handleEdit(index)} className="text-emerald-600 cursor-pointer p-2 rounded hover:bg-emerald-700 transition">
                                            <EditIcon className="w-5 h-5 inline-block" />
                                        </button>

                                        <button onClick={() => handleDelete(product.id)} className="text-red-600 cursor-pointer p-2 rounded hover:bg-emerald-700 transition">
                                            <DeleteIcon className="w-5 h-5 inline-block" />
                                        </button>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    </table>
                </div>
                {isOpen && createPortal(<CreateModal setIsOpen={setIsOpen} product={productToEdit} resetProduct={setProductToEdit} />, document.body)}
            </div>
        </div>
    )
}

export default VendorProducts