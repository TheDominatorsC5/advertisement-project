import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ViewAProduct from "../components/ViewAProduct";

export default function ViewProduct() {
    return (

            <div>
                <Navbar />

                <section className="h-full md:flex justify-between items-end text-slate-700 bg-yellow-200 p-8">
                
                    <div className="md:mx-12">
                        <ViewAProduct />
                    </div>
                </section>

                <Footer />
            </div>
    );
}