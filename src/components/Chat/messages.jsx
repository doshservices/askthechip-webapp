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
import { useSocket } from "../../contexts/SocketContext/SocketContext";

export { demoImg }

export const Message = ({ conversation, online, preview }) => {
    const { token } = useAuth()
    const userId = useSelector((state) => state?.user?.user?._id);
    const [userDetails, setUserDetails] = useState([])
    const [previewMessage, setPreviewMessage] = useState([])
    const { socket } = useSocket()

    const dispatch = useDispatch();

    const saveId = () => {
        dispatch(setChatUserId(userDetails))
        dispatch(setConversationId(conversation?._id))
        dispatch(setMessageClass("show"))
    }

    useEffect(() => {
        socket?.on("getMessage", (incomingMessage) => {
            // console.log(incomingMessage);
            // setPreviewMessage(prevConversation => ({
            //     ...prevConversation, incomingMessage
            // }));
        });
    }, []);

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
            setPreviewMessage((response?.data?.data?.message ?? '')[response?.data?.data?.message?.length - 1]);
        } catch (error) {
        }
    }

    useEffect(() => {
        getMessages()
    }, [])

    const onlineUser = online?.includes(userDetails?._id) ? "Online" : "Offline";
    const username =
        userDetails?.role === "BUSINESS"
            ? `${userDetails?.companyName}`
            : `${userDetails?.firstName} ${userDetails?.lastName}`;

    return (
        <>
            <div onClick={saveId} className="chat__messages">
                <img className={onlineUser === "Online" ? "Online" : ""} src={userDetails?.profileImg ? userDetails?.profileImg : demoImg} alt={username} />
                <div className="sender__info">
                    <h3>{username}</h3>
                    <p>{previewMessage?.text}</p>
                </div>
                <div className="time">
                    <p role="time">11:45am</p>
                    <span>3</span>
                </div>
            </div>
        </>
    )
}