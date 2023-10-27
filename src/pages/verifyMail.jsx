import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/ask.svg";
import { Footer, Navbar } from "../components";
import { notify, warn } from "../App";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext/AuthContext";

const SetNewPassword = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    const [num5, setNum5] = useState("");
    const [num6, setNum6] = useState("");
    const [otp, setOtp] = useState("");

    const defaultFormFields = {
        otp: otp,
        newPassword: "",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { opt, newPassword } = formFields;

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const num3Ref = useRef(null);
    const num4Ref = useRef(null);
    const num5Ref = useRef(null);
    const num6Ref = useRef(null);

    const { user, token } = useAuth()

    const userMail = JSON.parse(localStorage.getItem("ask-u-mail"))

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
    useEffect(() => {
        const sumValue = num1 + num2 + num3 + num4 + num5 + num6;
        setOtp(sumValue);
    }, [num1, num2, num3, num4, num5, num6]);

    const navigate = useNavigate()

    const redirectToHome = () => {
        setTimeout(() => {
            navigate("/reset-password");
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        num1Ref.current.value = "";
        num2Ref.current.value = "";
        num3Ref.current.value = "";
        num4Ref.current.value = "";
        num5Ref.current.value = "";
        num6Ref.current.value = "";
        const url = 'https://askthechip-hvp93.ondigitalocean.app/api/users/verify'
        if (otp.length === 6) {
            setLoading(true);
            axios.post(url, { otp }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            }).then((response) => {
                // console.log(response);
                notify("Email verification successful, you're being redirected")
                redirectToHome();
                setLoading(false);
            })
                .catch((error) => {
                    setLoading(false);
                    notify(error.message);
                })
        } else {
            setError("Fill in all feilds completley!!!")
        }
    };

    return (
        <div className="font-Inter overflow-hidden">
            <div className="flex md:hidden">
                <Navbar />
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-[50%] h-full md:h-screen">
                    <Link to="/" className="hidden md:flex items-center h-16 ml-4 md:ml-20 my-7">
                        <div>
                            <img src={logo} alt="Ask the chip" />
                        </div>
                        <div className="font-bold text-primary90 ml-2">Askthechip</div>
                    </Link>
                    <div className="h-full md:h-[calc(100vh_-_10rem)] overflow-y-auto mt-28 md:mt-0">
                        <div className="w-[90%] max-w-[468px] mx-auto h-full flex flex-col justify-between">
                            <div className="flex flex-col items-center mb-[1.875rem]">
                                <h1 className="font-DMSans text-[30px] font-bold mb-2 uppercase text-[#2d2d2d]">
                                    Set New Pasword
                                </h1>
                                <p className="font-DMSans text-[#2d2d2d90] text-center">
                                    A One-Time Password has been sent to {userMail}
                                </p>
                            </div>
                            {error ? <p className="font-DMSans text-[1.2rem] text-[#FF3B30] text-center">
                                {error}
                            </p> : ""}
                            <div>
                                <form className="flex flex-col items-center justify-center">
                                    <div className="mt-4 md:my-8 w-full flex items-center justify-between xs:p-4">
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
                                </form>
                            </div>
                            <div>
                                <div className="flex justify-center mt-[3.75rem] mb-[0.625rem]">
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                                    >
                                        {loading ? "Setting Password..." : "Set Password"}
                                    </button>
                                </div>
                                <div className="font-DMSans text-sm text-center pb-4">
                                    Already have an account?{" "}
                                    <Link to="/login" className="font-bold text-primary90">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <Footer />
                </div>
                <div className="hidden md:flex w-[50%] h-screen relative">
                    <div className="absolute -z-10 top-0 right-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
                    <div className="absolute -z-10 bottom-0 left-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
                    <div className="hidden md:flex w-full h-[calc(100vh_-_76px)] my-[2.375rem] bg-authImage bg-center bg-contain bg-no-repeat"></div>
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
