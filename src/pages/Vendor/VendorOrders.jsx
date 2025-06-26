import Sidebar from '../../components/Vendor/VendorSidebar';

const orders = [
    {
        orderId: 'ORD-001',
        product: 'Handcrafted Necklace',
        buyer: 'Ama Boakye',
        quantity: 2,
        status: 'Pending',
        date: '2025-06-24',
    },
    {
        orderId: 'ORD-002',
        product: 'Wooden Wall Decor',
        buyer: 'Kojo Mensah',
        quantity: 1,
        status: 'Shipped',
        date: '2025-06-23',
    },
    {
        orderId: 'ORD-003',
        product: 'African Print Fabric',
        buyer: 'Nana Yaa',
        quantity: 3,
        status: 'Delivered',
        date: '2025-06-20',
    },
];

export default function VendorOrders() {
    return (
        <div className="grid grid-cols-12 gap-4 pr-4">
            <Sidebar />
            <div className="col-span-10">
                <div className='flex justify-between items-center shadow-md'>
                    <h1 className="text-3xl font-bold my-6">Vendor Orders</h1>
                </div>
                <div className="overflow-x-auto py-6">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-yellow-200 text-yellow-900 text-left text-sm uppercase font-semibold">
                                <th className="px-4 py-3">Order ID</th>
                                <th className="px-4 py-3">Product</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Quantity</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order.orderId}
                                    className="border-t border-gray-100 even:bg-gray-50"
                                >
                                    <td className="px-4 py-2">{order.orderId}</td>
                                    <td className="px-4 py-2">{order.product}</td>
                                    <td className="px-4 py-2">{order.buyer}</td>
                                    <td className="px-4 py-2">{order.quantity}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'Pending'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : order.status === 'Shipped'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-green-100 text-green-800'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
