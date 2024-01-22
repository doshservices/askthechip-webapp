import { useProfile } from "../contexts/ProfileContext/ProfileContext";
import axios from "axios";
import { api } from "../contexts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { demoImg } from "./Chat/messages";
import { useNavigate } from "react-router-dom";

export const SideColumn = () => {
    const navigate = useNavigate()
    const token = useSelector((state) => state?.jwtSlice?.jwt)
    const [providers, setProviders] = useState([])
    const { profile } = useProfile()


    const getProviders = async () => {
        try {
            const response = await axios.get(`${api}/api/users/search/services`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(response);
            setProviders(response?.data?.data)
        } catch (error) {
            // console.log(error);
        }
    }

    useEffect(() => {
        getProviders()
    }, [])

    // const navigateToProfile = (id) => {
    //     localStorage.setItem("ask-un-id", JSON.stringify(id))
    //     setTimeout(() => {
    //         if (id === profile?._id) {
    //             navigate("/profile")
    //         } else {
    //             navigate("/users-profile")
    //         }
    //     }, 1000)
    // }

    return (
        <div className="top__providers sticky top-[10px] bottom-[10px] overflow-y-scroll max-h-[100vh]">
            <div className="top__providers__search">
                <input placeholder="Search Askthechip" />
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clipPath="url(#clip0_3559_1518)">
                        <path d="M11.625 10.5H11.0325L10.8225 10.2975C11.5575 9.4425 12 8.3325 12 7.125C12 4.4325 9.8175 2.25 7.125 2.25C4.4325 2.25 2.25 4.4325 2.25 7.125C2.25 9.8175 4.4325 12 7.125 12C8.3325 12 9.4425 11.5575 10.2975 10.8225L10.5 11.0325V11.625L14.25 15.3675L15.3675 14.25L11.625 10.5ZM7.125 10.5C5.2575 10.5 3.75 8.9925 3.75 7.125C3.75 5.2575 5.2575 3.75 7.125 3.75C8.9925 3.75 10.5 5.2575 10.5 7.125C10.5 8.9925 8.9925 10.5 7.125 10.5Z" fill="#068978" fillOpacity="0.7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3559_1518">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="providers mt-[1rem]">
                <header>
                    <h2>TOP Service PROVIDERS</h2>
                </header>
                {providers.map((provider, index) =>
                    <div className="flex items-center py-[.55rem] px-[12px] gap-[10px]" key={index}>
                        <img src={provider?.profileImg ? provider?.profileImg : demoImg} alt="" className="h-[35px] w-[35px] rounded-full cover cursor-pointer" />
                        <p className="text-[.9rem] font-[500] cursor-pointer">{provider?.firstName} {provider?.lastName}</p>
                    </div>
                )}
                <button>
                    <span>See More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M5.30625 4.5L0.80625 9L9.61443e-09 8.19375L3.7125 4.5L0.0187498 0.806251L0.825 9.83802e-09L5.30625 4.5Z" fill="white" />
                        <path d="M10.023 4.5L5.52305 9L4.7168 8.19375L8.4293 4.5L4.73555 0.806251L5.5418 9.83802e-09L10.023 4.5Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    )
}