// import loginPageImage from '../assets/Images/loginPage.jpg';
// import SubmitButton from "../components/SubmitButton"

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

                <div className="flex items-center gap-8">
                    
                    <div className="w-96 p-8 bg-white rounded-xl">
                        <h1></h1>
                        <form action="">

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



                            <div className="flex justify-between">
                                <button className="">Login</button>
                                <button>Forgot Password?</button>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-grow border-t border-gray-500"></div>
                                <span className="mx-2">Don't have an account?</span>
                                <div className="flex-grow border-t border-gray-500"></div>
                            </div>

                            <p className="flex justify-center"> Signup</p>

                        </form>
                    </div>

                    <div className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        <h1>WELCOME</h1>
                        <h1>AKWAABA!</h1>
                    </div>
                </div>
            </div>
        </>
    );
}