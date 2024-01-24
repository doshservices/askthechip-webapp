import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/ask.svg";
import eye from "./../assets/icons/eye.svg";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import { FileUploadInput } from "../components";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Loader } from "../components";
import { ToastContainer } from "react-toastify";
import { warn } from "../App";
import { inform } from "../App";
import axios from "axios";
import { api } from "../contexts";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  companyName: "",
  officeAddress: "",
  phoneNumber: "",
  email: "",
  password: "",
  gender: "",
  role: "",
  serviceType: "",
  confirmPassword: "",
  googleSigned: true,
};

const SignUpAsProvider = () => {
  const navigateTo = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loadingBusiness, setLoadingBusiness] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [accountUser, setAccountUser] = useState("INDIVIDUAL");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [governmentId, setGovernmentId] = useState(null);
  const [cacDocument, setCacDocument] = useState(null);

  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token !== null) {
      navigateTo("/home")
    }
  }, [])

  const handleGovId = async (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
          // console.error("No file selected.");
          return;
        }
        setGovernmentId(selectedFile);
        return selectedFile;
      } else {
        // console.error("No file selected.");
      }
    } catch (error) {
      // console.error("Error selecting file:", error);
    }
  };

  const handleCac = async (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
          // console.error("No file selected.");
          return;
        }
        setCacDocument(selectedFile);
      } else {
        // console.error("No file selected.");
      }
    } catch (error) {
      // console.error("Error selecting file:", error);
    }
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevSelectedOptions) =>
      ({ ...prevSelectedOptions, [name]: value, }));

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      gender: value,
    }));
  };

  const {
    companyName,
    officeAddress,
    phoneNumber,
    email,
    password,
    confirmPassword,
    lastName,
    firstName,
    gender
  } = formFields;

  const redirectToVerify = () => {
    setTimeout(() => {
      navigateTo('/verify');
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
    const { phoneNumber, email, password } = formFields;
    const { serviceType } = selectedOptions;
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      gender,
      role: "INDIVIDUAL",
      serviceType: serviceType,
      representativeId: governmentId,
      googleSigned: false
    };
    return data;
  };

  const individualDetails = getIndividualDetails();
  // console.log(individualDetails);

  const getBusinessDetails = () => {
    const { companyName, officeAddress, phoneNumber, email, password } = formFields;
    const { serviceType } = selectedOptions;
    const data = {
      companyName,
      officeAddress,
      phoneNumber,
      email,
      password,
      gender,
      role: "BUSINESS",
      serviceType: serviceType,
      cacDocument: cacDocument,
      representativeId: governmentId,
      googleSigned: false
    };
    return data;
  };

  const businessDetails = getBusinessDetails();
  // console.log(businessDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    setUser(null);

    let loadingSetter;
    if (accountUser === "INDIVIDUAL") {
      if (password !== confirmPassword) {
        inform("Password doesn't match");
        return;
      }
      loadingSetter = setLoading;
    } else {
      loadingSetter = setLoadingBusiness;
    }

    loadingSetter(true);

    try {
      const response = await axios.post(
        `${api}/api/users`,
        accountUser === "INDIVIDUAL" ? individualDetails : businessDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const authUser = response?.data?.data?.user;
      const token = response?.data?.data?.token;
      localStorage.setItem("token", token);
      localStorage.setItem("authUser", JSON.stringify(authUser));
      setUser(authUser);
      loadingSetter(false);
      redirectToVerify();
    } catch (error) {
      // console.error(error);
      warn(error?.message);
      loadingSetter(false);
    }
  };


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
                <h1 className="font-DMSans text-[1.6rem] text-center font-bold mb-2 uppercase text-[#2d2d2d]">
                  CREATE AN ACCOUNT
                </h1>
                <p className="font-DMSans text-[#2d2d2d90]">
                  Fill out the fields below to create your account
                </p>
              </div>
              <div className="flex justify-center mb-10">
                <div className="flex justify-center text-light text-sm rounded-full border-[0.0694rem] border-[#2d2d2d] w-fit p-[0.375rem]">
                  <div
                    onClick={handleSwitchAccount}
                    className={
                      accountUser === "INDIVIDUAL"
                        ? `mr-2 md:mr-[22px] px-4 md:px-7 bg-primary80 rounded-full py-1.5 cursor-pointer`
                        : `mr-2 md:mr-[22px] px-4 md:px-7 text-[#2d2d2d] rounded-full py-1.5 cursor-pointer`
                    }
                  >
                    As Individual
                  </div>
                  <div
                    onClick={handleSwitchAccount}
                    className={
                      accountUser === "BUSINESS"
                        ? `px-4 md:px-7 bg-primary80 rounded-full py-1.5 cursor-pointer`
                        : `px-4 md:px-7 text-[#2d2d2d] rounded-full py-1.5 cursor-pointer`
                    }
                  >
                    As Business
                  </div>
                </div>
              </div>
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
                        htmlFor="phoneNumber"
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
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
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
                      <select name="serviceType" value={selectedOptions.serviceType} onChange={handleSelectChange} className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                        <option className="text-[1rem]" defaultValue>
                          Select Service Type
                        </option>
                        <option className="text-[1rem]" value="ACCOUNTING">Accounting</option>
                        <option className="text-[1rem]" value="ADMINISTRATIVE">Administrative</option>
                        <option className="text-[1rem]" value="CONSULTING">Consulting</option>
                        <option className="text-[1rem]" value="FINANCIAL">Financial</option>
                        <option className="text-[1rem]" value="LEGAL">Legal</option>
                        <option className="text-[1rem]" value="MARKETING">Marketing</option>
                        <option className="text-[1rem]" value="MENTORSHIP">Mentorship</option>
                        <option className="text-[1rem]" value="TECHNOLOGY">Technology</option>
                        <option className="text-[1rem]" value="TRAINING">Training</option>
                      </select>
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
                  <div className="mb-5 mt-3">
                    <div className="font-DMSans text-sm">Valid ID</div>
                    <FileUploadInput name="representativeId" filename={governmentId?.name} id="representativeId" state={governmentId} handleState={handleGovId} />
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
                  </div>
                </form>
              )}
              {accountUser === "BUSINESS" && (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
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
                          placeholder="Company Name Here"
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
                      <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                        <input
                          className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                          type="text"
                          name="officeAddress"
                          id="officeAddress"
                          value={officeAddress}
                          onChange={handleChange}
                          placeholder="Office Address Here"
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
                        htmlFor="phoneNumber"
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
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
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
                      <select name="serviceType" value={selectedOptions.serviceType} onChange={handleSelectChange} className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                        <option defaultValue value="">
                          Select Service Type
                        </option>
                        <option className="text-[1rem]" value="ACCOUNTING">Accounting</option>
                        <option className="text-[1rem]" value="ADMINISTRATIVE">Administrative</option>
                        <option className="text-[1rem]" value="CONSULTING">Consulting</option>
                        <option className="text-[1rem]" value="FINANCIAL">Financial</option>
                        <option className="text-[1rem]" value="LEGAL">Legal</option>
                        <option className="text-[1rem]" value="MARKETING">Marketing</option>
                        <option className="text-[1rem]" value="MENTORSHIP">Mentorship</option>
                        <option className="text-[1rem]" value="TECHNOLOGY">Technology</option>
                        <option className="text-[1rem]" value="TRAINING">Training</option>
                      </select>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-3">
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
                  <div className="mb-5">
                    <div className="font-DMSans text-sm">CAC Certificate</div>
                    <FileUploadInput filename={cacDocument?.name} name="cacDocument" id="cacDocument" state={cacDocument} handleState={handleCac} />
                  </div>
                  <div>
                    <div className="mb-5">
                      <div className="font-DMSans text-sm">Valid ID</div>
                      <FileUploadInput filename={governmentId?.name} name="representativeId" id="representativeId" state={governmentId} handleState={handleGovId} />
                    </div>
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
                    <div className="font-DMSans text-xs sm:text-sm text-center pb-4">
                      Already have an account?{" "}
                      <Link to="/login" className="font-bold text-primary90">
                        Login
                      </Link>
                    </div>
                    {/* <div className="ml-1 sm:ml-2 font-DMSans text-xs sm:text-sm text-center pb-4">
                      or{" "}
                      <Link to="/sign-up" className="ml-0.5 sm:ml-1 font-bold text-primary90">
                        User Signup
                      </Link>
                    </div> */}
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
