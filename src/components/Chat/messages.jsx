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
    // console.log(conversation);
    const { token } = useAuth()
    const userId = useSelector((state) => state?.user?.user?._id);
    // const previewMessage = useSelector((state) => state?.chat?.previewMessage?.text);
    const [userDetails, setUserDetails] = useState([])
    const [previewMessage, setPreviewMessage] = useState([])

    const dispatch = useDispatch();

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

    const getMessages = async () => {
        try {
            const response = await axios.get(
                `https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation/messages?conversationId=${conversation?._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setPreviewMessage(response?.data?.data?.message.pop()?.text)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <div onClick={saveId} className="chat__messages">
                <img src={userDetails?.profileImg ? userDetails?.profileImg : demoImg} alt={userDetails?.fullName} />
                <div className="sender__info">
                    <h3>{userDetails?.fullName}</h3>
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