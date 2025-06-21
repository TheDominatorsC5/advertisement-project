import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
    return (
        <>
            <Navbar />
            <p><span>Home</span><span className="mx-2">/</span><span className="font-bold">Cart</span></p>
            <div>
                <table  className="flex-">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

                <button className="border">Return To Shop</button>

                <div className="w-80 border p-2">
                    <h3>Cart Total</h3>
                    <p>Subtotal:</p>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <p>Delivery:</p>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <p>Total:</p>
                    <button>Click to Checkout</button>
                </div>
            </div>
            <Footer />
        </>
    );
}