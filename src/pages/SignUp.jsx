import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import googleLogo from "../assets/icons/google-logo.svg";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  type: "",
  password: "",
  confirmPassword: ""
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { firstName, lastName, email, phone, type, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="font-Inter overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[50%] h-screen">
          <Link to="/" className="flex items-center h-16 ml-4 md:ml-20 my-7">
            <div>
              <img src={logo} alt="Ask the chip" />
            </div>
            <div className="font-bold text-primary90 ml-2">
              Askthechip
            </div>
          </Link>
          <div className=" h-[calc(100vh_-_10rem)] overflow-y-auto">
            <form className="w-[90%] max-w-[468px] mx-auto h-full">
              <div className="flex flex-col items-center mb-10">
                <h1 className="font-DMSans text-[30px] font-bold mb-2 uppercase text-[#2d2d2d]">
                  Create an account
                </h1>
                <p className="font-DMSans text-[#2d2d2d90]">
                  Fill out the fields below to create your account
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col mb-5">
                  <label htmlFor="firstName" className="font-DMSans text-sm mb-2">
                    First Name
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs"
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
                  <label htmlFor="lastName" className="font-DMSans text-sm mb-2">
                    Last Name
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs"
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
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col mb-5">
                  <label htmlFor="email" className="font-DMSans text-sm mb-2">
                    Email Address
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs"
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
                  <label htmlFor="phone" className="font-DMSans text-sm mb-2">
                    Phone Number <span className="text-[0.5625rem]">(Add country code)</span>
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs"
                      type="number"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={handleChange}
                      placeholder="+234 902 360 0083"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="font-DMSans text-sm mb-2">
                  Account Type
                </label>
                <div className="border border-[#2d2d2d] rounded-full">
                  <select className="rounded-full py-2 px-5 w-full outline-none text-xs">
                    <option disabled>Select Account Type</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col mb-2">
                  <label htmlFor="password" className="font-DMSans text-sm mb-2">
                    Password
                  </label>
                  <div className="flex border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password here"
                      value={password}
                      onChange={handleChange}
                      minLength={8}
                      required
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className='flex justify-center items-center mx-3 cursor-pointer'>
                      <img className='h-6' src={showPassword ? crossedEye : eye} alt="Show Password" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="confirmPassword" className="font-DMSans text-sm mb-2">
                    Confirm Password
                  </label>
                  <div className="flex border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs"
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={handleChange}
                      minLength={8}
                      required
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className='flex justify-center items-center mx-3 cursor-pointer'>
                      <img className='h-6' src={showPassword ? crossedEye : eye} alt="Show Password" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[3.75rem]">
                <button type="submit" className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300">
                  Create Account
                </button>
              </div>
              <div className="flex justify-center my-2 font-DMSans font-medium text-sm">
                OR
              </div>
              <div className="flex justify-center mb-2">
                <button type="button" className="flex items-center justify-center bg-transparent border border-primary80 text-primary80 text-sm font-DMSans font-medium w-full text-center rounded-full">
                  <img src={googleLogo} alt="Google Logo" className="h-8" />
                  Continue with Google
                </button>
              </div>
              <div className="font-DMSans text-sm text-center">
                Already have an account? <Link to="/login" className="font-bold text-primary90">Login</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex w-[50%] h-screen relative">
          <div className="absolute -z-10 top-0 right-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
          <div className="absolute -z-10 bottom-0 left-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
          <div className="hidden md:flex w-full h-[calc(100vh_-_76px)] my-[2.375rem] bg-authImage bg-center bg-contain bg-no-repeat">
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
