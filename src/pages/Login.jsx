// import loginPageImage from '../assets/Images/loginPage.jpg';
// import SubmitButton from "../components/SubmitButton"
import RotatingHeadings from '../components/RotatingHeadings';
import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Login() {

    const navigate = useNavigate();

    const [isValidCredentials, setValidCredentials] = useState(true)

    const loginUser = async (data) => {
        try {
            const response = await apiClient.post("/signin", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            
            if (response.data.success) {
                navigate("/");
                setValidCredentials(true);
                // localStorage.setItem("ACCESS_TOKEN", response.data.token)
                // if (response.data.user.role = "vendor") {
                //     navigate("/vendors/products");
                // } else {
                //     navigate("/");
                // }
            } else {
                setValidCredentials(false);
            }
            
        } catch (error) {
            setValidCredentials(false);
        }
    }

    return (
        <>
            {/* <div className="">
                    <img
                        src={loginPageImage} 
                        alt="Wooven items"
                        className="h-[100vh] w-[50%]" />
                </div> */}

            <section className="bg-[url(./assets/images/africanInspiredPatternSignupScreen.jpg)] rounded text-slate-800 relative h-[100vh] flex items-center justify-around bg-cover bg-center bg-no-repeat">

                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                <div className='relative z-10'>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                        <div className="w-96 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-lg p-8">
                            <h1></h1>
                            <form action={loginUser}>
                                <label htmlFor="" class="block font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="e.g., yawkesse369@gmail.com"
                                />
                                <label htmlFor="" class="block font-medium mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="**********"
                                />
                                <div style={{display: !isValidCredentials ? 'flex' : 'none'}} className='mt-[5px]'>
                                    <p style={{
                                        fontSize: '14px',
                                        fontStyle: 'italic',
                                        color: 'maroon',
                                        letterSpacing: '2px'
                                    }} className='italics'>invalid credentials</p>
                                </div>
                                <div className="flex justify-between my-4">

                                    <SubmitButton
                                        className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-8 py-2 border rounded-md font-semibold"
                                        title={"Login"} />
                                    
                                    <button className='text-green-700 hover:text-[#29492f]'><a href="">Forgot Password?</a></button>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Don't have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                                <Link to={"/signupuser"} className="flex justify-center border-white/10 text-green-700 hover:text-[#29492f] font-semibold mt-2">Sign Up</Link>
                            </form>
                        </div>
                        <div className='w-full md:w-98'>
                            <RotatingHeadings />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}