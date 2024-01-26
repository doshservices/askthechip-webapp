import { useState, useRef, useEffect } from "react";
import logo from "./../assets/ask.svg";
import { Footer, Navbar } from "../components";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { api } from "../contexts";
import { Link, useNavigate } from "react-router-dom";
import { notify, warn } from "../App";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useDispatch } from "react-redux";
import { saveUser } from "../store/slice/userSlice";
import { setJwt } from "../store/slice/authSlice";
import { useContext } from "react";

const Verify = () => {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch()
  const { setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const num4Ref = useRef(null);
  const num5Ref = useRef(null);
  const num6Ref = useRef(null);

  const { token } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      navigate("/home");
      window.location.reload()
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    num1Ref.current.value = "";
    num2Ref.current.value = "";
    num3Ref.current.value = "";
    num4Ref.current.value = "";
    num5Ref.current.value = "";
    num6Ref.current.value = "";
    const url = `${api}/api/users/verify`
    if (otp.length === 6) {
      setLoading(true);
      axios.post(url, { otp }, {
        // mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      }).then((response) => {
        // console.log(response);
        notify("Email verification successful, you're being redirected")
        redirectToHome();
        setLoading(false);
        setLoading(false)
        const authUser = response.data.data.user;
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
        dispatch(setJwt(token))
        dispatch(saveUser(authUser))
        localStorage.removeItem("verifyMail")
      })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          notify(error?.response?.data?.message);
        })
    } else {
      setError("Fill in all feilds completley!!!")
    }
  };

  const authMail = JSON.parse(localStorage.getItem("verifyMail"))

  const verifyAccount = async (e) => {
    const url = `${api}/api/send-otp?email=${authMail}`
    if (authMail) {
      axios.get(url, {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          // console.log(response);
          notify("OTP has been sent to your mail")
        }).catch((error) => {
          // console.log(error);
          warn("OTP failed in failed,", error)
        })
    } else {
      warn("No Email Found")
    }
  }

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   verifyAccount()
  //   // }, 2000)
  // }, [])

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
                  Verify account
                </h1>
                <p className="font-DMSans text-[hsla(0, 0%, 18%, 0.9)] text-center">
                  A Verification code has been sent to {authMail}
                </p>
              </div>
              {error ? <p className="font-DMSans text-[1.2rem] text-[#FF3B30] text-center">
                {error}
              </p> : ""}
              <div>
                <form className="flex flex-col items-center justify-center verify-form">
                  <div className="mt-4 md:my-8 w-full flex items-center justify-between xs:p-4">
                    <input
                      type="number"
                      name="num1"
                      value={num1}
                      onChange={handleChange}
                      ref={num1Ref}
                      autoComplete="off"
                      required
                      className="mx-4 h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-lg  text-center text-xl font-bold md:mx-3"
                    />
                    <input
                      type="number"
                      name="num2"
                      value={num2}
                      onChange={handleChange}
                      ref={num2Ref}
                      autoComplete="off"
                      required
                      className="mx-4 h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-lg  text-center text-xl font-bold md:mx-3"
                    />
                    <input
                      type="number"
                      name="num3"
                      value={num3}
                      onChange={handleChange}
                      ref={num3Ref}
                      autoComplete="off"
                      required
                      className="mx-4 h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-lg  text-center text-xl font-bold md:mx-3"
                    />
                    <input
                      type="number"
                      name="num4"
                      value={num4}
                      onChange={handleChange}
                      ref={num4Ref}
                      autoComplete="off"
                      required
                      className="mx-4 h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-lg  text-center text-xl font-bold md:mx-3"
                    />
                    <input
                      type="number"
                      name="num5"
                      value={num5}
                      onChange={handleChange}
                      ref={num5Ref}
                      autoComplete="off"
                      required
                      className="mx-4 h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-lg  text-center text-xl font-bold md:mx-3"
                    />
                    <input
                      type="number"
                      name="num6"
                      value={num6}
                      onChange={handleChange}
                      ref={num6Ref}
                      autoComplete="off"
                      required
                      className="mx-4 h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-lg  text-center text-xl font-bold md:mx-3"
                    />
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
                    {loading ? "Verifying..." : "Verify"}
                  </button>
                </div>
                <div className="font-DMSans text-sm text-center pb-4">
                  Didn’t receive a One-Time password?{" "}
                  <a onClick={verifyAccount} className="font-bold text-primary90 cursor-pointer">
                    Resend Otp
                  </a>
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

export default Verify;
