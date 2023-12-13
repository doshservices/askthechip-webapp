import eye from "./../assets/icons/eye.svg";
import Loader from "./Loader/Loader";
import ButtonNew from "../components/ButtonNew";
import crossedEye from "./../assets/icons/crossed-eye.svg";
import { Header } from "./home";
import { inform } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { setUser } from "../store/slice/userSlice";
import { useState } from "react";
import { useProfile } from "../contexts/ProfileContext/ProfileContext";
import { useDispatch } from "react-redux";
import { useWindowWidth } from "../utils/windowWidth";
import { settingsButtons } from "../data";
import { localStorageUpdate } from "../utils/localStorageUpdate";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  type: "",
  oldPassword: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  officeAddress: "",
  cardNum: "",
  expiration: "",
  cvv: "",
  address: "",
  pin: "",
};

export const reloadBrowser = () => {
  window.location.reload();
}

const Settings = () => {
  const { token } = useAuth();
  const { profile } = useProfile();
  const [activeButton, setActiveButton] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [updatingNames, setUpdatingNames] = useState(false);
  const [resetingPassword, setResetingPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch()
  const {
    cardNum,
    expiration,
    cvv,
    firstName,
    lastName,
    email,
    phone,
    newPassword,
    oldPassword,
    confirmPassword,
    companyName,
    address,
    pin,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleUpdateNames = async (e) => {
    e.preventDefault();
    setUpdatingNames(true);
    try {
      const response = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/users`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ firstName, lastName }),
        }
      );
      if (response.ok) {
        const resData = await response.json();
        // console.log(resData);
        dispatch(setUser(resData?.data?.user))
        const updatedData = resData.data.user;
        localStorageUpdate(updatedData);
        setUpdatingNames(false);
        resetFormFields();
        setTimeout(() => {
          reloadBrowser()
        }, 1000)
      }
    } catch (error) {
      setUpdatingNames(false);
    }
    setUpdatingNames(false);
  };

  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    setUpdatingNames(true);
    try {
      const response = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/users`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ companyName }),
        }
      );
      if (response.ok) {
        const resData = await response.json();
        const updatedData = resData.data.user;
        localStorageUpdate(updatedData);
        setUpdatingNames(false);
        resetFormFields();
      }
    } catch (error) {
      setUpdatingNames(false);
    }
    setUpdatingNames(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return;
    }
    setResetingPassword(true);
    try {
      const response = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/users/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ oldPassword, newPassword }),
        }
      );
      if (response.ok) {
        const resData = await response.json();
        setResetingPassword(false);
      }
      resetFormFields();
    } catch (error) {
      setResetingPassword(false);
    }
    setResetingPassword(false);
  };
  const handleUpdateCard = (e) => {
    e.preventDefault();
    inform("Sorry, this is a coming soon feature!");
    return;
  };

  const width = useWindowWidth()

  return (
    <>
      {width < 480 ?
        <Header /> : <></>
      }
      <div className="font-DMSans grid grid-cols-9">
        <div className="col-span-12 sm:col-span-4 min-h-full sm:min-h-screen ml-6 pr-6 pt-6 border-r border-[#EBEEF0]">
          <div className="font-DMSans font-medium mb-10 text-2xl">Settings</div>
          {settingsButtons.map((button) => (
            <div className="my-4" key={button.id}>
              <ButtonNew
                intent={activeButton === button.id ? `primary` : `secondary`}
                onClick={() => setActiveButton(button.id)}
                className="w-full py-[0.4rem]"
              >
                {button.title}
              </ButtonNew>
            </div>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-5 pt-10 sm:pt-20">
          {activeButton === 1 ? (
            <>
              {profile?.role === "USER" ? (
                <form
                  onSubmit={handleUpdateNames}
                  className="w-[90%] md:w-[80%] mx-auto"
                >
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
                  <div className="flex justify-center mt-[3.75rem]">
                    <button
                      disabled={updatingNames}
                      type="submit"
                      className={
                        updatingNames
                          ? `bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                          : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                      }
                    >
                      {updatingNames ? <Loader /> : "Save"}
                    </button>
                  </div>
                </form>
              ) : (
                <form
                  onSubmit={handleUpdateCompany}
                  className="w-[90%] md:w-[80%] mx-auto"
                >
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
                  <div className="flex justify-center mt-[3.75rem]">
                    <button
                      disabled={updatingNames}
                      type="submit"
                      className={
                        updatingNames
                          ? `bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                          : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                      }
                    >
                      {updatingNames ? <Loader /> : "Save"}
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : activeButton === 2 ? (
            <div>
              <form onSubmit={handleUpdateCard} className="w-[80%] mx-auto">
                <div className="flex flex-col mb-5">
                  <label htmlFor="cardNum" className="font-DMSans text-sm mb-2">
                    Card Number
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                      type="text"
                      name="cardNum"
                      id="cardNum"
                      value={cardNum}
                      onChange={handleChange}
                      placeholder="Enter card number Here"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="expiration"
                      className="font-DMSans text-sm mb-2"
                    >
                      Expiration
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="expiration"
                        id="expiration"
                        value={expiration}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="lastName"
                      className="font-DMSans text-sm mb-2"
                    >
                      CVV
                    </label>
                    <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                      <input
                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                        type="text"
                        name="cvv"
                        id="cvv"
                        value={cvv}
                        onChange={handleChange}
                        placeholder="***"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="pin" className="font-DMSans text-sm mb-2">
                    PIN
                  </label>
                  <div className="border border-[#2d2d2d] rounded-full">
                    <input
                      className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                      type="password"
                      name="pin"
                      id="pin"
                      value={pin}
                      onChange={handleChange}
                      placeholder="Enter your pin here"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-[3.75rem]">
                  <button
                    type="submit"
                    className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          ) : activeButton === 3 ? (
            <form onSubmit={handleResetPassword} className="w-[80%] mx-auto">
              <div className="flex flex-col mb-5">
                <label htmlFor="oldPassword" className="font-DMSans text-sm mb-2">
                  Old Password
                </label>
                <div className="flex border border-[#2d2d2d] rounded-full relative">
                  <input
                    className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent w-full"
                    type={showPassword ? "text" : "password"}
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Old Password here"
                    value={oldPassword}
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
              <div className="flex flex-col mb-5">
                <label htmlFor="newPassword" className="font-DMSans text-sm mb-2">
                  New Password
                </label>
                <div className="flex border border-[#2d2d2d] rounded-full relative">
                  <input
                    className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent w-full"
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    id="newPassword"
                    placeholder="New Password here"
                    value={newPassword}
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
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="confirmPassword"
                  className="font-DMSans text-sm mb-2"
                >
                  Confirm New Password
                </label>
                <div className="flex border border-[#2d2d2d] rounded-full relative">
                  <input
                    className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent w-full"
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
              <div className="flex justify-center mt-[3.75rem]">
                <button
                  disabled={resetingPassword}
                  type="submit"
                  className={
                    resetingPassword
                      ? `bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                      : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                  }
                >
                  {resetingPassword ? <Loader /> : "Save"}
                </button>
              </div>
            </form>
          ) : (
            <form className="mx-auto w-[80%]">
              <div className="font-DMSans mb-10">
                <div className="font-medium text-[#EB5757] mb-4 text-xl">
                  Are you sure you want to delete this account?
                </div>
                <div className="mb-2 text-lg">
                  Deleting your account will erase your current data from the
                  platform
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="font-DMSans text-sm mb-2">
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
              <div className="flex flex-col mb-2">
                <label htmlFor="oldPassword" className="font-DMSans text-sm mb-2">
                  Password
                </label>
                <div className="flex border border-[#2d2d2d] rounded-full relative">
                  <input
                    className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent w-full"
                    type={showPassword ? "text" : "password"}
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Old Password here"
                    value={oldPassword}
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
              <div className="flex justify-center mt-[3.75rem]">
                <button
                  type="submit"
                  className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300"
                >
                  Deactivate
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
