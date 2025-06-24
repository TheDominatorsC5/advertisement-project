import { useRef, useState } from "react";

export default function Otp() {

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <>
            <section className="h-screen w-full bg-green-500">
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-2">OTP Verification</h2>
                        <p className="text-gray-600 text-center mb-6">Enter the 6-digit code sent to your email</p>

                        <form className="flex justify-center gap-2 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
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