import RotatingHeadings from '../components/RotatingHeadings';
import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import { BriefcaseBusiness, UserCheck } from 'lucide-react';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';
import { useState } from "react"

export default function SignUpUser() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const signUpUser = async (data) => {
        try {
            const response = await apiClient.post("/signup", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            navigate("/otp", {
                state: { email: response.data.email }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="bg-[url(./assets/images/africanInspiredPatternSignupScreen.jpg)] rounded text-slate-800 flex items-center justify-center relative h-[100vh] bg-cover bg-center bg-no-repeat">

                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                <div className='relative z-10'>
                    <div className="md:flex items-center justify-center gap-8">
                        <div>
                            <div className='w-98'>
                                <RotatingHeadings />
                            </div>
                        </div>
                        <div className="mx-4 md:w-98 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-lg p-8">
                            <h1></h1>
                            <form action={signUpUser}>

                                <div className="w-full flex flex-row justify-around mb-2">

                                    <div className="flex flex-col items-center">
                                        <span className="border py-2 px-6 rounded-md shadow-sm bg-green-700 text-white hover:bg-[#29492f] transition duration-300">
                                            <UserCheck />
                                        </span>
                                        <p className="text-green-700 font-semibold">User</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <span className="border border-gray-500 py-2 px-6 rounded-md hover:bg-[#29492f] transition duration-300 hover:text-white">
                                            <Link to={"/SignUpVendor"}>
                                                <BriefcaseBusiness />
                                            </Link>
                                        </span>
                                        <p className="text-green-700 font-semibold">Vendor</p>
                                    </div>

                                </div>

                                <hr className='text-green-700 mb-2' />

                                <div className='flex gap-4'>

                                    <div>
                                        <label class="block font-medium">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id=""
                                            class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                            placeholder="e.g., Yaw"
                                        />
                                    </div>

                                    <div>
                                        <label class="block font-medium">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id=""
                                            class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                            placeholder="e.g., Kesse"
                                        />
                                    </div>
                                </div>

                                <label class="block mt-1  font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="e.g., yawkesse369@gmail.com"
                                />

                                <label class="block mt-1  font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="**********"
                                />

                                <label class="block mt-1  font-medium">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id=""
                                    class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="**********"
                                />

                                <SubmitButton
                                    className="text-sm bg-green-700 text-white hover:bg-[#29492f] transition duration-300 w-full my-4 block py-2 border rounded-md font-semibold"
                                    title={"Sign Up"} />

                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Already have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                                <Link to={"/login"} className="flex justify-center border-white/10 text-green-700 hover:text-[#29492f] font-semibold mt-2">Login</Link>
                            </form>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}