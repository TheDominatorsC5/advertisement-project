import React from 'react';
import RotatingHeadings from '../components/RotatingHeadings';

export default function SignUp() {
    return (
        <>
            <div className="bg-[url(./assets/images/africanInspiredPatternSignupScreen.jpg)] rounded text-slate-800 flex items-center justify-center relative h-[100vh] bg-cover bg-center bg-no-repeat">
                <div className="md:flex items-center justify-center gap-8">

                    <div>
                        <div className='sm:w-48 md:w-98'>
                            <RotatingHeadings />
                        </div>
                    </div>

                    <div className="mx-4 md:w-98 p-8 bg-white rounded-xl">
                        <h1></h1>
                        <form action="">
                            <div className='flex gap-4'>
                                <div>
                                    <label htmlFor="userName" class="block font-medium mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                        placeholder="e.g., Yaw Kesse"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="userName" class="block font-medium mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                        placeholder="e.g., Yaw Kesse"
                                    />
                                </div>
                            </div>

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

                            <label htmlFor="userName" class="block font-medium mb-1">Confirm Password</label>
                            <input
                                type="password"
                                name=""
                                id=""
                                class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                placeholder="**********"
                            />

                            <button className="text-sm bg-green-700 text-white hover:bg-[#29492f] transition duration-300 w-full my-6 block py-2 border rounded-md font-semibold">Sign Up</button>

                            <div className="flex items-center">
                                <div className="flex-grow border-t border-gray-500"></div>
                                <span className="mx-2 font-semibold">Already have an account?</span>
                                <div className="flex-grow border-t border-gray-500"></div>
                            </div>

                            <a href="" className="flex justify-center text-green-700 hover:text-[#29492f] font-semibold mt-2">Login</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}