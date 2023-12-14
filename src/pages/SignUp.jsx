import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import googleLogo from "../assets/icons/google-logo.svg";
import { FileUploadInput, Loader } from "../components";
import { inform, notify, warn } from "../App";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "../store/slice/userSlice";

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

const SignUp = () => {

  const navigateTo = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loadingBusiness, setLoadingBusiness] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [accountUser, setAccountUser] = useState("INDIVIDUAL");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [representativeId, setRepresentativeId] = useState(null);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()

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
    companyName,
    officeAddress,
    // gender, role, googleSigned
  } = formFields;

  const handleRepIdSelect = (file) => {
    setRepresentativeId(file);
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: value,
    }));
  };

  const redirectToLogin = () => {
    setTimeout(() => {
      navigateTo("/verify");
    }, 2500);
  };
  const handleSwitchAccount = () => {
    if (accountUser === "INDIVIDUAL") setAccountUser("BUSINESS");
    else {
      setAccountUser("INDIVIDUAL");
    }
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
      gender: "MALE",
      role: "USER",
      accountType,
      googleSigned: true,
    };
    return data;
  };
  const individualDetails = getIndividualDetails();

  const getBusinessDetails = () => {
    const { companyName, officeAddress, phoneNumber, email, password } =
      formFields;
    const { accountType } = selectedOptions;
    const data = {
      companyName,
      officeAddress,
      phoneNumber,
      email,
      password,
      gender: "MALE",
      role: "USER",
      accountType,
      representativeId: representativeId,
      googleSigned: true,
    };
    return data;
  };
  const businessDetails = getBusinessDetails();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    setUser(null);
    setLoading(true);
    if (accountUser === "INDIVIDUAL") {
      if (password !== confirmPassword) {
        inform("Password doesn't match");
        return;
      }
    } else {
      setLoadingBusiness(true);
    }
    const url = "https://askthechip-hvp93.ondigitalocean.app/api/users";
    axios.post(url, accountUser === "INDIVIDUAL" ? individualDetails : businessDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setLoading(false)
        const authUser = response.data.data.user;
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
        dispatch(saveUser(authUser))
        notify("Sign up Successful, you'll be redirected to verification page!");
        redirectToLogin();
      })
      .catch((error) => {
        setLoading(false);
        warn(error.response.data.message);
      })
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
                <h1 className="font-DMSans text-[1.6rem] font-bold mb-2 uppercase text-[#2d2d2d]">
                  CREATE ACCOUNT AS A USER
                </h1>
                <p className="font-DMSans text-[#2d2d2d90]">
                  Fill out the fields below to create your account as a user
                </p>
              </div>
              {/* <div className="flex justify-center mb-10">
                <div className="flex justify-center text-light text-sm rounded-full border-[0.0694rem] border-[#2d2d2d] w-fit p-[0.375rem]">
                  <div
                    onClick={handleSwitchAccount}
                    className={
                      accountUser === "INDIVIDUAL"
                        ? `mr-2 md:mr-[22px] px-4 md:px-7 bg-primary80 rounded-full py-1.5 cursor-pointer`
                        : `mr-2 md:mr-[22px] px-4 md:px-7 text-[#2d2d2d] rounded-full py-1.5 cursor-pointer`
                    }
                  >
                    For Individual
                  </div>
                  <div
                    onClick={handleSwitchAccount}
                    className={
                      accountUser === "BUSINESS"
                        ? `px-4 md:px-7 bg-primary80 rounded-full py-1.5 cursor-pointer`
                        : `px-4 md:px-7 text-[#2d2d2d] rounded-full py-1.5 cursor-pointer`
                    }
                  >
                    For Business
                  </div>
                </div>
              </div> */}
              {accountUser === "INDIVIDUAL" && (
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
                  </div>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="font-DMSans text-sm mb-2">
                      Account Type
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <select
                        name="accountType"
                        value={selectedOptions.accountType}
                        onChange={handleSelectChange}
                        className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent"
                      >
                        <option disabled defaultValue>
                          Select Account Type
                        </option>
                        <option value="ENTREPRENEUR">Entrepreneur</option>
                        <option value="ESTABLISHED_BUSINESS">
                          Established Business
                        </option>
                        <option value="INVESTOR">Investor</option>
                        <option value="STARTUP">Start-up</option>
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
                  </div>
                  <div className="flex justify-center mt-[3.75rem]">
                    <button
                      disabled={loading}
                      type="submit"
                      className={
                        loading
                          ? "bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                          : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                      }
                    >
                      {loading ? <Loader /> : "Create Account"}
                    </button>
                  </div>
                  <div className="flex justify-center my-2 font-DMSans font-medium text-sm">
                    OR
                  </div>
                  <div className="flex justify-center mb-2">
                    <button
                      type="button"
                      className="flex items-center justify-center bg-transparent border border-primary80 text-primary80 text-sm font-DMSans font-medium w-full text-center rounded-full"
                    >
                      <img src={googleLogo} alt="Google Logo" className="h-8" />
                      Continue with Google
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div className="font-DMSans text-sm text-center pb-4">
                      Already have an account?{" "}
                      <Link to="/login" className="font-bold text-primary90">
                        Login
                      </Link>
                    </div>
                    <div className="ml-2 font-DMSans text-sm text-center pb-4">
                      or{" "}
                      <Link
                        to="/provider-signup"
                        className="ml-1 font-bold text-primary90"
                      >
                        Provider Signup
                      </Link>
                    </div>
                  </div>
                </form>
              )}
              {accountUser === "BUSINESS" && (
                <form onSubmit={handleSubmit}>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="email"
                        className="font-DMSans text-sm mb-2"
                      >
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
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="accountType"
                      className="font-DMSans text-sm mb-2"
                    >
                      Account Type
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <select name="accountType" value={selectedOptions.accountType} onChange={handleSelectChange} className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                        <option disabled defaultValue>
                          Select Account Type
                        </option>
                        <option value="ENTREPRENEUR">Entrepreneur</option>
                        <option value="ESTABLISHED_BUSINESS">
                          Established Business
                        </option>
                        <option value="INVESTOR">Investor</option>
                        <option value="STARTUP">Start-up</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="documentType"
                      className="font-DMSans text-sm mb-2"
                    >
                      Document Type
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <select
                        id="documentType"
                        name="documentType"
                        value={selectedOptions.documentType}
                        onChange={handleSelectChange}
                        className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent"
                      >
                        <option disabled defaultValue>
                          Select Document Type
                        </option>
                        <option value="DRIVERS_LICENSE">Driver's license</option>
                        <option value="INTERNATIONAL_PASSPORT">International Passport</option>
                        <option value="NIN">National Identity Card</option>
                        <option value="VOTERS_CARD">Voter's card</option>
                      </select>
                    </div>
                  </div>
                  <FileUploadInput state={representativeId} handleState={handleRepIdSelect} />
                  <div className="flex justify-center mt-[3.75rem]">
                    <button
                      disabled={loadingBusiness}
                      type="submit"
                      className={loadingBusiness ? "bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300" : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`}
                    >
                      {loadingBusiness ? <Loader /> : "Create Account"}
                    </button>
                  </div>
                  <div className="flex justify-center my-2 font-DMSans font-medium text-sm">
                    OR
                  </div>
                  <div className="flex justify-center mb-2">
                    <button
                      type="button"
                      className="flex items-center justify-center bg-transparent border border-primary80 text-primary80 text-sm font-DMSans font-medium w-full text-center rounded-full"
                    >
                      <img src={googleLogo} alt="Google Logo" className="h-8" />
                      Continue with Google
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div className="font-DMSans text-xs sm:text-sm text-center pb-4">
                      Already have an account?{" "}
                      <Link to="/login" className="font-bold text-primary90">
                        Login
                      </Link>
                    </div>
                    <div className="ml-1 sm:ml-2 font-DMSans text-xs sm:text-sm text-center pb-4">
                      or{" "}
                      <Link
                        to="/provider-signup"
                        className="ml-0.5 sm:ml-1 font-bold text-primary90"
                      >
                        Provider Signup
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

export default SignUp;
