export default function SignUp() {
    return (
        <>
            <div className="bg-[url(./assets/images/africanInspiredPatternSignupScreen.jpg)] rounded text-slate-800 relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
                <div className="flex items-center gap-8">

                    <div className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        <h1>WELCOME</h1>
                        <h1>AKWAABA!</h1>
                    </div>
                    
                    <div className="w-96 p-8 bg-white rounded-xl">
                        <h1></h1>
                        <form action="">
                            <label htmlFor="userName" class="block font-medium mb-1">User Name</label>
                            <input
                                    type="text"
                                    name=""
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                    placeholder="e.g., Yaw Kesse"
                                />
                                <label htmlFor="email" class="block font-medium mb-1">Email</label>
                            <input
                                    type="email"
                                    name=""
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                    placeholder="e.g., yawkesse369@gmail.com"
                                />
                                <label htmlFor="userName" class="block font-medium mb-1">Password</label>
                            <input
                                    type="password"
                                    name=""
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                    placeholder="**********"
                                />
                                <label htmlFor="userName" class="block font-medium mb-1">Confirm Password</label>
                            <input
                                    type="password"
                                    name=""
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                    placeholder="**********"
                                />

                                <button className="w-full my-6 block py-2 border rounded-md font-semibold">Signup</button>

                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Already have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                        
                                <p className="flex justify-center">Login</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}