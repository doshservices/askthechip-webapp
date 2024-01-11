import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";
import user from "../assets/images/user.png"
import provider from "../assets/images/service-provider.png"

const SignOptions = () => {

    return (
        <div className="font-Inter overflow-hidden bg-light">
            <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="w-full md:w-[50%] h-screen">
                    <Link to="/" className="flex items-center h-16 ml-4 ml-[2rem] md:ml-20 my-7">
                        <div>
                            <img src={logo} alt="Ask the chip" />
                        </div>
                        <div className="font-bold text-primary90 ml-2">Askthechip</div>
                    </Link>
                    <div className="h-[calc(100vh_-_10rem)] overflow-y-auto md:pl-[2rem] xl:pl-[5rem]  px-[2rem] md:px-0">
                        <h1 className="mx-auto font-DMSans text-[2rem] font-bold mb-8 uppercase text-[#2d2d2d] text-center mt-4">
                            CHOOSE AN ACCOUNT PROFILE
                        </h1>
                        <div className="flex gap-[2rem] justify-between flex-col xs:flex-row">
                            <div className="grow basis-[150px] max-w-[250px] md:max-w-[300px] mx-auto">
                                <Link to="/sign-up" style={{
                                    border: "1px solid hsla(172, 92%, 28%, 1)"
                                }} className="flex flex-col items-center justify-center rounded-[10px] p-3 p-3 min-h-auto md:min-h-[223px]">
                                    <div>
                                        <img src={user} className="" alt="user-signup" />
                                    </div>
                                    <p className="text-[1.2rem] font-[600] text-[#2d2d2d] mt-4">USER</p>
                                </Link>
                                <p className="text-[.9rem] text-center mt-4">I am an entrepreneur seeking guidance, resources, and connections to fuel the growth of my business.</p>
                            </div>
                            <div className="grow basis-[150px] max-w-[250px] md:max-w-[300px] mx-auto">
                                <Link to="/provider-signup" style={{
                                    border: "1px solid hsla(172, 92%, 28%, 1)"
                                }} className="flex flex-col items-center justify-center rounded-[10px] p-3 min-h-auto md:min-h-[223px]">
                                    <img src={provider} alt="provider-signup" />
                                    <p className="text-[1.2rem] font-[600] text-[#2d2d2d] mt-4 text-center">SERVICE PROVIDER</p>
                                </Link>
                                <p className="text-[.9rem] text-center mt-4">I’m a professional or business offering valuable expertise and services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex w-[45%] h-screen relative">
                    <div className="absolute z-10 top-0 right-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
                    <div className="absolute z-10 bottom-0 left-0 w-[17rem] h-[13rem] bg-dottedRectangle bg-cover"></div>
                    <div className="hidden z-20 md:flex w-full h-[calc(100vh_-_76px)] my-[2.375rem] bg-authImage bg-center bg-contain bg-no-repeat"></div>
                </div>
            </div >
        </div >
    );
};

export default SignOptions;
