import axios from "axios";
import demoImg from "../../assets/blank-profile-picture-973460__340.webp"
import { useDispatch } from "react-redux";
import { setChatUserId, setMessageClass } from "../../store/slice/chatViewSlice";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setConversationId } from "../../store/slice/chatViewSlice";

export const Message = ({ conversation }) => {
    const { token } = useAuth()
    const userId = useSelector((state) => state?.user?.user?._id);
    const previewMessage = useSelector((state) => state?.chat?.previewMessage?.text);
    const [userDetails, setUserDetails] = useState([])

    const dispatch = useDispatch()

    const saveId = () => {
        dispatch(setChatUserId(userDetails))
        dispatch(setConversationId(conversation?._id))
        dispatch(setMessageClass("show"))
    }

    const id = conversation?.members.find(id => id !== userId);
    const url = `https://askthechip-hvp93.ondigitalocean.app/api/users/${id}`

    const getUserDetails = () => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                setUserDetails(response?.data?.data?.user)
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <div onClick={saveId} className="chat__messages">
            <img src={userDetails?.profileImg ? userDetails?.profileImg : demoImg} alt={userDetails?.fullName} />
            <div className="sender__info">
                <h3>{userDetails?.fullName}</h3>
                <p>{previewMessage}</p>
            </div>
            <div className="time">
                {/* <p role="time">{info?.time}</p>
                <span>{info?.unread}</span> */}
            </div>
        </div>
    )
}