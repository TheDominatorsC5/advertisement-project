export default function Otp() {

    return (
        <>
            <section className="h-screen w-full bg-green-500">
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-2">OTP Verification</h2>
                        <p className="text-gray-600 text-center mb-6">Enter the 6-digit code sent to your email</p>

                        <form className="flex justify-center gap-2 mb-6">
                            {Array(6)
                                .fill("")
                                .map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                ))}
                        </form>

                        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300 font-semibold">
                            Verify
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            Didn’t receive the code?{" "}
                            <a href="#" className="text-green-700 hover:underline">
                                Resend
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}