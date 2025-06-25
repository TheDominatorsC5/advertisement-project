import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
// import notfound from "../assets/images/notfound1.svg";
import notfound from "../assets/images/notfound.svg";

export default function NotFound() {
    return (
        <>
            <Navbar />

            <section>
                <div className="flex flex-col justify-center items-center mt-20">
                    <img src={notfound} alt="Not found image" className="h-screen overflow-hidden" />

                    <h1 className="text-3xl font-bold pt-3">Oops!</h1>

                    <p className="text-xl text-zinc-500 pt-4 w-[86%] mx-auto sm:text-center">Your visited page is not found. You may go back to home page</p>

                    <Link to="/">
                        <button className="rounded bg-[#df2f2f] py-3 px-6 my-16 text-sm text-white cursor-pointer">Back to Homepage</button>
                    </Link>

                </div>

            </section>

            <Footer />
        </>
    );
}