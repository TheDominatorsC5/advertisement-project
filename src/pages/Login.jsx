// import loginPageImage from '../assets/Images/loginPage.jpg';
// import SubmitButton from "../components/SubmitButton"
import React from 'react';
import RotatingHeadings from '../components/RotatingHeadings';

export default function Login() {
    return (
        <>
            {/* <div className="">
                    <img
                        src={loginPageImage} 
                        alt="Wooven items"
                        className="h-[100vh] w-[50%]" />
                </div> */}

            <div className="bg-[url(./assets/images/africanInspiredPatternSignupScreen.jpg)] rounded text-slate-800 relative h-[100vh] flex items-center justify-around bg-cover bg-center bg-no-repeat">

                <div className="flex flex-col-reverse md:flex-row items-center gap-8">

                    <div className="w-96 p-8 bg-white rounded-xl">
                        <h1></h1>
                        <form action="">

                            <label htmlFor="email" class="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name=""
                                id=""
                                class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                placeholder="e.g., yawkesse369@gmail.com"
                            />

                            <label htmlFor="userName" class="block font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name=""
                                id=""
                                class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                placeholder="**********"
                            />



                            <div className="flex justify-between my-4">
                                <button className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-8 py-2 border rounded-md font-semibold"><a href="">Login</a></button>
                                <button className='text-green-700 hover:text-[#29492f]'><a href="">Forgot Password?</a></button>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-grow border-t border-gray-500"></div>
                                <span className="mx-2 font-semibold">Don't have an account?</span>
                                <div className="flex-grow border-t border-gray-500"></div>
                            </div>

                            <a href="" className="flex justify-center text-green-700 hover:text-[#29492f] font-semibold mt-2">Sign Up</a>

                        </form>
                    </div>

                    <div className='w-98'>
                        <RotatingHeadings />
                    </div>
                </div>
            </div>
        </>
    );
}