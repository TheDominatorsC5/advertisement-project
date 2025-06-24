import { useState } from 'react';

const CreateModal = ({ setIsOpen, product, resetProduct }) => {
    const [formData, setFormData] = useState({
        id: product?.id || '',
        image: product?.image || '',
        name: product?.name || '',
        category: product?.category || '',
        description: product?.description || '',
        price: product?.price || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('New Product:', formData);
        setIsOpen(false); // Close modal after submission (add actual logic here)
    };

    const category = ['Arts & Paintings', 'Accessories', 'Home Deco', 'Pottery', 'Textiles', 'Wooden Pieces'];

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/20"
            onClick={() => setIsOpen(false)}
        >
            {/* Modal Content */}
            <div
                className=" p-6 bg-white rounded-lg shadow-lg relative w-full max-w-md"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gold-500 hover:text-gold-300 font-bold text-2xl"
                >
                    ×
                </button>

                {/* Modal Header */}
                <h2 className="text-2xl font-bold text-gold-500 mb-4">{product ? "Edit" : "Create"} Product</h2>

                {/* Modal Body - Form */}
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white">Product Image</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Product Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
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
                        <label className="block text-sm font-medium text-white">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Enter description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-400 h-14 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Enter price"
                        />
                    </div>
                </form>

                {/* Modal Footer */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={() => {
                            setIsOpen(false)
                            resetProduct(null);
                        }}
                        className="text-white bg-red-500 font-semibold py-2 px-4 rounded-lg hover:bg-gold-600 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={() => {
                            handleSubmit()
                            resetProduct(null);
                        }}
                        className="text-white bg-emerald-600 font-semibold py-2 px-4 rounded-lg hover:bg-gold-600 transition"
                    >
                        {product ? "Update" : "Create"}
                    </button>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gold-500 transform -translate-y-8 -translate-x-4 rotate-45"></div>
            </div>
        </div>
    );
};

export default CreateModal;