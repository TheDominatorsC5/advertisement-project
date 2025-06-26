import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton';
import { apiClient } from "../../api/client";

const CreateModal = ({ mutate, setIsOpen, product, resetProduct }) => {
    const [formData, setFormData] = useState({
        id: product?.id || '',
        images: product?.images || '',
        productName: product?.productName || '',
        category: product?.category || '',
        description: product?.description || '',
        price: product?.price || '',
        quantity: product?.quantity || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (data) => {
        try {
            await apiClient.post("/products/create", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            await mutate();
            setIsOpen(false); 
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const category = ['Arts & Paintings', 'Accessories', 'Home Deco', 'Pottery', 'Textiles', 'Wooden Pieces'];

    return (
        <div
            className="fixed inset-0 flex pb-4 items-center justify-center z-50 bg-black/20 overflow-y-scroll"
            onClick={() => setIsOpen(false)}
        >
            {/* Modal Content */}
            <div
                className=" px-6 py-4 mt-32 bg-white rounded-lg shadow-lg relative w-full max-w-md"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gold-500 hover:text-gold-300 font-bold text-2xl"
                >
                    ×
                </button>

                <form action={handleSubmit}>

                    {/* Modal Header */}
                    <h2 className="text-2xl font-bold text-gold-500 mb-4">{product ? "Edit" : "Create"} Product</h2>

                    {/* Modal Body - Form */}
                    <div className="space-y-3">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Product Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                multiple
                                accept="images/*"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Product Category</label>
                            <select
                                name="category"
                                id="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                            >
                                <option value="" disabled>Select category</option>
                                {category.map((cat, index) => (
                                    <option key={index} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                id="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="Enter product name"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="Enter description"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="Enter price"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="Enter price"
                            />
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            onClick={() => {
                                setIsOpen(false)
                                resetProduct(null);
                            }}
                            className="cursor-pointer text-white bg-red-500 font-semibold py-2 px-4 rounded-lg hover:bg-gold-600 transition"
                        >
                            Cancel
                        </button>
                        <SubmitButton
                            title={product ? "Update" : "Create"}
                            onclick={() =>
                                resetProduct(null)
                            }
                            className="cursor-pointer text-white bg-emerald-600 font-semibold py-2 px-4 rounded-lg hover:bg-gold-600 transition"
                        />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CreateModal;