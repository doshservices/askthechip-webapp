import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import { Loader } from "../components";
import { inform, notify, warn } from "../App";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { api } from "../contexts";

const SignUp = () => {

  const defaultFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
    confirmPassword: "",
  };

  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [formFields, setFormFields] = useState(defaultFormFields);
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token !== null) {
      navigateTo("/home")
    }
  }, [])

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    gender
  } = formFields;

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: value,
    }));

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      gender: value,
    }));
  };

  const redirectToVerifyPage = () => {
    setTimeout(() => {
      navigateTo("/verify");
    }, 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const getIndividualDetails = () => {
    const { firstName, lastName, email, phoneNumber, password } = formFields;
    const { accountType } = selectedOptions;
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      gender,
      role: "USER",
      googleSigned: false,
    };
    return data;
  };
  const individualDetails = getIndividualDetails();

  // console.log(individualDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      inform("Password doesn't match");
      return;
    }
    try {
      const response = await axios.post(`${api}/api/users`, individualDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      setLoading(false)
      console.log(response);
      const email = response?.data?.data?.user?.email;
      localStorage.setItem('verifyMail', JSON.stringify(email));
      notify("Sign up Successful, you'll be redirected to verification page!");
      redirectToVerifyPage();
    } catch (error) {
      setLoading(false);
      warn(error.response.data.message);
      console.log(error);
    }
  }

  return (
    <div className="font-Inter overflow-hidden">
      <ToastContainer />
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[50%] h-screen">
          <Link to="/" className="flex items-center h-16 ml-4 md:ml-20 my-7">
            <div>
              <img src={logo} alt="Ask the chip" />
            </div>
            <div className="font-bold text-primary90 ml-2">Askthechip</div>
          </Link>
          <div className="h-[calc(100vh_-_8rem)] md:h-[calc(100vh_-_10rem)] overflow-y-auto">
            <div className="w-[90%] max-w-[468px] mx-auto h-full">
              <div className="flex flex-col items-center mb-[1.875rem]">
                <h1 className="font-DMSans text-[2rem] font-bold mb-2 uppercase text-[#2d2d2d] text-center">
                  CREATE AN ACCOUNT
                </h1>
                <p className="font-DMSans text-[hsla(0, 0%, 18%, 0.9)] text-center">
                  Fill out the fields below to create your account as a user
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="firstName"
                      className="font-DMSans text-sm mb-2"
                    >
                      First Name
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={handleChange}
                        placeholder="First Name Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="lastName"
                      className="font-DMSans text-sm mb-2"
                    >
                      Last Name
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={handleChange}
                        placeholder="Last Name Here"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="email"
                      className="font-DMSans text-sm mb-2"
                    >
                      Email Address
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email Address Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="phone"
                      className="font-DMSans text-sm mb-2"
                    >
                      Phone Number{" "}
                      <span className="text-[0.7rem]">
                        (Add country code)
                      </span>
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="phoneNumber"
                        id="phone"
                        value={phoneNumber}
                        onChange={handleChange}
                        placeholder="+234 902 360 0083"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="gender" className="font-DMSans text-sm mb-2">
                    Gender
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <select
                      name="gender"
                      value={selectedOptions.gender}
                      onChange={handleSelectChange}
                      className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent"
                    >
                      <option className="text-[1rem]" defaultValue>Select Gender</option>
                      <option className="text-[1rem]" value="Male">MALE</option>
                      <option className="text-[1rem]" value="Female">FEMALE</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                  <div className="flex flex-col mb-2">
                    <label
                      htmlFor="password"
                      className="font-DMSans text-sm mb-2"
                    >
                      Password
                    </label>
                    <div className="flex border border-[#2d2d2d] rounded-full relative">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent w-full pr-[2.5rem]"
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
                        className="flex justify-center items-center mx-3 cursor-pointer absolute right-0 top-[3px]"
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
                    <div className="flex border border-[#2d2d2d] rounded-full relative">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent w-full pr-[2.5rem]"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={handleChange}
                        minLength={8}
                        required
                      />
                      <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="flex justify-center items-center mx-3 cursor-pointer absolute right-0 top-[3px]"
                      >
                        <img
                          className="h-6"
                          src={showConfirmPassword ? crossedEye : eye}
                          alt="Show Password"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-[3.75rem] mb-[1rem]">
                  <button
                    disabled={loading}
                    type="submit"
                    className={
                      loading
                        ? "bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                        : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                    }
                  >
                    {loading ? <Loader /> : "Register"}
                  </button>
                </div>

                <div className="flex justify-center">
                  <div className="font-DMSans text-sm text-center pb-4">
                    Already have an account?{" "}
                    <Link to="/login" className="font-bold text-primary90">
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-[50%] h-screen relative">
          <div className="absolute z-10 top-0 right-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
          <div className="absolute z-10 bottom-0 left-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
          <div className="hidden z-20 md:flex w-full h-[calc(100vh_-_76px)] my-[2.375rem] bg-authImage bg-center bg-contain bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
