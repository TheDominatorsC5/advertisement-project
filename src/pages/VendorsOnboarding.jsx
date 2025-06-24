import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function VendorsOnboardingPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: 'Kwame',
    lastName: 'Kusi',
    email: 'kusi@gmail.com',
    shopName: '',
    shopAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    // localStorage.setItem('vendorData', JSON.stringify(formData));
    const vendorId = Math.floor(Math.random() * 1000); // Simulate vendor ID generation
    navigate(`/vendors/${vendorId}/products`); // Redirect to home page after submission
    // TODO: send data to backend or handle accordingly
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">Complete Onboarding</h2>
        <form action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              readOnly
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none opacity-60 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Shop Name</label>
            <input
              type="text"
              name="shopName"
              required
              value={formData.shopName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Shop Address</label>
            <input
              type="text"
              name="shopAddress"
              required
              value={formData.shopAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
