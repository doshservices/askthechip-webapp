import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";

const ResetPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const defaultFormFields = {
        password: "",
        confirmPassword: "",
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const sendOtp = () => {
        console.log("sent");
    }
    return (
        <div className="font-Inter overflow-hidden bg-light">
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-[50%] h-screen">
                    <Link to="/" className="flex items-center h-16 ml-4 md:ml-20 my-7">
                        <div>
                            <img src={logo} alt="Ask the chip" />
                        </div>
                        <div className="font-bold text-primary90 ml-2">Askthechip</div>
                    </Link>
                    <div className=" h-[calc(100vh_-_10rem)] overflow-y-auto">
                        <form onSubmit={sendOtp} className="w-[90%] max-w-[468px] mx-auto h-full">
                            <div className="flex flex-col items-center mb-10">
                                <h1 className="font-DMSans text-[30px] font-bold uppercase text-[#2d2d2d]">
                                    Reset Password
                                </h1>
                                {/* <p className="font-DMSans text-[#2d2d2d90]">
                                    Forgot Password? No worries, input your email below
                                </p> */}
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    htmlFor="password"
                                    className="font-DMSans text-sm mb-2"
                                >
                                    Password
                                </label>
                                <div className="flex border border-[#2d2d2d] rounded-full">
                                    <input
                                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="Password here"
                                        value={password}
                                        onChange={handleChange}
                                        minLength={8}
                                        required
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="flex justify-center items-center mx-3 cursor-pointer"
                                    >
                                        <img
                                            className="h-6"
                                            src={showPassword ? crossedEye : eye}
                                            alt="Show Password"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    htmlFor="confirmPassword"
                                    className="font-DMSans text-sm mb-2"
                                >
                                    Confirm Password
                                </label>
                                <div className="flex border border-[#2d2d2d] rounded-full">
                                    <input
                                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        minLength={8}
                                        required
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="flex justify-center items-center mx-3 cursor-pointer"
                                    >
                                        <img
                                            className="h-6"
                                            src={showPassword ? crossedEye : eye}
                                            alt="Show Password"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-10">
                                <button
                                    type="submit"
                                    className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden md:flex w-[50%] h-screen relative">
                    <div className="absolute z-10 top-0 right-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
                    <div className="absolute z-10 bottom-0 left-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
                    <div className="hidden z-20 md:flex w-full h-[calc(100vh_-_76px)] my-[2.375rem] bg-authImage bg-center bg-contain bg-no-repeat"></div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;