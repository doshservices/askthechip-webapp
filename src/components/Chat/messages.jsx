import axios from "axios";
import demoImg from "../../assets/blank-profile-picture-973460__340.webp"
import { useDispatch } from "react-redux";
import { setChatUserId, setMessageClass } from "../../store/slice/chatViewSlice";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setConversationId } from "../../store/slice/chatViewSlice";
import { api } from "../../contexts/index"

export { demoImg }

export const Message = ({ conversation, online }) => {
    const { token } = useAuth()
    const userId = useSelector((state) => state?.user?.user?._id);
    const [userDetails, setUserDetails] = useState([])
    const [previewMessage, setPreviewMessage] = useState([])

    const checkUserOnline = () => {
        if (online?.includes(userDetails?._id)) {
            return "Online"
        } else {
            return "Offline"
        }
    }

    const onlineUser = checkUserOnline()

    const dispatch = useDispatch();

    const saveId = () => {
        dispatch(setChatUserId(userDetails))
        dispatch(setConversationId(conversation?._id))
        dispatch(setMessageClass("show"))
    }

    const id = conversation?.members.find(id => id !== userId);

    const url = `${api}/api/users/${id}`

    const getUserDetails = () => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                setUserDetails(response?.data?.data?.user)
            }).catch((error) => {
            })
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    const getMessages = async () => {
        try {
            const response = await axios.get(
                `${api}/api/chat/conversation/messages?conversationId=${conversation?._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // console.log(response);
            setPreviewMessage(response?.data?.data?.message.pop()?.text)
        } catch (error) {
        }
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <div onClick={saveId} className="chat__messages">
                <img className={onlineUser === "Online" ? "Online" : ""} src={userDetails?.profileImg ? userDetails?.profileImg : demoImg} alt={userDetails?.fullName} />
                <div className="sender__info">
                    <h3>{userDetails?.firstName} {userDetails?.lastName}</h3>
                    <p>{previewMessage}</p>
                </div>
                <div className="time">
                    <p role="time">11:45am</p>
                    <span>3</span>
                </div>
            </div>
        </>
    )
}