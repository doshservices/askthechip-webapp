import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import { FileUploadInput } from "../components";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Loader } from "../components";
import { ToastContainer } from "react-toastify";
import { notify, warn } from "../App";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  type: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  officeAddress: "",
};

// {
//   "companyName": "Human TECH",
//   "officeAddress": "lekki face 23",
//   "phoneNumber": "05335248299",
//   "email": "oyasync03@gmail.com",
//   "password": "123456",
//   "gender": "MALE",
//   "role": "SERVICE_PROVIDER",
//   "serviceType": "ACCOUNTING_SERVICES",
//   "cacDocument": "cacDocument",
//   "representativeId": "representativeId",
//   "googleSigned": true
// }

const SignUpAsProvider = () => {
  const navigateTo = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loadingBusiness, setLoadingBusiness] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [accountType, setAccountType] = useState("individual");
  const [serviceType, setServiceType] = useState('');

  const handleChangeService = (e) => {
    setServiceType(e.target.value);
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    companyName,
    officeAddress,
  } = formFields;

  const redirectToHome = () => {
    setTimeout(() => {
      navigateTo('/home');
    }, 2500);
  };

  const handleSwitchAccount = () => {
    if (accountType === "individual") setAccountType("business");
    else {
      setAccountType("individual");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  
  const spaceToLodash = (str) => {
    return str.replace(/\s/g, "_");
  }

  const handleBusinessSubmit = async (e) => {
    e.preventDefault();
    setLoadingBusiness(true);
    try {
      const url = 'https://askthechip-endpoint-production.up.railway.app/api/users'
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "companyName": formFields.companyName,
          "officeAddress": formFields.officeAddress,
          "phoneNumber": formFields.phoneNumber,
          "email": formFields.email,
          "password": formFields.password,
          "gender": "MALE",
          "role": "SERVICE_PROVIDER",
          "serviceType": spaceToLodash(serviceType),
          "cacDocument": "cacDocument",
          "representativeId": "representativeId",
          "googleSigned": false
        })
      })
      if (res.ok) {
        console.log("Successfully signed in to askthechip!")
        const dataRes = await res.json();
        const authUser = dataRes.data;
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
        console.log(authUser)
        notify("Login success, you're being redirected")
        redirectToHome();
        setLoadingBusiness(false);
      }
      if (!res.ok) {
        console.log("Sign in failed,", res)
        const dataRes = await res.json();
        console.log('dataRes',dataRes.message);
        warn(dataRes.message)
        setLoadingBusiness(false);
      }
      setLoadingBusiness(false);

    } catch (err) {
      console.log(err);
      warn("Error ", err);
      setLoadingBusiness(false);
    }
  }

  return (
    <div className="font-Inter overflow-hidden bg-light">
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
                <h1 className="font-DMSans text-[30px] font-bold mb-2 uppercase text-[#2d2d2d]">
                  Create an account
                </h1>
                <p className="font-DMSans text-[#2d2d2d90]">
                  Fill out the fields below to create your account as a service provider
                </p>
              </div>
              <div className="flex justify-center mb-10">
                <div className="flex justify-center text-light text-sm rounded-full border-[0.0694rem] border-[#2d2d2d] w-fit p-[0.375rem]">
                  <div
                    onClick={handleSwitchAccount}
                    className={
                      accountType === "individual"
                        ? `mr-4 md:mr-[22px] px-7 bg-primary80 rounded-full py-1.5 cursor-pointer`
                        : `mr-4 md:mr-[22px] px-7 text-[#2d2d2d] rounded-full py-1.5 cursor-pointer`
                    }
                  >
                    For Individual
                  </div>
                  <div
                    onClick={handleSwitchAccount}
                    className={
                      accountType === "business"
                        ? `px-7 bg-primary80 rounded-full py-1.5 cursor-pointer`
                        : `px-7 text-[#2d2d2d] rounded-full py-1.5 cursor-pointer`
                    }
                  >
                    For Business
                  </div>
                </div>
              </div>
              {accountType === "individual" && (
                <form>
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
                        <span className="text-[0.5625rem]">
                          (Add country code)
                        </span>
                      </label>
                      <div className="border border-[#2d2d2d] rounded-full">
                        <input
                          className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                          type="number"
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
                    <label htmlFor="email" className="font-DMSans text-sm mb-2">
                      Service Type
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <select className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                        <option disabled defaultValue>
                          Select Service Type
                        </option>
                        <option value="accounting">Accounting</option>
                        <option value="administrative">Administrative</option>
                        <option value="consulting">Consulting</option>
                        <option value="financial">Financial</option>
                        <option value="legal">Legal</option>
                        <option value="marketing">Marketing</option>
                        <option value="mentorship">Mentorship</option>
                        <option value="technology">Technology</option>
                        <option value="training">Training</option>
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
                  </div>
                  <div className="mb-5 mt-3">
                    <div className="font-DMSans text-sm">Government ID</div>
                    <FileUploadInput />
                  </div>
                  <div className="flex justify-center mt-[3.75rem]">
                    <button
                      disabled={loading}
                      type="submit"
                      className={loading ? "bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300" : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`}
                    >
                      {loading ? <Loader /> : "Create Account"}
                    </button>
                  </div>
                  <div className="flex justify-center pt-3">
                    <div className="font-DMSans text-sm text-center pb-4">
                      Already have an account?{" "}
                      <Link to="/login" className="font-bold text-primary90">
                        Login
                      </Link>
                    </div>
                    <div className="ml-2 font-DMSans text-sm text-center pb-4">
                      or{" "}
                      <Link to="/sign-up" className="ml-1 font-bold text-primary90">
                        Signup As a User
                      </Link>
                    </div>
                  </div>
                </form>
              )}
              {accountType === "business" && (
                <form onSubmit={handleBusinessSubmit}>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="font-DMSans text-sm mb-2">
                      Email Address
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-3">
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
                  </div>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="font-DMSans text-sm mb-2">
                      Service Type
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <select value={serviceType} onChange={handleChangeService} className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                        <option disabled defaultValue value="">
                          Select Service Type
                        </option>
                        <option value="Accounting">Accounting</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Financial">Financial</option>
                        <option value="Legal">Legal</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Mentorship">Mentorship</option>
                        <option value="Technology">Technology</option>
                        <option value="Training">Training</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="companyName"
                      className="font-DMSans text-sm mb-2"
                    >
                      Company Name
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={handleChange}
                        placeholder="Enter Company Name Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="phone" className="font-DMSans text-sm mb-2">
                      Phone Number{" "}
                      <span className="text-[0.5625rem]">
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
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="officeAddress"
                      className="font-DMSans text-sm mb-2"
                    >
                      Office Address
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="officeAddress"
                        id="officeAddress"
                        value={officeAddress}
                        onChange={handleChange}
                        placeholder="Enter Office Address Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="font-DMSans text-sm">CAC Certificate</div>
                    <FileUploadInput />
                  </div>
                  <div>
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="serviceType"
                        className="font-DMSans text-sm mb-2"
                      >
                        Document Type
                      </label>
                      <div className="border border-[#2d2d2d] rounded-full">
                        <select
                          id="documentType"
                          className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent"
                        >
                          <option disabled defaultValue value="">
                            Select Document Type
                          </option>
                          <option>Driver's license</option>
                          <option>International Passport</option>
                          <option>National Identity Card</option>
                          <option>Voter's card</option>
                        </select>
                      </div>
                    </div>
                    <FileUploadInput />
                  </div>
                  <div className="flex justify-center mt-[3.75rem]">
                    <button
                      disabled={loadingBusiness}
                      type="submit"
                      className={loadingBusiness ? "bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300" : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`}
                    >
                      {loadingBusiness ? <Loader /> : "Create Account"}
                    </button>
                  </div>
                  <div className="flex justify-center pt-3">
                    <div className="font-DMSans text-sm text-center pb-4">
                      Already have an account?{" "}
                      <Link to="/login" className="font-bold text-primary90">
                        Login
                      </Link>
                    </div>
                    <div className="ml-2 font-DMSans text-sm text-center pb-4">
                      or{" "}
                      <Link to="/sign-up" className="ml-1 font-bold text-primary90">
                        Signup As a user
                      </Link>
                    </div>
                  </div>
                </form>
              )}
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

export default SignUpAsProvider;
