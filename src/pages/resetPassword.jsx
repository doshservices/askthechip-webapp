import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../contexts/index"

const ResetPassword = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    const [num5, setNum5] = useState("");
    const [num6, setNum6] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const num3Ref = useRef(null);
    const num4Ref = useRef(null);
    const num5Ref = useRef(null);
    const num6Ref = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
        newPassword: "",
    });

    const { newPassword } = formFields;

    useEffect(() => {
        const sumValue = num1 + num2 + num3 + num4 + num5 + num6;
        setOtp(sumValue);
    }, [num1, num2, num3, num4, num5, num6]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });

        switch (name) {
            case "num1":
                setNum1(value.slice(0, 1));
                if (value.length === 1) num2Ref.current.focus();
                break;
            case "num2":
                setNum2(value.slice(0, 1));
                if (value.length === 1) num3Ref.current.focus();
                if (value.length === 0) num1Ref.current.focus();
                break;
            case "num3":
                setNum3(value.slice(0, 1));
                if (value.length === 1) num4Ref.current.focus();
                if (value.length === 0) num2Ref.current.focus();
                break;
            case "num4":
                setNum4(value.slice(0, 1));
                if (value.length === 1) num5Ref.current.focus();
                if (value.length === 0) num3Ref.current.focus();
                break;
            case "num5":
                setNum5(value.slice(0, 1));
                if (value.length === 1) num6Ref.current.focus();
                if (value.length === 0) num4Ref.current.focus();
                break;
            case "num6":
                setNum6(value.slice(0, 1));
                if (value.length === 0) num5Ref.current.focus();
                break;
            default:
                break;
        }
    };

    const reset = async (e) => {
        setLoading(true)
        e.preventDefault();
        await axios.post(`${api}/api/users/set-new-password`, {
            otp: otp,
            newPassword: formFields.newPassword
        })
            .then((response) => {
                setLoading(false);
                setTimeout(() => {
                    navigate("/login")
                }, 2000)

            })
            .catch((error) => {
                setLoading(false)
            })
        num1Ref.current.value = "";
        num2Ref.current.value = "";
        num3Ref.current.value = "";
        num4Ref.current.value = "";
        num5Ref.current.value = "";
        num6Ref.current.value = "";
    };

    return (
        <div className="font-Inter overflow-hidden">
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-[50%] h-screen">
                    <Link to="/" className="flex items-center h-16 ml-4 md:ml-20 my-7">
                        <div>
                            <img src={logo} alt="Ask the chip" />
                        </div>
                        <div className="font-bold text-primary90 ml-2">Askthechip</div>
                    </Link>
                    <div className="h-[calc(100vh_-_10rem)] overflow-y-auto">
                        <form onSubmit={reset} className="w-[90%] max-w-[468px] mx-auto h-full">
                            <div className="flex flex-col items-center mb-10">
                                <h1 className="font-DMSans text-[20px] sm:text-[30px] font-bold uppercase text-[#2d2d2d] text-center">
                                    Reset Password
                                </h1>
                                <p className="font-DMSans text-[#2d2d2d90] text-center">
                                    A six digit OPT has been sent to your email. Input OTP below to reset your password
                                </p>
                            </div>
                            <div className="md:my-4 w-full flex items-center justify-between xs:p-4">
                                <input
                                    type="number"
                                    name="num1"
                                    value={num1}
                                    onChange={handleChange}
                                    ref={num1Ref}
                                    autoComplete="off"
                                    required
                                    className="mx-4 h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold md:mx-3"
                                />
                                <input
                                    type="number"
                                    name="num2"
                                    value={num2}
                                    onChange={handleChange}
                                    ref={num2Ref}
                                    autoComplete="off"
                                    required
                                    className="mx-4 h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold md:mx-3"
                                />
                                <input
                                    type="number"
                                    name="num3"
                                    value={num3}
                                    onChange={handleChange}
                                    ref={num3Ref}
                                    autoComplete="off"
                                    required
                                    className="mx-4 h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold md:mx-3"
                                />
                                <input
                                    type="number"
                                    name="num4"
                                    value={num4}
                                    onChange={handleChange}
                                    ref={num4Ref}
                                    autoComplete="off"
                                    required
                                    className="mx-4 h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold md:mx-3"
                                />
                                <input
                                    type="number"
                                    name="num5"
                                    value={num5}
                                    onChange={handleChange}
                                    ref={num5Ref}
                                    autoComplete="off"
                                    required
                                    className="mx-4 h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold md:mx-3"
                                />
                                <input
                                    type="number"
                                    name="num6"
                                    value={num6}
                                    onChange={handleChange}
                                    ref={num6Ref}
                                    autoComplete="off"
                                    required
                                    className="mx-4 h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold md:mx-3"
                                />
                            </div>
                            <div className="flex flex-col mb-2 mt-8">
                                <label
                                    htmlFor="password"
                                    className="font-DMSans text-sm mb-2">
                                    New Password
                                </label>
                                <div className="flex border border-[#2d2d2d] rounded-full">
                                    <input
                                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                        type={showPassword ? "text" : "password"}
                                        name="newPassword"
                                        id="newPassword"
                                        placeholder="Password here"
                                        value={newPassword}
                                        onChange={handleChange}
                                        minLength={8}
                                        required
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="flex justify-center items-center mx-3 cursor-pointer">
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
                                    disabled={loading}
                                    className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                                >
                                    {loading ? "Reseting Password..." : "Reset Password"}
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